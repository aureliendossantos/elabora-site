import fs from 'node:fs';
import { z } from 'astro/zod';
import snapshot from '../data/releases.json' with { type: 'json' };

export const ASSETS_REPOSITORY = 'aureliendossantos/elabora-releases';
// The highlights' rule, the same in the app (elabora-app src/shared/release-notes.ts); both test it against
// identical fixtures (scripts/fixtures/release-highlights.json). They are the app's notes: bullets of a few words,
// so no final period.
export const HIGHLIGHTS = { min: 1, max: 5, maxLength: 60 } as const;
const plain = (max: number) => z.string().min(1).max(max).refine(value => value === value.trim() && !/[\u0000-\u0008\u000b\u000c\u000e-\u001f<>]/.test(value) && !/\b(?:TODO|TBD|PLACEHOLDER)\b/i.test(value));
const bullet = plain(HIGHLIGHTS.maxLength).refine(value => !value.endsWith('.'));
const version = z.string().max(80).regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/)
  .refine(value => value.split('-')[0]!.split('.').every(part => Number.isSafeInteger(Number(part))) && (!value.includes('-') || value.slice(value.indexOf('-') + 1).split('.').every(part => !/^\d+$/.test(part) || /^(0|[1-9]\d*)$/.test(part))));
export const releaseSchema = z.object({
  schemaVersion: z.literal(1), version,
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => { const date = new Date(value); return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value; }),
  core: z.object({ revision: z.string().regex(/^[a-f0-9]{40}$/), version }),
  title: z.object({ en: plain(120), fr: plain(120) }),
  highlights: z.object({ en: z.array(bullet).min(HIGHLIGHTS.min).max(HIGHLIGHTS.max), fr: z.array(bullet).min(HIGHLIGHTS.min).max(HIGHLIGHTS.max) })
    .refine(value => value.en.length === value.fr.length && new Set(value.en).size === value.en.length && new Set(value.fr).size === value.fr.length),
  entries: z.array(z.object({ id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), kind: z.enum(['feature', 'improvement', 'fix', 'technical', 'security']),
    source: z.enum(['app', 'core']), text: z.object({ en: plain(2000), fr: plain(2000).optional() }) }).refine(entry => entry.kind !== 'feature' || !!entry.text.fr)).min(1)
    .refine(entries => new Set(entries.map(entry => entry.id)).size === entries.length),
  announce: z.boolean(),
  // How the installers were made: the download buttons add the steps that open an unsigned build.
  signed: z.object({ windows: z.boolean(), mac: z.boolean() }),
});
export type ReleaseRecord = z.infer<typeof releaseSchema>;
export function parseReleases(value: unknown): ReleaseRecord[] {
  const records = z.array(releaseSchema).parse(value);
  if (new Set(records.map(record => record.version)).size !== records.length) throw new Error('Duplicate release versions');
  return records.sort((a, b) => b.date.localeCompare(a.date) || b.version.localeCompare(a.version, 'en', { numeric: true }));
}
export function publishedReleases(): ReleaseRecord[] {
  // A fixture file lets a local preview exercise real release pages before the first publication. It is never
  // deployed: `releases.mjs guard` (run by `npm run deploy`, the workflow and wrangler's build command) refuses a
  // build whose /releases.json is not the committed snapshot.
  return parseReleases(process.env.ELABORA_RELEASES_FILE ? JSON.parse(fs.readFileSync(process.env.ELABORA_RELEASES_FILE, 'utf8')) : snapshot);
}
// The newest public stable release, whose installers the download buttons point at. File names hold the version
// (the app's release workflow names them), so there is no stable « latest » address.
export function latestRelease(releases = publishedReleases()): ReleaseRecord | undefined {
  return releases.filter(release => !release.version.includes('-')).sort((a, b) => b.version.localeCompare(a.version, 'en', { numeric: true }))[0];
}
export type Platform = 'windows' | 'mac-arm64' | 'mac-x64';
export function downloads(release: ReleaseRecord): { platform: Platform; url: string; signed: boolean }[] {
  const file = (name: string) => `https://github.com/${ASSETS_REPOSITORY}/releases/download/v${encodeURIComponent(release.version)}/${name}`;
  return [
    { platform: 'windows', url: file(`Elabora-${release.version}-win-x64-installer.exe`), signed: release.signed.windows },
    { platform: 'mac-arm64', url: file(`Elabora-${release.version}-mac-arm64.dmg`), signed: release.signed.mac },
    { platform: 'mac-x64', url: file(`Elabora-${release.version}-mac-x64.dmg`), signed: release.signed.mac },
  ];
}
export const changelogPath = (lang: 'en' | 'fr', release?: string) => `/${lang}/changelog/${release ? `${release}/` : ''}`;
