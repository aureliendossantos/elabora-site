// Checks that every internal link, asset and fragment in dist/ resolves, in both languages.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const origin = 'https://elabora.studio';
const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) htmlFiles.push(p);
  }
})(dist);

// URL path → file in dist (directory index, or the file itself).
function resolve(pathname) {
  const clean = decodeURIComponent(pathname);
  const candidates = clean.endsWith('/') ? [join(dist, clean, 'index.html')] : [join(dist, clean), join(dist, clean, 'index.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile());
}

const ids = new Map();
function idsOf(file) {
  if (!ids.has(file)) ids.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return ids.get(file);
}

// Legacy unprefixed addresses are answered by the Worker, not by files.
const workerPaths = new Set(['/', '/mentions-legales/', '/legal-notice/', '/confidentialite/', '/privacy/', '/conditions/', '/terms/', '/signalement/', '/reporting/']);

// Draft comparisons (draft: true in their front matter): built for the founder to read, noindex, and possibly in one
// language only. Their address → the languages they exist in.
const compareBase = { en: 'compare', fr: 'comparatif' };
const drafts = new Map();
for (const lang of ['en', 'fr']) {
  const folder = join(dist, '..', 'src', 'content', 'compare', lang);
  for (const name of readdirSync(folder).filter((f) => f.endsWith('.md'))) {
    const head = readFileSync(join(folder, name), 'utf8').split(/^---$/m)[1] ?? '';
    if (!/^draft: true$/m.test(head)) continue;
    const slug = /^slug: "?([a-z0-9-]*)"?$/m.exec(head)?.[1];
    const other = lang === 'en' ? 'fr' : 'en';
    drafts.set(`/${lang}/${compareBase[lang]}/${slug ? `${slug}/` : ''}`, existsSync(join(dist, '..', 'src', 'content', 'compare', other, name)) ? ['fr', 'en'] : [lang]);
  }
}

const errors = [];
let count = 0;
for (const file of htmlFiles) {
  const page = '/' + file.slice(dist.length + 1).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  // Code samples (the developer docs show HTML) are text, not links.
  const markup = html.replace(/<pre[\s>][\s\S]*?<\/pre>|<code[\s>][\s\S]*?<\/code>/g, '');
  for (const m of markup.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const ref = m[1];
    if (/^(mailto:|tel:|data:)/.test(ref)) continue;
    if (/^https?:\/\//.test(ref) && !ref.startsWith(origin)) continue; // external (vitrine, …): not checked here
    const url = new URL(ref, origin + page);
    count++;
    if (workerPaths.has(url.pathname)) continue;
    const target = resolve(url.pathname);
    if (!target) { errors.push(`${page}: ${ref} → no file`); continue; }
    if (url.hash && target.endsWith('.html') && !idsOf(target).has(decodeURIComponent(url.hash.slice(1)))) errors.push(`${page}: ${ref} → no #${url.hash.slice(1)}`);
  }
  // Every page: lang, hreflang trio, canonical; not the home's demos (/demo/*: framed by the home, never indexed).
  if (file.endsWith('404.html') || page.startsWith('/demo/')) continue;
  if (!/<html lang="(fr|en)"/.test(html)) errors.push(`${page}: no html lang`);
  // The developer docs exist in English only: their alternates are en and x-default. A draft, in its languages.
  const languages = page.startsWith('/en/docs/developers/') ? ['en', 'x-default'] : drafts.has(page) ? [...drafts.get(page), 'x-default'] : ['fr', 'en', 'x-default'];
  for (const h of languages) if (!html.includes(`hreflang="${h}"`)) errors.push(`${page}: no hreflang ${h}`);
  for (const h of ['fr', 'en']) if (!languages.includes(h) && html.includes(`rel="alternate" hreflang="${h}"`)) errors.push(`${page}: a ${h} alternate for a page that does not exist in ${h}`);
  if (drafts.has(page) && !/<meta name="robots" content="noindex"/.test(html)) errors.push(`${page}: a draft without noindex`);
  if (!html.includes('rel="canonical"')) errors.push(`${page}: no canonical`);
}
// The comparison pages are found through search and agents (the sitemap, llms.txt, their links to each other), never
// from the rest of the site: no page outside them links to them (docs/maintenance.md, « Comparison pages »).
const comparisons = /^\/(en\/compare|fr\/comparatif)\//;
for (const file of htmlFiles) {
  const page = '/' + file.slice(dist.length + 1).replace(/index\.html$/, '');
  if (comparisons.test(page)) continue;
  const markup = readFileSync(file, 'utf8').replace(/<pre[\s>][\s\S]*?<\/pre>|<code[\s>][\s\S]*?<\/code>/g, '');
  for (const m of markup.matchAll(/\shref="([^"]*)"/g)) {
    const url = URL.parse(m[1], origin + page);
    if (url && url.origin === origin && comparisons.test(url.pathname)) errors.push(`${page}: links to the comparison ${m[1]}`);
  }
}

// The sitemap: each address is a page of dist/, and each indexable page is in it.
const sitemapFile = join(dist, 'sitemap.xml');
if (!existsSync(sitemapFile)) errors.push('dist/sitemap.xml is missing');
else {
  const listed = new Set([...readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  for (const loc of listed) if (!loc.startsWith(origin + '/') || !resolve(new URL(loc).pathname)) errors.push(`sitemap.xml: ${loc} → no page`);
  for (const file of htmlFiles) {
    const page = '/' + file.slice(dist.length + 1).replace(/index\.html$/, '');
    if (file.endsWith('404.html') || page.startsWith('/demo/') || !file.endsWith('index.html')) continue;
    // (left out on purpose: noindex pages, while INDEXING is off, and pages whose canonical is another address)
    const html = readFileSync(file, 'utf8');
    if (/<meta name="robots" content="noindex"/.test(html) || /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1] !== origin + page) continue;
    if (!listed.has(origin + page)) errors.push(`${page}: not in sitemap.xml`);
  }
}

// The facts of Elabora cite its own pages: each one exists.
for (const name of readdirSync(join(dist, '..', 'src', 'data', 'comparisons')).filter((f) => f.endsWith('.json'))) {
  const tool = JSON.parse(readFileSync(join(dist, '..', 'src', 'data', 'comparisons', name), 'utf8'));
  for (const fact of [...Object.values(tool.facts), ...(tool.gaps ?? [])]) {
    if (fact.source.startsWith(origin + '/')) {
      const url = new URL(fact.source);
      if (!resolve(url.pathname)) errors.push(`src/data/comparisons/${name}: ${fact.source} → no page`);
      else if (url.hash && !idsOf(resolve(url.pathname)).has(url.hash.slice(1))) errors.push(`src/data/comparisons/${name}: ${fact.source} → no ${url.hash}`);
    }
  }
}

console.log(`${htmlFiles.length} pages, ${count} internal references checked`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('all internal links resolve');
