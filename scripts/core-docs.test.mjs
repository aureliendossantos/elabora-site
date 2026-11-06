import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { checkSnapshot } from './core-docs.mjs';

const SNAPSHOT = fileURLToPath(new URL('../src/content/core-docs/', import.meta.url));

function copy() {
  const dir = mkdtempSync(join(tmpdir(), 'core-docs-'));
  cpSync(SNAPSHOT, dir, { recursive: true });
  return dir;
}

test('the docs snapshot matches its manifest and holds the map', () => {
  const { manifest, count } = checkSnapshot();
  assert.match(manifest.revision, /^[a-f0-9]{40}$/);
  assert.ok(count > 10);
});

test('an edited, added or removed page fails the check: the snapshot is only ever synced', () => {
  for (const change of [
    (dir) => writeFileSync(join(dir, 'docs/index.md'), '# edited here\n'),
    (dir) => writeFileSync(join(dir, 'docs/extra.md'), '# not from the core\n'),
    (dir) => rmSync(join(dir, 'SPEC.md')),
  ]) {
    const dir = copy();
    try {
      change(dir);
      assert.throws(() => checkSnapshot(dir));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
});
