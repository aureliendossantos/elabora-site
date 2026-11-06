// Publish exact schema bytes from a chosen local core commit. Builds use the checked-in snapshot:
// they never depend on a sibling checkout, network access or a public GitHub repository.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const SNAPSHOT = join(ROOT, 'public/schemas');
const BASE = 'https://elabora.studio/schemas/';
const SOURCE = 'packages/format/schemas';
const VERSION = /^\d+\.\d+(?:\.\d+)?$/;
const SCHEMA_FILE = /^(?:[a-z0-9-]+\/)*[a-z0-9-]+\.schema\.json$/;
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
const json = (value) => JSON.stringify(value, null, 2) + '\n';

export function readSnapshot(directory = SNAPSHOT) {
  const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
  const files = new Map();
  function walk(dir, prefix = '') {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const name = prefix + entry.name;
      if (entry.isDirectory()) walk(join(dir, entry.name), name + '/');
      else {
        assert(entry.isFile(), `Unexpected non-file: ${name}`);
        if (name !== 'manifest.json') files.set(name, readFileSync(join(dir, entry.name)));
      }
    }
  }
  walk(directory);
  return { manifest, files };
}

// Validate the entire reference graph, including relative paths from blocks/ and JSON Pointers.
export function validateSnapshot({ manifest, files }) {
  assert.equal(manifest.source, SOURCE, 'Unexpected schema source');
  assert.equal(manifest.license, 'Apache-2.0', 'Unexpected schema licence');
  assert(Object.keys(manifest.versions).length, 'No schema versions');
  const expected = new Set();
  const resources = new Map();
  const anchors = new Map();
  const references = [];
  let count = 0;
  function walk(node, base, root = false) {
    if (!node || typeof node !== 'object') return;
    if (!Array.isArray(node)) {
      if (typeof node.$id === 'string') {
        base = new URL(node.$id, base).href;
        assert(!resources.has(base), `Duplicate schema identifier: ${base}`);
        resources.set(base, node);
      } else if (root) resources.set(base, node);
      if (typeof node.$anchor === 'string') anchors.set(`${base}#${node.$anchor}`, node);
      for (const keyword of ['$ref', '$dynamicRef']) {
        if (typeof node[keyword] === 'string') references.push({ base, ref: node[keyword] });
      }
    }
    for (const child of Object.values(node)) walk(child, base);
  }
  for (const [version, release] of Object.entries(manifest.versions)) {
    assert(VERSION.test(version), `Invalid format version: ${version}`);
    assert(/^[a-f0-9]{40,64}$/.test(release.revision), `Invalid core revision: ${version}`);
    assert(Object.hasOwn(release.files, 'LICENSE.txt'), `Missing licence: ${version}`);
    let schemas = 0;
    for (const [file, digest] of Object.entries(release.files)) {
      assert(file === 'LICENSE.txt' || SCHEMA_FILE.test(file), `Unexpected schema file: ${file}`);
      const name = `${version}/${file}`;
      expected.add(name);
      assert(files.has(name), `Missing published file: ${name}`);
      assert.equal(hash(files.get(name)), digest, `SHA-256 mismatch: ${name}`);
      if (file === 'LICENSE.txt') continue;
      const schema = JSON.parse(files.get(name).toString('utf8'));
      assert.equal(schema.$id, BASE + name, `Schema identifier does not match its URL: ${name}`);
      assert.equal(schema.$schema, 'https://json-schema.org/draft/2020-12/schema', `Unexpected dialect: ${name}`);
      walk(schema, schema.$id, true);
      schemas++;
    }
    assert(schemas, `No schemas in version ${version}`);
    count += schemas;
  }
  for (const name of files.keys()) assert(expected.has(name), `Untracked published file: ${name}`);
  for (const { base, ref } of references) {
    const url = new URL(ref, base);
    const fragment = decodeURIComponent(url.hash.slice(1));
    url.hash = '';
    let target = resources.get(url.href);
    assert(target !== undefined, `Unresolved schema reference: ${ref} from ${base}`);
    if (fragment.startsWith('/')) {
      for (const token of fragment.slice(1).split('/')) {
        const key = token.replace(/~1/g, '/').replace(/~0/g, '~');
        assert(target && typeof target === 'object' && Object.hasOwn(target, key), `Unresolved JSON Pointer: ${ref} from ${base}`);
        target = target[key];
      }
    } else if (fragment) assert(anchors.has(`${url.href}#${fragment}`), `Unresolved anchor: ${ref} from ${base}`);
  }
  return { schemas: count, references: references.length };
}

export function syncSchemas(core, ref, version, directory = SNAPSHOT) {
  assert(core && ref && VERSION.test(version), 'Usage: pnpm run schemas:sync <local-core> <commit-or-tag> <format-version>');
  const git = (...args) => execFileSync('git', ['-C', resolve(core), ...args]);
  const revision = git('rev-parse', '--verify', '--end-of-options', `${ref}^{commit}`).toString().trim();
  const prefix = `${SOURCE}/${version}/`;
  const names = git('ls-tree', '-r', '--name-only', revision, '--', prefix).toString().trim().split('\n').filter((name) => name.endsWith('.schema.json'));
  assert(names.length, `No ${version} schemas at core commit ${revision}`);
  const snapshot = existsSync(directory) ? readSnapshot(directory) : {
    manifest: { source: SOURCE, license: 'Apache-2.0', versions: {} }, files: new Map(),
  };
  if (Object.keys(snapshot.manifest.versions).length) validateSnapshot(snapshot);
  const additions = new Map([['LICENSE.txt', git('show', `${revision}:LICENSE`)]]);
  for (const name of names) additions.set(name.slice(prefix.length), git('show', `${revision}:${name}`));
  const digests = Object.fromEntries([...additions].map(([name, bytes]) => [name, hash(bytes)]));
  const existing = snapshot.manifest.versions[version];
  if (existing) {
    assert.deepEqual(digests, existing.files, `Published version ${version} is frozen. Publish changed schemas under a new core format version.`);
    return { revision: existing.revision, unchanged: true };
  }
  snapshot.manifest.versions[version] = { revision, files: digests };
  for (const [name, bytes] of additions) snapshot.files.set(`${version}/${name}`, bytes);
  validateSnapshot(snapshot); // Check every reference before writing any new public files.
  for (const [name, bytes] of additions) {
    const target = join(directory, version, name);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, bytes);
  }
  writeFileSync(join(directory, 'manifest.json'), json(snapshot.manifest));
  return { revision, unchanged: false };
}

/**
 * Checks the live schemas against the snapshot. Right after `wrangler deploy`, Cloudflare can still answer a new file
 * with 404 (or an old one with its former bytes) for a minute: a file that fails is tried again every `retryMs`, until
 * `patienceMs` after the start (two minutes by default), and only then is the failure reported.
 */
export async function verifyDeployment(origin = 'https://elabora.studio', snapshot = readSnapshot(), { patienceMs = 120_000, retryMs = 10_000 } = {}) {
  const result = validateSnapshot(snapshot);
  const publicFiles = new Map(snapshot.files);
  publicFiles.set('manifest.json', Buffer.from(json(snapshot.manifest)));
  const deadline = Date.now() + patienceMs;
  const checkFile = async (name, expected) => {
    const url = new URL(`/schemas/${name}`, origin);
    const response = await fetch(url, {
      redirect: 'manual', signal: AbortSignal.timeout(15000), headers: { Origin: 'https://schema-editor.example' },
    });
    assert.equal(response.status, 200, `${url}: expected HTTP 200`);
    const mime = name.endsWith('.schema.json') ? 'application/schema+json' : name.endsWith('.json') ? 'application/json' : 'text/plain';
    assert.equal(response.headers.get('content-type')?.split(';')[0], mime, `${url}: wrong content type`);
    assert.equal(response.headers.get('access-control-allow-origin'), '*', `${url}: missing public CORS header`);
    assert(response.headers.has('etag'), `${url}: missing ETag`);
    assert.match(response.headers.get('cache-control') ?? '', /must-revalidate/, `${url}: missing cache revalidation`);
    assert(Buffer.from(await response.arrayBuffer()).equals(expected), `${url}: deployed bytes differ from the pinned snapshot`);
  };
  const patiently = async (name, expected) => {
    for (;;) {
      try { return await checkFile(name, expected); } catch (error) {
        if (Date.now() + retryMs > deadline) throw error;
        await new Promise((done) => setTimeout(done, retryMs));
      }
    }
  };
  // Bounded batches keep the verifier quick without opening a connection for every schema at once.
  const entries = [...publicFiles];
  for (let start = 0; start < entries.length; start += 6) {
    await Promise.all(entries.slice(start, start + 6).map(([name, expected]) => patiently(name, expected)));
  }
  const missing = await fetch(new URL('/schemas/0.0/not-published.schema.json', origin), { redirect: 'manual', signal: AbortSignal.timeout(15000) });
  assert.equal(missing.status, 404, 'Missing schemas must return HTTP 404');
  return result;
}

if (import.meta.main) {
  try {
    const [command, ...args] = process.argv.slice(2);
    if (command === 'sync') {
      const result = syncSchemas(...args);
      console.log(`${result.unchanged ? 'Already pinned to' : 'Published snapshot from'} core ${result.revision}`);
    } else if (command === 'check') {
      const result = validateSnapshot(readSnapshot(args[0] ? resolve(args[0]) : SNAPSHOT));
      console.log(`${result.schemas} schemas: SHA-256, canonical URLs and ${result.references} references checked`);
    } else if (command === 'verify') {
      const result = await verifyDeployment(args[0]);
      console.log(`${result.schemas} deployed schemas match the pinned core snapshot; ${result.references} references resolve; HTTP headers and missing-schema 404 checked`);
    } else throw new Error('Expected sync, check or verify');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
