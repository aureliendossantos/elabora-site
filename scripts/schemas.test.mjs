import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { createServer } from 'node:http';
import { readSnapshot, syncSchemas, validateSnapshot, verifyDeployment } from './schemas.mjs';

function changeSchema(snapshot, name, edit) {
  const schema = JSON.parse(snapshot.files.get(name));
  edit(schema);
  const bytes = Buffer.from(JSON.stringify(schema));
  snapshot.files.set(name, bytes);
  const [version, ...path] = name.split('/');
  snapshot.manifest.versions[version].files[path.join('/')] = createHash('sha256').update(bytes).digest('hex');
}

test('the published snapshot is complete and every reference resolves', () => {
  const result = validateSnapshot(readSnapshot());
  assert(result.schemas > 0);
  assert(result.references > 0);
});

test('missing, altered and untracked files prevent publication', () => {
  const missing = readSnapshot();
  missing.files.delete('0.1/defs.schema.json');
  assert.throws(() => validateSnapshot(missing), /Missing published file/);
  const altered = readSnapshot();
  altered.files.set('0.1/course.schema.json', Buffer.from('{}'));
  assert.throws(() => validateSnapshot(altered), /SHA-256 mismatch/);
  const untracked = readSnapshot();
  untracked.files.set('0.1/secret.txt', Buffer.from('not a schema'));
  assert.throws(() => validateSnapshot(untracked), /Untracked published file/);
});

test('checks canonical identifiers, external references and JSON Pointer fragments', () => {
  const wrongId = readSnapshot();
  changeSchema(wrongId, '0.1/course.schema.json', (schema) => { schema.$id = 'https://other.example/course'; });
  assert.throws(() => validateSnapshot(wrongId), /identifier does not match/);
  const external = readSnapshot();
  changeSchema(external, '0.1/course.schema.json', (schema) => { schema.$ref = 'https://other.example/missing.schema.json'; });
  assert.throws(() => validateSnapshot(external), /Unresolved schema reference/);
  const pointer = readSnapshot();
  changeSchema(pointer, '0.1/course.schema.json', (schema) => { schema.$ref = 'defs.schema.json#/$defs/missing'; });
  assert.throws(() => validateSnapshot(pointer), /Unresolved JSON Pointer/);
});

test('sync uses committed bytes, preserves old versions and refuses to overwrite a published version', (t) => {
  const temp = mkdtempSync(join(tmpdir(), 'elabora-schemas-test-'));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  const core = join(temp, 'core');
  const output = join(temp, 'public/schemas');
  mkdirSync(core);
  const git = (...args) => execFileSync('git', ['-C', core, ...args], { encoding: 'utf8' }).trim();
  git('init', '--quiet');
  function commit() {
    git('add', '.');
    git('-c', 'user.name=Schema Test', '-c', 'user.email=schemas@example.test', '-c', 'commit.gpgsign=false', 'commit', '--quiet', '-m', 'Schema fixture');
    return git('rev-parse', 'HEAD');
  }
  function schema(version, title) {
    const file = join(core, 'packages/format/schemas', version, 'course.schema.json');
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, JSON.stringify({
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      $id: `https://elabora.studio/schemas/${version}/course.schema.json`, title, type: 'object',
    }) + '\n');
  }
  writeFileSync(join(core, 'LICENSE'), 'Apache-2.0 fixture licence\n');
  schema('0.1', 'First release');
  const first = commit();
  schema('0.1', 'Uncommitted change');
  syncSchemas(core, first, '0.1', output);
  const original = readFileSync(join(output, '0.1/course.schema.json'));
  assert.equal(JSON.parse(original).title, 'First release');
  assert.equal(syncSchemas(core, first, '0.1', output).unchanged, true);
  schema('0.2', 'Next release');
  const next = commit();
  syncSchemas(core, next, '0.2', output);
  assert(readFileSync(join(output, '0.1/course.schema.json')).equals(original));
  assert.equal(validateSnapshot(readSnapshot(output)).schemas, 2);
  const before = readFileSync(join(output, 'manifest.json'));
  assert.throws(() => syncSchemas(core, next, '0.1', output), /version 0.1 is frozen/);
  assert(readFileSync(join(output, 'manifest.json')).equals(before));
  assert(readFileSync(join(output, '0.1/course.schema.json')).equals(original));
});

test('the live check waits for a file a fresh deployment does not serve yet, then gives up', async () => {
  const snapshot = readSnapshot();
  const files = new Map(snapshot.files);
  files.set('manifest.json', Buffer.from(`${JSON.stringify(snapshot.manifest, null, 2)}\n`));
  const late = [...files.keys()].find((name) => name.endsWith('.schema.json'));
  let lateAnswers = 0;
  let serveLate = 2; // how many times the late file answers 404 first (Infinity: never served)
  const server = createServer((request, response) => {
    const name = decodeURIComponent(new URL(request.url, 'http://x').pathname).replace(/^\/schemas\//, '');
    const bytes = files.get(name);
    if (!bytes || (name === late && lateAnswers++ < serveLate)) { response.writeHead(404); response.end(); return; }
    const type = name.endsWith('.schema.json') ? 'application/schema+json' : name.endsWith('.json') ? 'application/json' : 'text/plain';
    response.writeHead(200, { 'content-type': type, 'access-control-allow-origin': '*', etag: '"x"', 'cache-control': 'public, max-age=0, must-revalidate' });
    response.end(bytes);
  });
  await new Promise((done) => server.listen(0, '127.0.0.1', done));
  const origin = `http://127.0.0.1:${server.address().port}`;
  try {
    await verifyDeployment(origin, readSnapshot(), { patienceMs: 2000, retryMs: 50 });
    assert.equal(lateAnswers, 3);
    lateAnswers = 0;
    serveLate = Infinity;
    await assert.rejects(verifyDeployment(origin, readSnapshot(), { patienceMs: 300, retryMs: 50 }), /expected HTTP 200/);
  } finally {
    server.close();
  }
});
