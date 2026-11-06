// The developer documentation of elabora-core, as of a chosen core commit. Builds use the checked-in
// snapshot (src/content/core-docs/): they never need a sibling checkout, network access or a public
// GitHub repository. The Markdown is never edited here: change it in elabora-core, then sync again.
// `ELABORA_CORE_DIR=../elabora-core pnpm run dev` renders a core checkout's working tree instead.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const SNAPSHOT = join(ROOT, 'src/content/core-docs');
// What the site renders from the core: docs/ and the pages beside it that docs/index.md lists.
const SOURCES = ['docs', 'SPEC.md', 'CONTRIBUTING.md', 'CHANGELOG.md'];
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

function filesOf(directory) {
  const files = new Map();
  (function walk(dir, prefix) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const name = prefix + entry.name;
      if (entry.isDirectory()) walk(join(dir, entry.name), `${name}/`);
      else if (name !== 'manifest.json') files.set(name, readFileSync(join(dir, entry.name)));
    }
  })(directory, '');
  return files;
}

export function checkSnapshot(directory = SNAPSHOT) {
  const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
  assert.equal(manifest.source, 'elabora-core', 'Unexpected docs source');
  assert(/^[a-f0-9]{40}$/.test(manifest.revision), 'Invalid core revision');
  const files = filesOf(directory);
  assert.deepEqual([...files.keys()].sort(), Object.keys(manifest.files).sort(), 'The snapshot holds other files than its manifest lists: pnpm run docs:sync');
  for (const [name, digest] of Object.entries(manifest.files)) assert.equal(hash(files.get(name)), digest, `SHA-256 mismatch: ${name} (never edit the snapshot: pnpm run docs:sync)`);
  assert(files.has('docs/index.md'), 'No docs/index.md in the snapshot');
  return { manifest, count: files.size };
}

function sync(coreDir, ref) {
  assert(coreDir && ref, 'Usage: pnpm run docs:sync <core-dir> <commit-or-ref>');
  const core = resolve(coreDir);
  const git = (...args) => execFileSync('git', ['-C', core, ...args], { maxBuffer: 1 << 30 });
  const revision = git('rev-parse', '--verify', `${ref}^{commit}`).toString().trim();
  const names = git('ls-tree', '-r', '--name-only', revision, '--', ...SOURCES).toString().split('\n').filter(Boolean);
  assert(names.includes('docs/index.md'), `${revision} has no docs/index.md`);
  rmSync(SNAPSHOT, { recursive: true, force: true });
  const files = {};
  for (const name of names.sort()) {
    const bytes = git('show', `${revision}:${name}`);
    mkdirSync(dirname(join(SNAPSHOT, name)), { recursive: true });
    writeFileSync(join(SNAPSHOT, name), bytes);
    files[name] = hash(bytes);
  }
  writeFileSync(join(SNAPSHOT, 'manifest.json'), `${JSON.stringify({ source: 'elabora-core', revision, files }, null, 2)}\n`);
  console.log(`src/content/core-docs: ${names.length} files of elabora-core ${revision}.`);
}

const [command, ...args] = process.argv.slice(2);
if (import.meta.main) {
  if (command === 'sync') sync(...args);
  else if (command === 'check') {
    if (!existsSync(join(SNAPSHOT, 'manifest.json'))) throw new Error('No docs snapshot: pnpm run docs:sync ../elabora-core <commit>');
    const { manifest, count } = checkSnapshot();
    console.log(`core docs: ${count} files of elabora-core ${manifest.revision.slice(0, 12)}, unchanged.`);
  } else {
    console.error('Usage: node scripts/core-docs.mjs sync <core-dir> <commit-or-ref> | check');
    process.exit(2);
  }
}
