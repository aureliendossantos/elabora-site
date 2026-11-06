// What people search before they reach elabora.studio: the top queries and pages of Google Search Console, with
// their clicks, impressions, click-through rate and average position over a period. Read-only: a service account with
// read access to the property signs a JWT (node:crypto), trades it for a token, and calls searchAnalytics.query.
// No dependency, nothing written.
//
//   pnpm run search-console                      # the last 28 days, queries and pages, 25 rows each
//   pnpm run search-console -- --days 90 --limit 50
//   pnpm run search-console -- --start 2026-11-01 --end 2026-11-30 --by query
//   pnpm run search-console -- --by page --filter /compare/   # pages whose address holds /compare/
//   pnpm run search-console -- --json
//   pnpm run search-console -- --sites                        # the properties this account can read
//   pnpm run search-console -- --sitemaps                     # the sitemaps Google read, and when
//
// The service account's key: SEARCH_CONSOLE_KEY, by default ~/.config/elabora/search-console.json (keep it 0600, never
// in a repository). The property: SEARCH_CONSOLE_SITE, by default sc-domain:elabora.studio. docs/maintenance.md, « Search Console ».
import { createSign } from 'node:crypto';
import { readFileSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const args = process.argv.slice(2);
const option = (name, fallback) => (args.includes(`--${name}`) ? args[args.indexOf(`--${name}`) + 1] : fallback);
const json = args.includes('--json');
const site = process.env.SEARCH_CONSOLE_SITE || 'sc-domain:elabora.studio';
const keyFile = process.env.SEARCH_CONSOLE_KEY || join(homedir(), '.config', 'elabora', 'search-console.json');
const limit = Number(option('limit', 25));
const by = option('by', 'query,page').split(',');
const filter = option('filter', '');
const day = (d) => d.toISOString().slice(0, 10);
const end = option('end', day(new Date()));
const start = option('start', day(new Date(Date.parse(end) - (Number(option('days', 28)) - 1) * 86_400_000)));
for (const dimension of by) if (!['query', 'page', 'country', 'device'].includes(dimension)) throw new Error(`--by ${dimension}: query, page, country or device`);

let key;
try {
  key = JSON.parse(readFileSync(keyFile, 'utf8'));
} catch (error) {
  console.error(`No service account key at ${keyFile} (SEARCH_CONSOLE_KEY): ${error.code ?? error.message}`);
  process.exit(1);
}
if (statSync(keyFile).mode & 0o077) console.error(`warning: ${keyFile} can be read by other users; chmod 600 it.`);
if (!key.client_email || !key.private_key) {
  console.error(`${keyFile} is not a service account key (client_email, private_key).`);
  process.exit(1);
}

/** A token for the read-only Search Console scope, from a JWT signed with the service account's key. */
async function token() {
  const now = Math.floor(Date.now() / 1000);
  const tokenUri = key.token_uri || 'https://oauth2.googleapis.com/token';
  const part = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  const unsigned = `${part({ alg: 'RS256', typ: 'JWT' })}.${part({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: tokenUri, iat: now, exp: now + 3600 })}`;
  const signature = createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url');
  const response = await fetch(tokenUri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` }),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(`token: ${response.status} ${body.error ?? ''} ${body.error_description ?? ''}`.trim());
  return body.access_token;
}

async function query(accessToken, dimension) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const request = { startDate: start, endDate: end, dimensions: [dimension], rowLimit: limit, dataState: 'all' };
  if (filter) request.dimensionFilterGroups = [{ filters: [{ dimension: dimension === 'query' ? 'query' : 'page', operator: 'contains', expression: filter }] }];
  const response = await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' }, body: JSON.stringify(request) });
  const body = await response.json();
  if (!response.ok) throw new Error(`${dimension}: ${response.status} ${body.error?.message ?? ''}`.trim());
  return body.rows ?? [];
}

let accessToken;
const results = {};
try {
  accessToken = await token();
  // --sites: the properties this service account can read, and the address to add as a user of the property
  if (args.includes('--sites')) {
    const response = await fetch('https://www.googleapis.com/webmasters/v3/sites', { headers: { Authorization: `Bearer ${accessToken}` } });
    const body = await response.json();
    if (!response.ok) throw new Error(`sites: ${response.status} ${body.error?.message ?? ''}`.trim());
    console.log(`Service account: ${key.client_email}`);
    console.log((body.siteEntry ?? []).map((entry) => `  ${entry.siteUrl} (${entry.permissionLevel})`).join('\n') || '  no property yet: add this address as a user of the property in Search Console');
    process.exit(0);
  }
  // --sitemaps: the sitemaps Google knows for the property, when it last read them, and what it found
  if (args.includes('--sitemaps')) {
    const response = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/sitemaps`, { headers: { Authorization: `Bearer ${accessToken}` } });
    const body = await response.json();
    if (!response.ok) throw new Error(`sitemaps: ${response.status} ${body.error?.message ?? ''}`.trim());
    const list = body.sitemap ?? [];
    if (!list.length) console.log(`No sitemap submitted for ${site} yet: Search Console › Sitemaps › add https://elabora.studio/sitemap.xml (robots.txt names it too).`);
    for (const map of list) console.log(`${map.path}: submitted ${map.lastSubmitted ?? '—'}, read ${map.lastDownloaded ?? '—'}${map.isPending ? ' (pending)' : ''}, ${map.errors ?? 0} errors, ${map.warnings ?? 0} warnings, ${(map.contents ?? []).map((c) => `${c.submitted} ${c.type}`).join(', ') || 'no count yet'}`);
    process.exit(0);
  }
  for (const dimension of by) results[dimension] = await query(accessToken, dimension);
} catch (error) {
  // (a 403 « has not been used in project … or it is disabled »: the Google Cloud project of the service account must
  // enable the Google Search Console API once; a 403 « User does not have sufficient permission »: add the service
  // account's e-mail as a user of the property, in Search Console › Settings › Users and permissions)
  console.error(`Search Console: ${error.message}`);
  process.exit(1);
}
// The totals over the period, without a dimension (rows with too few impressions are left out of the dimensions).
const totalResponse = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ startDate: start, endDate: end, dataState: 'all' }),
});
const total = (await totalResponse.json()).rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 };

if (json) {
  console.log(JSON.stringify({ site, start, end, total, ...results }, null, 2));
} else {
  const pct = (x) => `${(x * 100).toFixed(1)} %`;
  console.log(`${site}, ${start} → ${end}: ${total.clicks} clicks, ${total.impressions} impressions, CTR ${pct(total.ctr)}, average position ${total.position ? total.position.toFixed(1) : '—'}`);
  for (const dimension of by) {
    const rows = results[dimension];
    console.log(`\nTop ${{ query: 'queries', page: 'pages', country: 'countries', device: 'devices' }[dimension]} (${rows.length})`);
    if (!rows.length) { console.log('  (none yet)'); continue; }
    const width = Math.min(70, Math.max(...rows.map((r) => r.keys[0].length)));
    console.log(`  ${dimension.padEnd(width)}  clicks  impr.    CTR  position`);
    for (const r of rows) console.log(`  ${r.keys[0].slice(0, width).padEnd(width)}  ${String(r.clicks).padStart(6)}  ${String(r.impressions).padStart(5)}  ${pct(r.ctr).padStart(7)}  ${r.position.toFixed(1).padStart(8)}`);
  }
}
