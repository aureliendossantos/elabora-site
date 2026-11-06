import assert from 'node:assert/strict';
import { test } from 'node:test';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { downloads, HIGHLIGHTS, latestRelease, parseReleases, releaseSchema } from '../src/lib/releases.ts';
import { guard, verifyRelease } from './releases.mjs';

const record = () => ({ schemaVersion: 1, version: '1.2.0', date: '2026-10-17', core: { revision: 'a'.repeat(40), version: '0.2.0' },
  title: { en: 'Import existing courses', fr: 'Importer des modules existants' }, highlights: { en: ['Import an existing course', 'Keep its narration'], fr: ['Importer un module existant', 'Garder sa narration'] },
  entries: [{ id: 'import', kind: 'feature', source: 'core', text: { en: 'Import existing courses.', fr: 'Importez des modules existants.' } }, { id: 'capture', kind: 'fix', source: 'app', text: { en: 'Fix Windows captures.' } }], announce: true, signed: { windows: false, mac: false } });
test('published records preserve English fallback and require French feature text', () => {
  const valid = record(); assert.equal(releaseSchema.parse(valid).entries[1].text.fr, undefined);
  delete valid.entries[0].text.fr; assert.throws(() => releaseSchema.parse(valid));
  assert.throws(() => parseReleases([record(), record()]), /Duplicate/);
});
test('a published release needs matching checksums, version tag and release channel', () => {
  const bytes = Buffer.from(JSON.stringify(record()));
  const sums = `${crypto.createHash('sha256').update(bytes).digest('hex')}  release.json\n`;
  assert.deepEqual(verifyRelease(bytes, sums, 'v1.2.0', false), record());
  assert.throws(() => verifyRelease(Buffer.from('corrupted'), sums, 'v1.2.0', false), /checksum/);
  assert.throws(() => verifyRelease(bytes, sums, 'v1.3.0', false), /metadata/);
  assert.throws(() => verifyRelease(bytes, sums, 'v1.2.0', true), /metadata/);
  assert.throws(() => verifyRelease(bytes, sums + sums, 'v1.2.0', false), /checksum/);
});
test('the highlights rule is the app\'s: 1 to 5 bullets of a few words, checked against the shared fixtures', () => {
  const fixtures = JSON.parse(fs.readFileSync(new URL('./fixtures/release-highlights.json', import.meta.url), 'utf8'));
  assert.deepEqual(fixtures.rule, HIGHLIGHTS);
  for (const fixture of fixtures.cases) assert.equal(releaseSchema.safeParse({ ...record(), highlights: fixture.highlights }).success, fixture.valid, fixture.name);
});
test('download buttons point at the newest stable release\'s installers and say which are unsigned', () => {
  const old = { ...record(), version: '0.9.0' }; const beta = { ...record(), version: '0.10.0' }; const next = { ...record(), version: '0.11.0-rc.1' };
  assert.equal(latestRelease([old, next, beta]).version, '0.10.0');
  assert.equal(latestRelease([]), undefined);
  assert.deepEqual(downloads({ ...beta, signed: { windows: false, mac: true } }), [
    { platform: 'windows', url: 'https://github.com/aureliendossantos/elabora-releases/releases/download/v0.10.0/Elabora-0.10.0-win-x64-installer.exe', signed: false },
    { platform: 'mac-arm64', url: 'https://github.com/aureliendossantos/elabora-releases/releases/download/v0.10.0/Elabora-0.10.0-mac-arm64.dmg', signed: true },
    { platform: 'mac-x64', url: 'https://github.com/aureliendossantos/elabora-releases/releases/download/v0.10.0/Elabora-0.10.0-mac-x64.dmg', signed: true }]);
  assert.throws(() => releaseSchema.parse({ ...record(), signed: undefined }));
});
test('a build made with preview release data cannot be deployed', () => {
  const dist = fs.mkdtempSync(path.join(os.tmpdir(), 'elabora-site-guard-'));
  const preview = process.env.ELABORA_RELEASES_FILE;
  try {
    delete process.env.ELABORA_RELEASES_FILE;
    assert.throws(() => guard(dist), /Build the site/);
    const snapshot = fs.readFileSync(new URL('../src/data/releases.json', import.meta.url), 'utf8');
    fs.writeFileSync(path.join(dist, 'releases.json'), snapshot); guard(dist);
    fs.writeFileSync(path.join(dist, 'releases.json'), JSON.stringify([record()])); assert.throws(() => guard(dist), /preview/);
    process.env.ELABORA_RELEASES_FILE = '/tmp/preview.json'; fs.writeFileSync(path.join(dist, 'releases.json'), snapshot); assert.throws(() => guard(dist), /never deployed/);
  } finally { if (preview === undefined) delete process.env.ELABORA_RELEASES_FILE; else process.env.ELABORA_RELEASES_FILE = preview; fs.rmSync(dist, { recursive: true, force: true }); }
});
