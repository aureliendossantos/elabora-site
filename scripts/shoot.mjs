// Screenshots of /fr/, /en/, a legal page and the main comparisons at three window sizes → ../reports/site-elabora/captures/.
// Serves dist/ with `astro preview` (stopped by PID, never by pattern). Needs a built dist/ and a Chromium
// (PLAYWRIGHT_CHROMIUM overrides the path; otherwise Playwright's own).
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, '..', 'reports', 'site-elabora', 'captures');
mkdirSync(out, { recursive: true });
const port = 4399;
const server = spawn('pnpm', ['exec', 'astro', 'preview', '--port', String(port)], { cwd: root, stdio: 'ignore' });
const base = `http://localhost:${port}`;
for (let i = 0; i < 50; i++) {
  try { if ((await fetch(base + '/fr/')).ok) break; } catch {}
  await new Promise((r) => setTimeout(r, 200));
}
const pages = [['fr', '/fr/'], ['en', '/en/'], ['legal-fr', '/fr/confidentialite/'], ['legal-en', '/en/terms/']];
// The main comparison pages (docs/maintenance.md, « Comparison pages »): the overview, Storyline, Rise and the Mac page.
for (const [lang, base, mac] of [['en', '/en/compare/', 'storyline-alternative-mac'], ['fr', '/fr/comparatif/', 'alternative-storyline-mac']]) {
  for (const [name, slug] of [['vue', ''], ['storyline', 'storyline/'], ['rise', 'rise/'], ['mac', `${mac}/`]]) pages.push([`comparatif-${name}-${lang}`, base + slug]);
}
const sizes = [['1600x900', 1600, 900], ['1280x720', 1280, 720], ['375x812', 375, 812]];
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM });
try {
  for (const [sizeName, width, height] of sizes) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    for (const [name, path] of pages) {
      await page.goto(base + path, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      // Lazy images: walk down the page so they load, then come back up.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
        window.scrollTo(0, 0);
        await Promise.all([...document.images].map((i) => i.complete || new Promise((r) => { i.onload = i.onerror = r; })));
      });
      await page.screenshot({ path: join(out, `${name}-${sizeName}.png`), fullPage: true });
      if (name.startsWith('legal') || name.startsWith('comparatif')) await page.screenshot({ path: join(out, `${name}-haut-${sizeName}.png`) }); // the fold, readable
    }
    await context.close();
  }
} finally {
  await browser.close();
  server.kill();
}
console.log('captures in', out);
