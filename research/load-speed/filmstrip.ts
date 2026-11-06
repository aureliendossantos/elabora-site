// Assembles the screenshots of measure.ts --film into one image: a row per course, a column per moment.
//   node research/load-speed/filmstrip.ts <film dir> <condition> <out.png> [--decimal ,]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const [dir, cond, out] = args as [string, string, string];
const decimal = args.includes('--decimal') ? args[args.indexOf('--decimal') + 1]! : '.';
const { chromium } = createRequire(path.resolve(here, '../../package.json'))('playwright');
const files = fs.readdirSync(dir).map((f) => f.normalize('NFC')).filter((f) => f.includes(`-${cond}-`) && /\.(png|jpg)$/.test(f)).sort();
const ids = [...new Set(files.map((f) => f.slice(0, f.indexOf(`-${cond}-`))))];
const times = [...new Set(files.map((f) => f.match(/(\d+)ms\.(png|jpg)$/)![1]!))].sort();
const order = (id: string) => (id.startsWith('sl-') ? 0 : id.startsWith('rise-') ? 1 : 2);
ids.sort((a, b) => order(a) - order(b) || a.localeCompare(b));
const cell = (id: string, t: string) => {
  const f = ['png', 'jpg'].map((x) => path.join(dir, `${id}-${cond}-${t}ms.${x}`)).find((x) => fs.existsSync(x));
  return f ? `<img src="${pathToFileURL(f).href}">` : '<div class="no"></div>';
};
fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
const html = `<style>body{font:13px system-ui;margin:8px;background:#fff}table{border-collapse:collapse}td,th{padding:3px}img,.no{width:205px;height:115px;border:1px solid #ccc;display:block}th{font-weight:600}</style>
<table><tr><th></th>${times.map((t) => `<th>${(Number(t) / 1000).toString().replace('.', decimal)} s</th>`).join('')}</tr>
${ids.map((id) => `<tr><th>${id}</th>${times.map((t) => `<td>${cell(id, t)}</td>`).join('')}</tr>`).join('\n')}</table>`;
const sheet = path.join(dir, `filmstrip-${cond}.html`);
fs.writeFileSync(sheet, html);
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM });
const page = await browser.newPage({ viewport: { width: 1900, height: 400 } });
await page.goto(pathToFileURL(sheet).href);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
fs.rmSync(sheet);
