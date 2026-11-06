// The home as visitors get it: dist/ served by `wrangler dev` with its real headers (the CSP of each page), opened in
// Chromium in both languages, on a desktop and a phone. It walks every section, opens a sample's sheet and a template's
// sheet, plays the dialogue, and fails on a console error, a CSP violation, a page error, a failed request or a page
// wider than the phone. Captures go to ../reports/site-elabora/accueil/ (or --out <dir>), to look at.
//
//   pnpm run build && pnpm run check:home
//
// The server is started here and stopped by its process group. (A `wrangler dev` started before a build serves the new HTML
// but not the files added since: its new chunks answer 404. This script always starts its own.)
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const out = args.includes('--out') ? resolve(args[args.indexOf('--out') + 1]) : join(root, '..', 'reports', 'site-elabora', 'accueil');
mkdirSync(out, { recursive: true });
const port = 8797;
const base = `http://127.0.0.1:${port}`;
// (a server left on the port would answer in place of this build's)
if (await fetch(base).then(() => true, () => false)) throw new Error(`${base} already answers: stop the server left there first.`);
// (its own process group, so that stopping it stops wrangler's workers with it)
const server = spawn(join(root, 'node_modules/.bin/wrangler'), ['dev', '--port', String(port), '--ip', '127.0.0.1'], { cwd: root, stdio: 'ignore', detached: true });
const problems = [];
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM, args: ['--autoplay-policy=no-user-gesture-required', '--ignore-gpu-blocklist'] });
  for (let i = 0; i < 150; i++) {
    try { if ((await fetch(base + '/fr/')).ok) break; } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  const watch = (page) => {
    page.on('console', (m) => { if (m.type() === 'error') problems.push(`${page.url()} ${m.text()}`); });
    page.on('pageerror', (e) => problems.push(`${page.url()} ${e}`));
    // (a recording the browser stops loading once it has enough is no problem)
    page.on('requestfailed', (r) => { if (r.failure()?.errorText !== 'net::ERR_ABORTED') problems.push(`failed ${r.url()} ${r.failure()?.errorText}`); });
    page.on('response', (r) => { if (r.status() >= 400) problems.push(`${r.status()} ${r.url()}`); });
  };
  const csp = () => document.addEventListener('securitypolicyviolation', (e) => console.error(`CSP ${e.violatedDirective} ${e.blockedURI} ${location.pathname}`));
  const wait = (page, s) => page.waitForTimeout(s * 1000);

  for (const lang of ['fr', 'en']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    watch(page);
    await page.addInitScript(csp);
    await page.goto(`${base}/${lang}/`, { waitUntil: 'load' });
    await wait(page, 3);
    await page.screenshot({ path: join(out, `${lang}-1-film.png`) });
    for (const [selector, name, s] of [['#exemples', '2-exemples', 2], ['#trois-d', '3-ecluse', 6], ['#dialogues', '4-dialogue', 2], ['#modeles', '5-modeles', 2], ['#comment', '6-comment', 2], ['#equipes', '7-equipes', 1], ['#telecharger', '8-fin', 5], ['footer', '9-pied', 1]]) {
      await page.locator(selector).first().scrollIntoViewIfNeeded();
      await wait(page, s);
      await page.screenshot({ path: join(out, `${lang}-${name}.png`) });
    }
    await page.locator('#dialogues').scrollIntoViewIfNeeded();
    await page.click('[data-play]');
    await wait(page, 6);
    await page.locator('[data-dialogue]').screenshot({ path: join(out, `${lang}-4b-dialogue-joue.png`) });
    await page.locator('#modeles').scrollIntoViewIfNeeded();
    await page.locator('[data-template]').nth(1).click();
    await wait(page, 2);
    await page.click('[data-template-sheet]');
    await wait(page, 2);
    await page.screenshot({ path: join(out, `${lang}-5b-fiche-modele.png`) });
    await page.keyboard.press('Escape');
    await page.locator('#exemples').scrollIntoViewIfNeeded();
    await page.locator('[data-module]').first().click();
    await wait(page, 6);
    await page.screenshot({ path: join(out, `${lang}-2b-fiche-module.png`) });
    await page.keyboard.press('Escape');
    await page.close();
  }

  const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  watch(phone);
  await phone.addInitScript(csp);
  await phone.goto(`${base}/fr/`, { waitUntil: 'load' });
  await wait(phone, 2);
  await phone.screenshot({ path: join(out, 'telephone-1-film.png') });
  for (const selector of ['#exemples', '#trois-d', '#modeles', '#telecharger']) { await phone.locator(selector).scrollIntoViewIfNeeded(); await wait(phone, 2); }
  await phone.locator('#trois-d').screenshot({ path: join(out, 'telephone-3-ecluse.png') });
  const [width, inner] = await phone.evaluate(() => [document.documentElement.scrollWidth, innerWidth]);
  if (width > inner) problems.push(`the phone page is ${width} px wide for a ${inner} px window`);

  // The docs and a legal page keep the site's header and footer.
  const docs = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  watch(docs);
  for (const path of ['/fr/docs/', '/en/privacy/']) await docs.goto(base + path, { waitUntil: 'load' });
} finally {
  await browser?.close();
  // (wrangler may have exited on its own)
  try { process.kill(-server.pid); } catch {}
}
const unique = [...new Set(problems)];
console.log(`captures in ${out}`);
if (unique.length) { console.log(`${unique.length} problem(s):\n${unique.join('\n')}`); process.exit(1); }
console.log('the home: no problem');
