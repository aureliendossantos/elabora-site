// The home page's media, gathered from the sibling checkouts into files the site commits (a build needs none of them):
//
//   node scripts/home-media.mjs [--shots <dir>] [--core ../elabora-core] [--app ../elabora-app] [--notes ../elabora-notes]
//
// - public/media/exemples/{fr,en}/<id>.webp: one screen of each sample module (1600 × 900 and 800 wide), taken by
//   `elabora screenshot` (the bilingual samples in each language); public/media/exemples/videos/{fr,en}/<id>.{mp4,webp}:
//   the film's videos and their posters, in each language.
// - public/media/modeles/<id>/{fr,en}/: the template's animated preview (the app's `pnpm run templates`, boucle.mp4),
//   its 14 screens (1200 wide) and a thumbnail; src/data/modeles.json: the templates' names and texts (the core's index).
// - public/media/app/: four screens of the app (the Lin mockups of elabora-app/systeme-design/captures), in 16:10.
// - public/demo/phishing/: « Phishing by numbers » built for the web in both its languages, played in the page on its
//   dialogue screen; public/media/exemples/dialogue-{fr,en}.webp: its poster, the scene full frame as the page shows it
//   (Playwright's Chromium, or PLAYWRIGHT_CHROMIUM).
//
// --shots: a folder of earlier captures (ex-<id>, ex-en-<id>, tpl-<id>, tpl-en-<id>), to skip the screenshots (a few minutes).
// --videos: the film's videos and their posters alone; the other media stay as they are.
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import sharp from 'sharp';
import { chromium } from 'playwright';
import { createServer } from 'node:http';

const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? resolve(args[i + 1]) : resolve(fallback); };
const site = resolve(new URL('..', import.meta.url).pathname);
const core = opt('core', join(site, '../elabora-core'));
const app = opt('app', join(site, '../elabora-app'));
const notes = opt('notes', join(site, '../elabora-notes'));
const onlyVideos = args.includes('--videos');
const shots = args.includes('--shots') ? opt('shots', '') : mkdtempSync(join(tmpdir(), 'home-media-'));
const pub = join(site, 'public');
const elabora = (...a) => execFileSync('node', [join(core, 'bin/elabora.js'), ...a], { cwd: core, stdio: ['ignore', 'ignore', 'inherit'] });
const fresh = (dir) => { rmSync(dir, { recursive: true, force: true }); mkdirSync(dir, { recursive: true }); return dir; };

// Which screen shows each sample best; BILINGUAL: those that exist in French and English.
const SAMPLES = {
  'phishing-by-numbers': 'practice', 'diagnostic-reseau': 'accueil', 'canal-locks': 'intro', 'coffee-in-brief': 'the-cherry',
  'clockwork': 'answer', 'orbital-rendezvous': 'lab', 'medieval-charts': 'chart-table',
};
const BILINGUAL = ['canal-locks', 'clockwork', 'diagnostic-reseau', 'orbital-rendezvous', 'phishing-by-numbers'];
// The film's videos, by sample: a recording in the notes (<name>.mp4 and <name>-poster.jpg), {lang} for one per language.
// The bilingual ones are filmed one image at a time on a held clock by reports/accueil-retouches-6-nov/filmer-accueil.ts
// (no stutter, whatever the machine's load); medieval-charts' for the identity sheets.
const VIDEOS = {
  'phishing-by-numbers': 'reports/accueil-retouches-6-nov/videos/phishing-by-numbers-{lang}',
  'canal-locks': 'reports/accueil-retouches-6-nov/videos/canal-locks-{lang}',
  'orbital-rendezvous': 'reports/prose-modules-9-nov/videos/orbital-rendezvous-{lang}',
  'medieval-charts': 'reports/elabora-identite/vitrine/medias/elabora/medieval-charts-video-chart-table',
  'clockwork': 'reports/prose-modules-9-nov/videos/clockwork-{lang}',
  'diagnostic-reseau': 'reports/accueil-retouches-6-nov/videos/diagnostic-reseau-{lang}',
};
const TEMPLATES = ['organic', 'editorial', 'clear', 'flow', 'shapes', 'paper', 'watercolor'];
const SCREENS = ['cover', 'objectives', 'part-one', 'key-message', 'text-and-picture', 'cards', 'key-figures', 'steps', 'comparison', 'chart', 'quote', 'practice', 'recap', 'the-end'];

/** The top 1600 × 900 of a capture (a scroll module's is the whole page), as WebP. */
async function webp(src, dest, width, quality = 82) {
  let img = sharp(src).extract({ left: 0, top: 0, width: 1600, height: 900 });
  if (width && width < 1600) img = sharp(await img.toBuffer()).resize({ width });
  await img.webp({ quality }).toFile(dest);
}

function capture(kind, id, lang) {
  const dir = join(shots, `${kind === 'templates' ? 'tpl' : 'ex'}${lang === 'en' ? '-en' : ''}-${id}`);
  if (existsSync(dir)) return dir;
  // A sample in its own language unless it is bilingual; the templates in both (--language names a translation only).
  const own = JSON.parse(readFileSync(join(core, kind, id, 'course.json'), 'utf8')).language;
  const language = (kind === 'templates' || BILINGUAL.includes(id)) && lang !== own ? ['--language', lang] : [];
  elabora('screenshot', `${kind}/${id}`, '--screen', 'all', '--size', '1600x900', ...language, '--out-dir', dir);
  return dir;
}

// ── Sample modules ──
for (const lang of onlyVideos ? [] : ['fr', 'en']) {
  const out = fresh(join(pub, 'media/exemples', lang));
  for (const [id, screen] of Object.entries(SAMPLES)) {
    const dir = capture('examples', id, BILINGUAL.includes(id) ? lang : 'fr');
    const src = join(dir, `${screen}-1600x900.png`);
    await webp(src, join(out, `${id}.webp`));
    await webp(src, join(out, `${id}-800.webp`), 800);
  }
}
fresh(join(pub, 'media/exemples/videos'));
for (const lang of ['fr', 'en']) {
  const videos = fresh(join(pub, 'media/exemples/videos', lang));
  for (const [id, name] of Object.entries(VIDEOS)) {
    const from = join(notes, name.replace('{lang}', lang));
    cpSync(`${from}.mp4`, join(videos, `${id}.mp4`));
    await sharp(`${from}-poster.jpg`).webp({ quality: 82 }).toFile(join(videos, `${id}.webp`));
  }
}
if (onlyVideos) {
  console.log('film videos written: public/media/exemples/videos');
  process.exit(0);
}

// ── Templates ──
const index = JSON.parse(readFileSync(join(core, 'templates/index.json'), 'utf8'));
writeFileSync(join(site, 'src/data/modeles.json'), JSON.stringify({ source: 'elabora-core templates/index.json', templates: TEMPLATES.map((id) => index.templates.find((t) => t.id === id)) }, null, 2) + '\n');
for (const id of TEMPLATES) {
  for (const lang of ['fr', 'en']) {
    const out = fresh(join(pub, 'media/modeles', id, lang));
    cpSync(join(app, `build/templates/${id}.preview/${lang}/loop.mp4`), join(out, 'boucle.mp4'));
    const dir = capture('templates', id, lang);
    for (const s of SCREENS) await webp(join(dir, `${s}-1600x900.png`), join(out, `${s}.webp`), 1200, 76);
    await webp(join(dir, 'cover-1600x900.png'), join(out, 'vignette.webp'), 320);
  }
}

// ── The app, in four steps (16:10; a 16:9 capture grows downward with its own last rows) ──
const appOut = fresh(join(pub, 'media/app'));
const C = join(app, 'systeme-design/captures');
const APP = { decrire: '40-nouveau-module/01-nouveau-module.png', plan: '41-plan-lisible/01-b-1600.png', affiner: '48-chat-agentique/01-chat.png', livrer: '38-publier-et-faire-relire/01-publier.png' };
for (const [name, file] of Object.entries(APP)) {
  const src = join(C, file), { width, height } = await sharp(src).metadata();
  let img = sharp(src);
  // The plan runs to the bottom of its window: it keeps its 16:9, and the page fades it into white.
  // (The capture's last rows hold the window's edge and its rounded corners: they go before it grows.)
  if (name !== 'plan' && width * 10 !== height * 16) {
    const cut = await sharp(src).extract({ left: 0, top: 0, width, height: height - 12 }).toBuffer();
    img = sharp(cut).extend({ bottom: Math.round(width * 10 / 16) - (height - 12), extendWith: 'copy' });
  }
  await sharp(await img.toBuffer()).resize({ width: 1600 }).webp({ quality: 84 }).toFile(join(appOut, `${name}.webp`));
}

// ── The dialogue, played in the page: the sample built for the web (free navigation, nothing kept, not indexed) ──
const build = mkdtempSync(join(tmpdir(), 'home-phishing-'));
elabora('build', 'examples/phishing-by-numbers', '--target', 'web', '--progress', 'none', '--navigation', 'free', '--noindex', '--languages', 'all', '--dir', '--out', build);
const web = readdirSync(build).find((f) => f.endsWith('-web') && statSync(join(build, f)).isDirectory());
cpSync(join(build, web), fresh(join(pub, 'demo/phishing')), { recursive: true });
rmSync(build, { recursive: true, force: true });

// Its poster: the dialogue's screen with public/demo/plein-cadre.css, at the size of the page's frame (1120 × 630).
// (with its types: an SVG served without one shows as a broken image)
const TYPES = { html: 'text/html', js: 'text/javascript', css: 'text/css', svg: 'image/svg+xml', png: 'image/png', webp: 'image/webp', jpg: 'image/jpeg', woff2: 'font/woff2', json: 'application/json', m4a: 'audio/mp4', mp4: 'video/mp4' };
const server = createServer((req, res) => {
  let file = join(pub, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  try {
    if (statSync(file).isDirectory()) file = join(file, 'index.html');
    res.setHeader('Content-Type', TYPES[file.split('.').pop()] ?? 'application/octet-stream');
    res.end(readFileSync(file));
  } catch { res.statusCode = 404; res.end(); }
}).listen(0);
const port = server.address().port;
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM });
const page = await browser.newPage({ viewport: { width: 1120, height: 630 }, deviceScaleFactor: 2 });
rmSync(join(pub, 'media/exemples/dialogue.webp'), { force: true });
for (const lang of ['fr', 'en']) {
  await page.goto(`http://localhost:${port}/demo/phishing/index.html?lang=${lang}`, { waitUntil: 'networkidle' });
  await page.waitForFunction((l) => !!window.__elabora && document.documentElement.lang === l, lang);
  await page.addStyleTag({ url: '/demo/plein-cadre.css' });
  await page.evaluate(() => window.__elabora.go('practice'));
  await page.waitForTimeout(700);
  await sharp(await page.screenshot()).webp({ quality: 82 }).toFile(join(pub, `media/exemples/dialogue-${lang}.webp`));
}
await browser.close();
server.close();

console.log('home media written: public/media/{exemples,modeles,app}, public/demo/phishing, src/data/modeles.json');
