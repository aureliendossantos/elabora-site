// Loads the live pages in Chromium: CSP violations, console errors, images and fonts really loaded.
import { chromium } from 'playwright';
const origin = process.argv[2] ?? 'https://elabora.studio';
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM });
let bad = false;
for (const path of ['/fr/', '/en/', '/fr/confidentialite/']) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const problems = [];
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) problems.push(m.text()); });
  page.on('pageerror', (e) => problems.push(String(e)));
  await page.goto(origin + path, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } });
  await page.waitForTimeout(800);
  const r = await page.evaluate(async () => ({
    images: [...document.images].map((i) => i.naturalWidth > 0),
    fonts: [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family),
  }));
  console.log(path, 'images ok:', r.images.filter(Boolean).length + '/' + r.images.length, 'fonts:', [...new Set(r.fonts)].join(','), 'problems:', problems.length);
  for (const p of problems) { console.log('  ', p); bad = true; }
  if (r.images.includes(false)) bad = true;
  await page.close();
}
await browser.close();
process.exit(bad ? 1 : 0);
