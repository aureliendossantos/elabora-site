import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineMdastPlugin } from 'satteri';

/**
 * The charts of the speed study (src/content/compare/{en,fr}/rise-storyline-speed.md), drawn at build time as inline
 * SVG: no library and no script reach the reader. A Markdown block `<div data-chart="load-time"></div>` becomes the
 * chart of that name, in the page's language. The times come from the medians of research/load-speed/results/; the
 * fixed costs are the study's own breakdown of the shared module (research/load-speed/README.md).
 *
 * The CSP allows no inline style, so the marks carry classes that src/styles/compare.css colours: one hue per tool,
 * the same in every chart (validated for colour-blind separation and contrast on the page's paper). Each chart has a
 * wide drawing and a narrow one, its labels above the bars, swapped by the stylesheet at 640 px.
 */

type Lang = 'en' | 'fr';
type Tool = 'storyline' | 'rise' | 'elabora';

const RESULTS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../research/load-speed/results');
const medians = (file: string): Record<string, { lcp: number }> => {
  const data = JSON.parse(fs.readFileSync(path.join(RESULTS, file), 'utf8')) as { summary: { id: string; cond: string; lcp: number }[] };
  return Object.fromEntries(data.summary.filter((r) => r.cond === 'throttled').map((r) => [r.id, r]));
};

const T = {
  en: {
    tools: { storyline: 'Storyline', rise: 'Rise', elabora: 'Elabora' },
    same: 'The same module', sameSlides: 'The same module, slides', sameScroll: 'The same module, scrolling page',
    s: (v: number) => `${v.toFixed(1)} s`, mb: (v: number) => `${(v / 1000).toFixed(2)} MB`, kb: (v: number) => `${Math.round(v).toLocaleString('en')} KB`,
    loadTitle: 'Time until the main content shows, on slow 4G',
    loadDesc: (rows: string) => `Horizontal bars, one per course, grouped by tool, in seconds until the largest content is painted (LCP), on slow 4G with a processor slowed 4 times. ${rows}`,
    loadKey: ['Full colour: the same module, made in each tool', 'Light: a course published by its author'],
    loadNote: 'Slow 4G, processor ×4, median of 3 runs. The published courses were measured online, the same module from one computer. Rise’s same module shows its first text at 9.9 s (the tick); its full title page waits for the cover image Rise adds by default.',
    firstText: 'first text',
    costTitle: 'What each tool loads before the module’s own content',
    costDesc: (rows: string) => `Stacked horizontal bars, one per tool, in kilobytes transferred before the shared module’s own content: JavaScript, fonts, and the rest. ${rows}`,
    parts: ['JavaScript', 'Fonts', 'The rest'],
    costNote: 'The same small module in each tool, before its picture and its narration. Elabora uses the system’s fonts by default.',
  },
  fr: {
    tools: { storyline: 'Storyline', rise: 'Rise', elabora: 'Elabora' },
    same: 'Le même module', sameSlides: 'Le même module, diapositives', sameScroll: 'Le même module, page qui défile',
    s: (v: number) => `${v.toFixed(1).replace('.', ',')} s`, mb: (v: number) => `${(v / 1000).toFixed(2).replace('.', ',')} Mo`,
    kb: (v: number) => `${Math.round(v).toLocaleString('fr').replace(/\s/g, ' ')} Ko`,
    loadTitle: 'Temps avant que le contenu principal s’affiche, en 4G lente',
    loadDesc: (rows: string) => `Barres horizontales, une par cours, groupées par outil, en secondes avant l’affichage du plus grand contenu (LCP), en 4G lente avec un processeur ralenti 4 fois. ${rows}`,
    loadKey: ['Couleur pleine : le même module, fait dans chaque outil', 'Couleur claire : un cours publié par son auteur'],
    loadNote: 'En 4G lente, processeur ×4, médiane de 3 passages. Les cours publiés ont été mesurés en ligne, le même module depuis un ordinateur. Le même module de Rise affiche son premier texte à 9,9 s (le trait) ; sa page de titre complète attend l’image de couverture que Rise ajoute par défaut.',
    firstText: 'premier texte',
    costTitle: 'Ce que charge chaque outil avant le contenu du module',
    costDesc: (rows: string) => `Barres horizontales empilées, une par outil, en kilo-octets transférés avant le contenu propre du module commun : JavaScript, polices, et le reste. ${rows}`,
    parts: ['JavaScript', 'Polices', 'Le reste'],
    costNote: 'Le même petit module dans chaque outil, avant son image et sa narration. Elabora utilise les polices du système par défaut.',
  },
} as const;

interface Row { tool: Tool; label: string; value: number; same: boolean; tick?: number }

function loadRows(lang: Lang): Row[] {
  const t = T[lang];
  const live = { ...medians('live-2026-11-06-medians.json'), ...medians('live-2026-11-06-clockwork-medieval-medians.json') };
  const shared = medians('local-2026-11-06-shared-module-medians.json');
  const sec = (ms: number) => Math.round(ms / 100) / 10;
  const get = (set: Record<string, { lcp: number }>, id: string) => {
    const r = set[id];
    if (!r) throw new Error(`speed charts: no throttled median for ${id} in research/load-speed/results`);
    return sec(r.lcp);
  };
  return [
    { tool: 'storyline', label: t.same, value: get(shared, 'sl-commun'), same: true },
    { tool: 'storyline', label: 'Phishing attempts', value: get(live, 'sl-phishing'), same: false },
    { tool: 'storyline', label: 'Career profile', value: get(live, 'sl-career'), same: false },
    { tool: 'storyline', label: 'BCS cyber', value: get(live, 'sl-bcs-cyber'), same: false },
    { tool: 'rise', label: t.same, value: get(shared, 'rise-commun'), same: true, tick: 9.9 },
    { tool: 'rise', label: 'RTK GPS', value: get(live, 'rise-rtk-gps'), same: false },
    { tool: 'rise', label: 'Micro-purchases', value: get(live, 'rise-gsa-micro'), same: false },
    { tool: 'rise', label: 'Accessible meetings', value: get(live, 'rise-gsa-meetings'), same: false },
    { tool: 'elabora', label: t.sameSlides, value: get(shared, 'elb-commun-diapos'), same: true },
    { tool: 'elabora', label: t.sameScroll, value: get(shared, 'elb-commun-defil'), same: true },
    { tool: 'elabora', label: 'Phishing by numbers', value: get(live, 'elb-phishing'), same: false },
    { tool: 'elabora', label: 'Clockwork', value: get(live, 'elb-clockwork'), same: false },
    { tool: 'elabora', label: 'Coffee in brief', value: get(live, 'elb-coffee'), same: false },
    { tool: 'elabora', label: 'Medieval charts', value: get(live, 'elb-medieval'), same: false },
  ];
}

// The shared module's fixed cost, in KB transferred before its own content (research/load-speed/README.md, the study).
const COST: { tool: Tool; parts: [number, number, number] }[] = [
  { tool: 'storyline', parts: [624, 63, 93] },
  { tool: 'rise', parts: [1468, 1944, 138] },
  { tool: 'elabora', parts: [136, 0, 54] },
];

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// A bar from the baseline: square there, its data end rounded by 4px.
const bar = (x: number, y: number, w: number, h: number, cls: string) => {
  const r = Math.min(4, w / 2, h / 2);
  if (w <= 0) return '';
  return `<path class="${cls}" d="M${x} ${y}h${(w - r).toFixed(1)}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 -${r} ${r}h-${(w - r).toFixed(1)}z"/>`;
};
const textW = (s: string, size = 13) => s.length * size * 0.56;

function svg(id: string, width: number, height: number, title: string, desc: string, body: string, cls: string) {
  return `<svg class="sc ${cls}" viewBox="0 0 ${width} ${height}" width="100%" role="img" aria-labelledby="${id}-t ${id}-d"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc)}</desc>${body}</svg>`;
}

function loadTime(lang: Lang): string {
  const t = T[lang];
  const rows = loadRows(lang);
  const max = 25;
  const desc = t.loadDesc(rows.map((r) => `${t.tools[r.tool]}, ${r.label}: ${t.s(r.value)}.`).join(' '));
  const draw = (narrow: boolean) => {
    const W = narrow ? 350 : 736;
    const labelW = narrow ? 0 : 232;
    const plotX = narrow ? 0 : labelW;
    const plotW = W - plotX - 58;
    const x = (v: number) => (v / max) * plotW;
    const rowH = narrow ? 42 : 26;
    const barH = 14;
    let y = 4;
    let out = '';
    for (const tool of ['storyline', 'rise', 'elabora'] as Tool[]) {
      out += `<g class="sc-group"><rect class="sc-swatch t-${tool}" x="0" y="${y + 4}" width="10" height="10" rx="2"/><text class="sc-tool" x="16" y="${y + 13}">${esc(t.tools[tool])}</text></g>`;
      y += 24;
      for (const r of rows.filter((row) => row.tool === tool)) {
        const cls = `t-${tool}${r.same ? '' : ' sc-light'}`;
        const labelCls = `sc-label${r.same ? ' sc-strong' : ''}`;
        const barY = narrow ? y + 18 : y + (rowH - barH) / 2;
        const tip = `<title>${esc(`${t.tools[tool]}, ${r.label}: ${t.s(r.value)}`)}</title>`;
        out += `<g class="sc-row">${tip}`;
        out += narrow
          ? `<text class="${labelCls}" x="0" y="${y + 12}">${esc(r.label)}</text>`
          : `<text class="${labelCls}" x="${labelW - 12}" y="${barY + 11}" text-anchor="end">${esc(r.label)}</text>`;
        out += bar(plotX, barY, x(r.value), barH, cls);
        out += `<text class="sc-value" x="${plotX + x(r.value) + 6}" y="${barY + 11}">${esc(t.s(r.value))}</text>`;
        if (r.tick) out += `<rect class="sc-tick" x="${(plotX + x(r.tick) - 1).toFixed(1)}" y="${barY - 3}" width="2" height="${barH + 6}"><title>${esc(`${t.firstText}: ${t.s(r.tick)}`)}</title></rect>`;
        out += '</g>';
        y += rowH;
      }
      y += 8;
    }
    out += `<line class="sc-axis" x1="${plotX}" x2="${plotX}" y1="0" y2="${y - 8}"/>`;
    return svg(`load-${lang}-${narrow ? 'n' : 'w'}`, W, y, t.loadTitle, desc, out, narrow ? 'sc-narrow' : 'sc-wide');
  };
  const key = `<ul class="sc-key"><li><span class="sc-key-mark sc-key-full"></span>${esc(t.loadKey[0])}</li><li><span class="sc-key-mark sc-key-light"></span>${esc(t.loadKey[1])}</li></ul>`;
  return `<figure class="speed-chart">${key}${draw(false)}${draw(true)}<figcaption>${esc(t.loadNote)}</figcaption></figure>`;
}

function fixedCost(lang: Lang): string {
  const t = T[lang];
  const max = Math.max(...COST.map((c) => c.parts.reduce((a, b) => a + b, 0)));
  const desc = t.costDesc(COST.map((c) => `${t.tools[c.tool]}: ${t.mb(c.parts.reduce((a, b) => a + b, 0))} (${t.parts.map((p, i) => `${p} ${t.kb(c.parts[i]!)}`).join(', ')}).`).join(' '));
  const draw = (narrow: boolean) => {
    const W = narrow ? 350 : 736;
    const plotX = narrow ? 0 : 110;
    const plotW = W - plotX - 70;
    const barH = 22;
    const rowH = narrow ? 54 : 40;
    let y = 4;
    let out = '';
    for (const c of COST) {
      const total = c.parts.reduce((a, b) => a + b, 0);
      const barY = narrow ? y + 20 : y + (rowH - barH) / 2;
      out += `<g class="sc-row"><title>${esc(`${t.tools[c.tool]}: ${t.mb(total)} — ${t.parts.map((p, i) => `${p} ${t.kb(c.parts[i]!)}`).join(', ')}`)}</title>`;
      out += narrow
        ? `<g><rect class="sc-swatch t-${c.tool}" x="0" y="${y + 3}" width="10" height="10" rx="2"/><text class="sc-tool" x="16" y="${y + 12}">${esc(t.tools[c.tool])}</text></g>`
        : `<g><rect class="sc-swatch t-${c.tool}" x="0" y="${barY + 6}" width="10" height="10" rx="2"/><text class="sc-tool" x="16" y="${barY + 15}">${esc(t.tools[c.tool])}</text></g>`;
      let x0 = plotX;
      const widths = c.parts.map((v) => (v / max) * plotW);
      const last = widths.reduce((k, w, i) => (w > 0 ? i : k), 0);
      widths.forEach((w, i) => {
        if (w <= 0) return;
        const gap = i < last ? 2 : 0;
        const segW = Math.max(1, w - gap);
        out += i === last ? bar(x0, barY, segW, barH, `t-${c.tool} sc-part-${i}`) : `<rect class="t-${c.tool} sc-part-${i}" x="${x0.toFixed(1)}" y="${barY}" width="${segW.toFixed(1)}" height="${barH}"/>`;
        const label = `${t.parts[i]} ${t.kb(c.parts[i]!)}`;
        if (textW(label, 12) + 12 < segW) out += `<text class="sc-in sc-in-${i}" x="${(x0 + 6).toFixed(1)}" y="${barY + 15}">${esc(label)}</text>`;
        x0 += w;
      });
      out += `<text class="sc-value sc-strong" x="${(x0 + 6).toFixed(1)}" y="${barY + 15}">${esc(t.mb(total))}</text></g>`;
      y += rowH;
    }
    out += `<line class="sc-axis" x1="${plotX}" x2="${plotX}" y1="0" y2="${y}"/>`;
    return svg(`cost-${lang}-${narrow ? 'n' : 'w'}`, W, y + 4, t.costTitle, desc, out, narrow ? 'sc-narrow' : 'sc-wide');
  };
  const key = `<ul class="sc-key">${t.parts.map((p, i) => `<li><span class="sc-key-mark sc-key-part-${i}"></span>${esc(p)}</li>`).join('')}</ul>`;
  return `<figure class="speed-chart">${key}${draw(false)}${draw(true)}<figcaption>${esc(t.costNote)}</figcaption></figure>`;
}

const CHARTS: Record<string, (lang: Lang) => string> = { 'load-time': loadTime, 'fixed-cost': fixedCost };

export function speedChart(name: string, lang: Lang): string {
  const chart = CHARTS[name];
  if (!chart) throw new Error(`speed charts: no chart named "${name}" (${Object.keys(CHARTS).join(', ')})`);
  return chart(lang);
}

const PLACE = /^<div data-chart="([a-z-]+)"><\/div>$/;
export const speedCharts = defineMdastPlugin({
  name: 'elabora-speed-charts',
  html(node, ctx) {
    const match = PLACE.exec(node.value.trim());
    if (!match) return;
    const file = ctx.fileURL ? fileURLToPath(ctx.fileURL) : '';
    const lang: Lang = /[/\\]compare[/\\]fr[/\\]/.test(file) ? 'fr' : 'en';
    ctx.replaceNode(node, { type: 'html', value: speedChart(match[1]!, lang) });
  },
});
