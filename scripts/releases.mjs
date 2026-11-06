// Only published GitHub release assets enter the website snapshot. Preparation branches and the
// private app checkout are never data sources. Replace the snapshot only after the whole sync passes.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { ASSETS_REPOSITORY, parseReleases, releaseSchema } from '../src/lib/releases.ts';

const root = fileURLToPath(new URL('../', import.meta.url));
const destination = path.join(root, 'src/data/releases.json');
// The assets repository is public: no token is needed, so a local deploy reads it too and never drops a
// changelog page the bot added. A token, when the environment has one (Actions), only raises GitHub's rate limit.
async function get(url, json = true) {
  const token = url.startsWith('https://api.github.com/') ? process.env.GH_TOKEN ?? process.env.GITHUB_TOKEN : undefined;
  const response = await fetch(url, { headers: { 'User-Agent': 'elabora-site', ...(json ? { Accept: 'application/vnd.github+json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}) } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return json ? response.json() : Buffer.from(await response.arrayBuffer());
}
export function verifyRelease(bytes, sums, tag, prerelease) {
  const matches = sums.split('\n').filter(line => /^[a-f0-9]{64}  release\.json$/.test(line));
  if (matches.length !== 1 || matches[0].slice(0, 64) !== crypto.createHash('sha256').update(bytes).digest('hex')) throw new Error(`${tag}: release.json checksum mismatch`);
  const record = releaseSchema.parse(JSON.parse(bytes.toString('utf8')));
  if (`v${record.version}` !== tag || record.version.includes('-') !== prerelease) throw new Error(`${tag}: release metadata mismatch`);
  return record;
}
export async function sync() {
  const releases = [];
  for (let page = 1; ; page++) {
    const batch = await get(`https://api.github.com/repos/${ASSETS_REPOSITORY}/releases?per_page=100&page=${page}`);
    releases.push(...batch.filter(release => !release.draft));
    if (batch.length < 100) break;
  }
  const records = [];
  for (const release of releases) {
    if (!/^v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(release.tag_name)) throw new Error('Unexpected public release tag');
    const asset = name => `https://github.com/${ASSETS_REPOSITORY}/releases/download/${release.tag_name}/${name}`;
    records.push(verifyRelease(await get(asset('release.json'), false), (await get(asset('SHA256SUMS'), false)).toString('utf8'), release.tag_name, release.prerelease));
  }
  const result = parseReleases(records);
  fs.writeFileSync(destination, `${JSON.stringify(result, null, 2)}\n`);
  console.log(`Synced ${result.length} published releases from ${ASSETS_REPOSITORY}.`);
}
// Before a deploy: the build in dist/ must serve the committed snapshot, never a preview's ELABORA_RELEASES_FILE.
export function guard(dist = path.join(root, 'dist')) {
  if (process.env.ELABORA_RELEASES_FILE) throw new Error('ELABORA_RELEASES_FILE is set: preview release data is never deployed.');
  const built = path.join(dist, 'releases.json');
  if (!fs.existsSync(built)) throw new Error('Build the site before deploying it.');
  const snapshot = JSON.stringify(parseReleases(JSON.parse(fs.readFileSync(destination, 'utf8'))));
  if (JSON.stringify(parseReleases(JSON.parse(fs.readFileSync(built, 'utf8')))) !== snapshot) throw new Error('dist/ was built with other release data than src/data/releases.json (a preview?): rebuild without ELABORA_RELEASES_FILE.');
}
if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const read = () => parseReleases(JSON.parse(fs.readFileSync(destination, 'utf8')));
  if (process.argv[2] === 'sync') await sync();
  else if (process.argv[2] === 'check') console.log(`${read().length} valid published release records.`);
  else if (process.argv[2] === 'guard') { guard(); console.log('dist/ serves the published release snapshot.'); }
  // The workflow's dispatch names the version it publishes: after the sync, the snapshot must hold it.
  else if (process.argv[2] === 'expect') { if (process.argv[3] && !read().some(release => release.version === process.argv[3])) throw new Error(`${process.argv[3]} is not among the published releases.`); }
  else throw new Error('Use releases.mjs sync|check|guard|expect <version>');
}
