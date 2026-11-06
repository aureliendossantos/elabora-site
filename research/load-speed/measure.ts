// Measures how heavy and how fast a published course is: Storyline, Rise and Elabora, in the same conditions.
// The study it serves: https://elabora.studio/en/compare/rise-storyline-slow-to-load/ (README.md beside it).
//
//   node research/load-speed/measure.ts --mode live|local [--runs 3] [--only id,id] [--conditions throttled,unthrottled]
//                                       [--packages <dir>] [--film]
//
// live: the public addresses of courses.json, as learners open them. local: the same packages served by this script
// (one server for the three tools, HTTP/1.1, gzip on text, Range on media), from --packages <dir>, one folder per
// course id holding the package, its entry file named by courses.json `entry`.
//
// Each run: a fresh context (empty cache), a 1366 × 768 window, and one of the conditions:
//   throttled: Lighthouse's « slow 4G » profile (562.5 ms round trip, 1,474.56 kbit/s down, 675 kbit/s up) and the
//              processor slowed 4 times (Emulation.setCPUThrottlingRate);
//   unthrottled: no throttling.
// The page is followed until it is quiet (5 s without a long task and at most 2 requests in flight), or 60 s
// (unthrottled), 180 s (throttled). Runs go course after course (run 1 of each course, then run 2…), so that the load
// of the machine weighs on all of them; one uncounted load wakes each CDN up before the measurements.
//
// Chromium: PLAYWRIGHT_CHROMIUM if set, else Playwright's own (`pnpm exec playwright install chromium`). Playwright:
// the site's (pnpm install at the repository's root). Output: results/<mode>-<date>.jsonl (raw, one run per line),
// results/<mode>-<date>-medians.json, and a Markdown table on standard output. --film adds, for each course and
// condition, an uncounted run with a screenshot at 0.5, 1, 2, 3, 5, 8, 13 and 20 s (filmstrip.ts assembles them).

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import zlib from 'node:zlib';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');
const args = process.argv.slice(2);
const opt = (name: string, dflt?: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : dflt;
};
type Condition = 'throttled' | 'unthrottled';
const mode = opt('mode', 'live') as 'live' | 'local';
const runs = Number(opt('runs', '3'));
const only = opt('only')?.split(',');
const conditions = (opt('conditions', 'throttled,unthrottled') as string).split(',') as Condition[];
const packages = opt('packages');
const filmstrip = args.includes('--film');
const FILM = [500, 1000, 2000, 3000, 5000, 8000, 13000, 20000];

interface Course { id: string; tool: string; form: string; title: string; url: string; entry: string }
const all: Course[] = JSON.parse(fs.readFileSync(path.join(here, 'courses.json'), 'utf8')).courses;
const courses = all.filter((c) => !only || only.includes(c.id));
if (mode === 'local' && !packages) throw new Error('--mode local needs --packages <dir>: one folder per course id');

const { chromium } = createRequire(path.join(repo, 'package.json'))('playwright');

// ---- The local server: one folder per course, gzip for text, Range for media. ----
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.avif': 'image/avif', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
  '.mp3': 'audio/mpeg', '.mp4': 'video/mp4', '.webm': 'video/webm', '.m4a': 'audio/mp4', '.ogg': 'audio/ogg',
  '.wav': 'audio/wav', '.vtt': 'text/vtt', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary',
};
const COMPRESS = /^(text\/|application\/(json|xml|javascript|wasm)|image\/svg)/;
function serve(dirs: Record<string, string>): Promise<{ base: string; close: () => void }> {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://x');
    const [, key, ...rest] = decodeURIComponent(url.pathname).split('/');
    const dir = key ? dirs[key] : undefined;
    let file = dir && path.join(dir, ...rest);
    if (file && dir && !file.startsWith(dir)) file = undefined;
    if (file && fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!file || !fs.existsSync(file)) { res.writeHead(404); res.end(); return; }
    const type = TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const size = fs.statSync(file).size;
    const range = req.headers.range?.match(/bytes=(\d*)-(\d*)/);
    if (range && !COMPRESS.test(type)) {
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Number(range[2]) : size - 1;
      res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1 });
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }
    if (COMPRESS.test(type) && /gzip/.test(String(req.headers['accept-encoding']))) {
      res.writeHead(200, { 'Content-Type': type, 'Content-Encoding': 'gzip', 'Cache-Control': 'no-cache' });
      fs.createReadStream(file).pipe(zlib.createGzip({ level: 6 })).pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': type, 'Content-Length': size, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => {
    const port = (server.address() as { port: number }).port;
    ok({ base: `http://127.0.0.1:${port}`, close: () => server.close() });
  }));
}

// ---- One measurement. ----
const THROTTLE = { latency: 562.5, downloadThroughput: (1474.56 * 1000) / 8, uploadThroughput: (675 * 1000) / 8 };
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36';

const INIT = () => {
  const w = window as any;
  w.__m = { fcp: null, lcp: null, lcpEl: null, longtasks: [], resources: [] };
  new PerformanceObserver((l) => { for (const e of l.getEntries()) if (e.name === 'first-contentful-paint') w.__m.fcp = e.startTime; }).observe({ type: 'paint', buffered: true });
  new PerformanceObserver((l) => {
    for (const e of l.getEntries() as any[]) { w.__m.lcp = e.startTime; w.__m.lcpEl = `${e.element?.tagName || '?'} ${e.size}`; }
  }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver((l) => { for (const e of l.getEntries()) w.__m.longtasks.push([e.startTime, e.duration]); }).observe({ type: 'longtask', buffered: true });
  new PerformanceObserver((l) => { for (const e of l.getEntries() as any[]) w.__m.resources.push([e.startTime, e.responseEnd]); }).observe({ type: 'resource', buffered: true });
};

// When the page can be used, as Lighthouse computes it: after the first paint, the start of the first window of 5 s
// without a long task and with at most 2 requests in flight; that is the end of the last long task before it.
function interactive(fcp: number, longtasks: [number, number][], resources: [number, number][], end: number) {
  const ends = [...longtasks.map(([s, d]) => s + d), ...resources.map(([, b]) => b)];
  const starts = [fcp, ...ends.filter((t) => t > fcp)].sort((a, b) => a - b);
  for (const s of starts) {
    if (s + 5000 > end) return null;
    if (longtasks.some(([ls, d]) => ls + d > s && ls < s + 5000)) continue;
    let ok = true;
    for (let t = s; t <= s + 5000 && ok; t += 50) if (resources.filter(([a, b]) => a <= t && b > t).length > 2) ok = false;
    if (ok) return Math.max(fcp, ...longtasks.map(([ls, d]) => ls + d).filter((t) => t <= s));
  }
  return null;
}

async function measure(browser: any, url: string, cond: Condition, shot?: string, film?: string) {
  const context = await browser.newContext({ viewport: { width: 1366, height: 768 }, deviceScaleFactor: 1, userAgent: UA, serviceWorkers: 'block' });
  await context.addInitScript(INIT);
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await cdp.send('Performance.enable', { timeDomain: 'timeTicks' });
  if (cond === 'throttled') {
    await cdp.send('Network.emulateNetworkConditions', { offline: false, ...THROTTLE });
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  }
  const req = new Map<string, { url: string; type: string; encoded: number; decoded: number; done: boolean }>();
  cdp.on('Network.requestWillBeSent', (e: any) => {
    if (!req.has(e.requestId)) req.set(e.requestId, { url: e.request.url, type: e.type || 'Other', encoded: 0, decoded: 0, done: false });
  });
  cdp.on('Network.responseReceived', (e: any) => { const r = req.get(e.requestId); if (r) r.type = e.type || r.type; });
  cdp.on('Network.dataReceived', (e: any) => { const r = req.get(e.requestId); if (r) { r.decoded += e.dataLength; r.encoded += e.encodedDataLength; } });
  cdp.on('Network.loadingFinished', (e: any) => { const r = req.get(e.requestId); if (r) { r.encoded = Math.max(r.encoded, e.encodedDataLength); r.done = true; } });
  cdp.on('Network.loadingFailed', (e: any) => { const r = req.get(e.requestId); if (r) r.done = true; });
  const errors: string[] = [];
  page.on('pageerror', (e: Error) => errors.push(e.message.slice(0, 200)));

  const limit = cond === 'throttled' ? 180_000 : 60_000;
  const t0 = Date.now();
  let gotoError: string | null = null;
  const nav = page.goto(url, { waitUntil: 'load', timeout: limit }).catch((e: Error) => { gotoError = e.message.slice(0, 200); });
  if (film) {
    for (const t of FILM) {
      await page.waitForTimeout(Math.max(0, t - (Date.now() - t0)));
      await page.screenshot({ path: `${film}-${String(t).padStart(5, '0')}ms.png`, timeout: 10_000 }).catch(() => {});
    }
  }
  await nav;
  // Until it is quiet: 5 s without a long task (the page's time) and at most 2 requests in flight, then 1 s more.
  let quietSince = 0;
  let timedOut = false;
  for (;;) {
    await page.waitForTimeout(250);
    const inflight = [...req.values()].filter((r) => !r.done && !/^(blob|data):/.test(r.url)).length;
    const s = await page.evaluate(() => {
      const m = (window as any).__m;
      const lt = m.longtasks.at(-1);
      return { now: performance.now(), fcp: m.fcp, lastLong: lt ? lt[0] + lt[1] : 0 };
    }).catch(() => null);
    if (s && s.fcp != null && inflight <= 2) {
      if (!quietSince) quietSince = Date.now();
      if (Date.now() - quietSince >= 6000) break;
    } else quietSince = 0;
    if (Date.now() - t0 > limit) { timedOut = true; break; }
  }
  const m = await page.evaluate(() => ({ ...(window as any).__m, now: performance.now() }));
  const metrics = Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map((x: any) => [x.name, x.value]));
  if (shot) await page.screenshot({ path: shot }).catch(() => {});
  await context.close();

  const byType: Record<string, { n: number; bytes: number }> = {};
  let bytes = 0, jsDecoded = 0;
  const hosts = new Set<string>();
  for (const r of req.values()) {
    if (r.url.startsWith('data:') || r.url.startsWith('blob:')) continue;
    const t = r.type === 'XHR' || r.type === 'Fetch' ? 'Fetch' : r.type;
    byType[t] ??= { n: 0, bytes: 0 };
    byType[t].n++; byType[t].bytes += r.encoded; bytes += r.encoded;
    if (t === 'Script') jsDecoded += r.decoded;
    try { hosts.add(new URL(r.url).host); } catch {}
  }
  const end = m.now;
  const tti = m.fcp == null ? null : interactive(m.fcp, m.longtasks, m.resources, end);
  const tbt = m.fcp == null ? null : m.longtasks
    .filter(([s, d]: [number, number]) => s + d > m.fcp && (tti == null || s < tti))
    .reduce((a: number, [, d]: [number, number]) => a + Math.max(0, d - 50), 0);
  return {
    requests: [...req.values()].filter((r) => !r.url.startsWith('data:') && !r.url.startsWith('blob:')).length,
    bytes, jsBytes: byType.Script?.bytes || 0, jsDecoded, byType, hosts: [...hosts],
    fcp: m.fcp, lcp: m.lcp, lcpEl: m.lcpEl, tti, tbt,
    longtasks: m.longtasks.length,
    mainThread: Math.round((metrics.TaskDuration || 0) * 1000), script: Math.round((metrics.ScriptDuration || 0) * 1000),
    layout: Math.round(((metrics.LayoutDuration || 0) + (metrics.RecalcStyleDuration || 0)) * 1000),
    heap: Math.round((metrics.JSHeapUsedSize || 0) / 1024 / 1024),
    window: Math.round(end), timedOut, gotoError, errors: errors.slice(0, 5),
    pending: [...req.values()].filter((r) => !r.done && !/^(blob|data):/.test(r.url)).map((r) => `${r.type} ${r.url.slice(0, 120)}`).slice(0, 5),
    trace: { longtasks: m.longtasks.map(([a, b]: number[]) => [Math.round(a), Math.round(b)]), resources: m.resources.map(([a, b]: number[]) => [Math.round(a), Math.round(b)]) },
  };
}

const median = (xs: (number | null)[]) => {
  const v = xs.filter((x): x is number => typeof x === 'number').sort((a, b) => a - b);
  if (!v.length) return null;
  return v.length % 2 ? v[(v.length - 1) / 2]! : (v[v.length / 2 - 1]! + v[v.length / 2]!) / 2;
};

// ---- The series. ----
const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');
const outDir = path.join(here, 'results');
const shots = path.join(outDir, `screenshots-${mode}-${stamp}`);
fs.mkdirSync(shots, { recursive: true });
const rawPath = path.join(outDir, `${mode}-${stamp}.jsonl`);

let server: { base: string; close: () => void } | undefined;
const urls: Record<string, string> = {};
if (mode === 'local') {
  const dirs: Record<string, string> = {};
  for (const c of courses) { dirs[c.id] = path.resolve(packages!, c.id); urls[c.id] = `/${c.id}/${c.entry}`; }
  server = await serve(dirs);
  for (const id in urls) urls[id] = server.base + urls[id];
} else for (const c of courses) urls[c.id] = c.url;

const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM, args: ['--disable-quic', '--autoplay-policy=no-user-gesture-required'] });
const meta = {
  mode, runs, conditions, date: new Date().toISOString(), chromium: browser.version(),
  host: `${os.type()} ${os.release()} ${os.arch()}, ${os.cpus().length} cores ${os.cpus()[0]?.model}, ${Math.round(os.totalmem() / 2 ** 30)} GB`,
  viewport: '1366x768 @1x', throttle: { ...THROTTLE, cpu: 4 },
};
fs.writeFileSync(rawPath, JSON.stringify({ meta }) + '\n');
console.error(`Chromium ${meta.chromium}, ${courses.length} courses, ${runs} runs × ${conditions.join(' + ')}`);

try {
  // Wake the CDNs and the server up: one uncounted, unthrottled load.
  for (const c of courses) { await measure(browser, urls[c.id]!, 'unthrottled').catch(() => {}); console.error(`  wake ${c.id}`); }
  if (filmstrip) {
    for (const cond of conditions) for (const c of courses) {
      const dir = path.join(shots, 'film'); fs.mkdirSync(dir, { recursive: true });
      await measure(browser, urls[c.id]!, cond, undefined, path.join(dir, `${c.id}-${cond}`)).catch(() => {});
      console.error(`  film ${cond} ${c.id}`);
    }
  }
  for (let run = 1; run <= runs; run++) {
    for (const cond of conditions) {
      for (const c of courses) {
        const load = os.loadavg()[0]!;
        const shot = run === 1 ? path.join(shots, `${c.id}-${cond}.png`) : undefined;
        const r = await measure(browser, urls[c.id]!, cond, shot).catch((e: Error) => ({ error: e.message }));
        fs.appendFileSync(rawPath, JSON.stringify({ id: c.id, tool: c.tool, cond, run, load: Math.round(load * 10) / 10, ...r }) + '\n');
        const x = r as any;
        console.error(`  ${run} ${cond} ${c.id}: ${x.error || `${(x.bytes / 1e6).toFixed(2)} MB, ${x.requests} req, FCP ${Math.round(x.fcp)} LCP ${Math.round(x.lcp)} TTI ${x.tti && Math.round(x.tti)} TBT ${x.tbt && Math.round(x.tbt)}, main thread ${x.mainThread} ms${x.timedOut ? ' (time limit)' : ''}`} (load ${load.toFixed(1)})`);
      }
    }
  }
} finally {
  await browser.close();
  server?.close();
}

// ---- The medians. ----
const rows = fs.readFileSync(rawPath, 'utf8').trim().split('\n').slice(1).map((l) => JSON.parse(l)).filter((r) => !r.error);
const summary: any[] = [];
for (const c of courses) for (const cond of conditions) {
  const rs = rows.filter((r) => r.id === c.id && r.cond === cond);
  if (!rs.length) continue;
  const med = (k: string) => median(rs.map((r) => r[k]));
  summary.push({
    id: c.id, tool: c.tool, form: c.form, cond, n: rs.length,
    mb: +(med('bytes')! / 1e6).toFixed(2), jsKB: Math.round(med('jsBytes')! / 1e3), jsDecodedKB: Math.round(med('jsDecoded')! / 1e3),
    requests: med('requests'), fcp: med('fcp'), lcp: med('lcp'), tti: med('tti'), tbt: med('tbt'), mainThread: med('mainThread'),
    script: med('script'), heapMB: med('heap'), timedOut: rs.filter((r) => r.timedOut).length, load: med('load'),
  });
}
fs.writeFileSync(rawPath.replace(/\.jsonl$/, '-medians.json'), JSON.stringify({ meta, summary }, null, 2) + '\n');
const s = (ms: number | null) => (ms == null ? '—' : (ms / 1000).toFixed(1) + ' s');
console.log(`\n| course | tool | condition | MB transferred | of which JS (KB, decompressed) | requests | FCP | LCP | interactive | TBT | main thread |`);
console.log(`|---|---|---|---|---|---|---|---|---|---|---|`);
for (const r of summary) {
  console.log(`| ${r.id} | ${r.tool} | ${r.cond} | ${r.mb} | ${r.jsKB} (${r.jsDecodedKB}) | ${r.requests} | ${s(r.fcp)} | ${s(r.lcp)} | ${s(r.tti)} | ${r.tbt == null ? '—' : Math.round(r.tbt) + ' ms'} | ${s(r.mainThread)} |`);
}
