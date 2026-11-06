/**
 * The rules of the comparison facts (src/data/comparisons/*.json), shared by the pages and by `pnpm test`
 * (scripts/comparisons.test.mjs reads this file with Node's type stripping: erasable TypeScript only, no imports).
 *
 * Every fact is one value of one tool, with its official source and the day it was read there. A fact is valid
 * for a time that depends on what it says: a price moves faster than a platform, a platform faster than a format.
 * Past that time, `pnpm test` fails until someone reads the source again (src/data/comparisons/WATCH.md).
 */

export const LANGS = ['en', 'fr'] as const;
export type FactLang = (typeof LANGS)[number];

/** What a fact can be about, in the order of the tables. */
export const ATTRIBUTES = ['price', 'platforms', 'delivery', 'files', 'ai', 'agents', 'review', 'collaboration', 'import', 'templates', 'localization', 'accessibility', 'pedagogy', 'performance'] as const;
export type Attribute = (typeof ATTRIBUTES)[number];

/** How long a fact stays valid, in days, by what it says (the founder's durations, 5 Nov 2026). */
export const VALIDITY = { price: 60, platform: 120, format: 180, feature: 120, measure: 180 } as const;
export type Kind = keyof typeof VALIDITY;
export const KIND: Record<Attribute, Kind> = {
  price: 'price',
  platforms: 'platform',
  delivery: 'format',
  files: 'format',
  ai: 'feature',
  agents: 'feature',
  review: 'feature',
  collaboration: 'feature',
  import: 'feature',
  templates: 'feature',
  localization: 'feature',
  accessibility: 'feature',
  pedagogy: 'feature',
  /** A measurement of ours (research/), made again with its script. */
  performance: 'measure',
};
/** A fact this close to its end is announced by `pnpm test`, without failing. */
export const WARN_DAYS = 30;

export interface Fact {
  en: string;
  fr: string;
  /** The official page that says it (the vendor's site, help centre or release notes; Elabora's own docs). */
  source: string;
  /** The day the source was read, YYYY-MM-DD. */
  checked: string;
}

/** One of Elabora's gaps: said on every comparison page, removed when it is closed (valid as a feature). */
export interface Gap extends Fact {
  id: string;
}

export interface Tool {
  /** The product's full name, as its vendor writes it. */
  name: string;
  /** The name in running text and in addresses' titles ("Storyline"). */
  short: string;
  vendor: string;
  url: string;
  /** `requirement`: a product another tool needs, with no comparison of its own (Parallels Desktop, for Storyline on a Mac). */
  role?: 'requirement';
  facts: Partial<Record<Attribute, Fact>>;
  /** Elabora only: what it does not do yet. */
  gaps?: Gap[];
}

const DAY = 86_400_000;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

/** The last day a fact is valid. */
export function expires(kind: Kind, checked: string): Date {
  return new Date(Date.parse(checked) + VALIDITY[kind] * DAY);
}

export interface Problems {
  errors: string[];
  /** Facts past their validity: the test fails, the pages still show them with their date. */
  stale: string[];
  /** Facts that end within WARN_DAYS. */
  soon: string[];
}

/** Everything wrong with a set of tools on a given day. */
export function check(tools: Record<string, Tool>, today: Date): Problems {
  const problems: Problems = { errors: [], stale: [], soon: [] };
  const error = (where: string, what: string) => problems.errors.push(`${where}: ${what}`);
  const text = (value: unknown, max: number) => typeof value === 'string' && value.trim() === value && value.length > 0 && value.length <= max && !/[\u0000-\u001f]/.test(value);
  const dated = (where: string, kind: Kind, fact: Fact): void => {
    for (const lang of LANGS) if (!text(fact[lang], 400)) error(where, `"${lang}" is a sentence of at most 400 characters`);
    if (typeof fact.source !== 'string' || !/^https:\/\/[^\s]+$/.test(fact.source)) error(where, 'its source is an https address');
    if (typeof fact.checked !== 'string' || !DATE.test(fact.checked) || Number.isNaN(Date.parse(fact.checked))) { error(where, 'checked is a date, YYYY-MM-DD'); return; }
    // (a day of grace: a fact read in Paris after midnight is dated a day ahead of UTC)
    if (Date.parse(fact.checked) - DAY > today.getTime()) { error(where, `checked ${fact.checked} is in the future`); return; }
    const end = expires(kind, fact.checked);
    const day = end.toISOString().slice(0, 10);
    if (end.getTime() < today.getTime()) problems.stale.push(`${where}: checked ${fact.checked}, valid until ${day} (${kind}, ${VALIDITY[kind]} days)`);
    else if (end.getTime() - today.getTime() < WARN_DAYS * DAY) problems.soon.push(`${where}: valid until ${day}`);
  };
  for (const [id, tool] of Object.entries(tools)) {
    if (!/^[a-z0-9-]+$/.test(id)) error(id, 'a file name in lowercase letters, figures and dashes');
    for (const key of ['name', 'short', 'vendor'] as const) if (!text(tool[key], 80)) error(id, `${key} is a short name`);
    if (typeof tool.url !== 'string' || !tool.url.startsWith('https://')) error(id, 'url is the product’s https address');
    if (!tool.facts || typeof tool.facts !== 'object') { error(id, 'facts is an object'); continue; }
    for (const [attribute, fact] of Object.entries(tool.facts)) {
      if (!(ATTRIBUTES as readonly string[]).includes(attribute)) { error(`${id}.${attribute}`, `not one of ${ATTRIBUTES.join(', ')}`); continue; }
      dated(`${id}.${attribute}`, KIND[attribute as Attribute], fact as Fact);
    }
    if (tool.gaps !== undefined) {
      if (id !== 'elabora') error(id, 'only Elabora lists gaps');
      const ids = new Set<string>();
      for (const gap of tool.gaps ?? []) {
        if (!/^[a-z0-9-]+$/.test(gap.id) || ids.has(gap.id)) error(`${id}.gaps`, `"${gap.id}": a unique id`);
        ids.add(gap.id);
        dated(`${id}.gaps.${gap.id}`, 'feature', gap);
      }
    }
  }
  if (!tools.elabora) problems.errors.push('elabora.json: Elabora’s own facts are missing');
  return problems;
}
