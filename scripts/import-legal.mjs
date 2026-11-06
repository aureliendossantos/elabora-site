// One-off import of the legal drafts into content/legal/{fr,en}/*.md.
// Usage: node scripts/import-legal.mjs <dir of reports/pages-legales>
// It removes the draft banner, the "[publication date]" line, the H1 (the layout renders the title),
// the final "Sources" section, and rewrites links between pages to the site's slugs. Nothing else changes.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = process.argv[2];
if (!src) throw new Error('usage: node scripts/import-legal.mjs <pages-legales dir>');
const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'legal');

const files = [
  ['01-mentions-legales.fr.md', 'fr', 'mentions-legales'],
  ['01-legal-notice.en.md', 'en', 'legal-notice'],
  ['02-politique-confidentialite.fr.md', 'fr', 'confidentialite'],
  ['02-privacy-policy.en.md', 'en', 'privacy'],
  ['03-conditions-utilisation.fr.md', 'fr', 'conditions'],
  ['03-terms-of-use.en.md', 'en', 'terms'],
  ['04-signalement-moderation.fr.md', 'fr', 'signalement'],
  ['04-reporting-moderation.en.md', 'en', 'reporting'],
];
const slugOf = Object.fromEntries(files.map(([f, , s]) => [f, s]));
const UPDATED = '2026-10-14';

for (const [file, lang, slug] of files) {
  let text = readFileSync(join(src, file), 'utf8');
  const lines = text.split('\n');
  const title = lines[0].replace(/^# /, '').trim();
  const cut = lines.findIndex((l) => /^## Sources/.test(l));
  let body = lines.slice(1, cut === -1 ? lines.length : cut).join('\n');
  body = body
    .replace(/^> \*\*(Brouillon|Draft)[^\n]*\n/m, '')
    .replace(/^\*(Dernière mise à jour|Last updated) : ?\[[^\]]*\]\*\n/m, '')
    .replace(/^\*Last updated: \[[^\]]*\]\*\n/m, '')
    .replace(/\]\((\d\d-[a-z-]+\.(?:fr|en)\.md)\)/g, (_, f) => `](/${lang}/${slugOf[f]}/)`)
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .replace(/\n+---$/, '');
  mkdirSync(join(out, lang), { recursive: true });
  const fm = `---\ntitle: ${JSON.stringify(title)}\nlang: ${lang}\nslug: ${slug}\nupdated: ${UPDATED}\n---\n\n`;
  writeFileSync(join(out, lang, `${slug}.md`), fm + body + '\n');
}
console.log('imported', files.length, 'pages');
