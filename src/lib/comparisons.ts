/**
 * The comparison pages (/en/compare/, /fr/comparatif/): the facts of each tool (src/data/comparisons/<tool>.json, one
 * file per tool, read here) and the pages written over them (src/content/compare/{en,fr}/<page>.md). A page names the
 * tools and facts it shows; a name that is not in the files stops the build. docs/maintenance.md, « Comparison pages ».
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE_URL } from '../site.config';
import { ATTRIBUTES, check, type Attribute, type Fact, type Gap, type Tool } from './comparisons-rules';
import type { Lang } from '../i18n';

const files = import.meta.glob<Tool>('../data/comparisons/*.json', { eager: true, import: 'default' });
export const TOOLS: Record<string, Tool> = Object.fromEntries(
  Object.entries(files).map(([path, tool]) => [path.replace(/^.*\/([^/]+)\.json$/, '$1'), tool]),
);

// A malformed file stops the build; a fact past its validity does not (its date is on the page; `pnpm test` fails).
const problems = check(TOOLS, new Date());
if (problems.errors.length) throw new Error(`src/data/comparisons:\n${problems.errors.join('\n')}`);

/** The first segment of the comparison pages, in each language. */
export const COMPARE_BASE: Record<Lang, string> = { en: 'compare', fr: 'comparatif' };
export const comparePath = (lang: Lang, slug = '') => (slug ? `/${lang}/${COMPARE_BASE[lang]}/${slug}/` : `/${lang}/${COMPARE_BASE[lang]}/`);

export function tool(id: string): Tool {
  const found = TOOLS[id];
  if (!found) throw new Error(`No tool "${id}" in src/data/comparisons/ (a page names it)`);
  return found;
}

/** A fact a page shows: the build stops when it is missing. */
export function fact(id: string, attribute: Attribute): Fact {
  const found = tool(id).facts[attribute];
  if (!found) throw new Error(`No fact "${attribute}" for "${id}" in src/data/comparisons/${id}.json (a page shows it)`);
  return found;
}

/** The fact when the tool has one (the overview leaves the cell empty otherwise). */
export const maybeFact = (id: string, attribute: Attribute): Fact | undefined => tool(id).facts[attribute];

/** What Elabora does not do yet: on every page, from elabora.json. */
export const gaps = (): Gap[] => tool('elabora').gaps ?? [];

export function attributesOf(id: string): Attribute[] {
  return ATTRIBUTES.filter((a) => tool(id).facts[a]);
}

/** The oldest check among some facts: what a page may say about how recent its facts are. */
export function oldestCheck(facts: Fact[]): string {
  return facts.map((f) => f.checked).sort()[0] ?? new Date().toISOString().slice(0, 10);
}

export type ComparePage = CollectionEntry<'compare'>;
/** The page's key, the same in both languages: its file name (`storyline` for en/storyline.md and fr/storyline.md). */
export const pageKey = (page: ComparePage) => page.id.split('/')[1]!;

export async function comparePages(lang: Lang): Promise<ComparePage[]> {
  const pages = (await getCollection('compare')).filter((p) => p.id.startsWith(`${lang}/`));
  return pages.sort((a, b) => a.data.order - b.data.order);
}

/** The same page in each language, for hreflang and the language selector. */
export async function comparePaths(key: string): Promise<Record<Lang, string>> {
  const all = await getCollection('compare');
  const slug = (lang: Lang) => {
    const page = all.find((p) => p.id === `${lang}/${key}`);
    if (!page) throw new Error(`src/content/compare/${lang}/${key}.md is missing: every comparison exists in both languages`);
    return page.data.slug;
  };
  return { en: comparePath('en', slug('en')), fr: comparePath('fr', slug('fr')) };
}

/** A day as the page's language writes it. */
export const longDate = (lang: Lang, day: string) => new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(day));

/**
 * A source on Elabora's own site, in the page's language when that page exists in it: the manual's pages pair by file
 * name (the developer docs are in English only), the home and the release notes by their prefix.
 */
export async function localSource(lang: Lang, source: string): Promise<string> {
  if (lang === 'en' || !source.startsWith(`${SITE_URL}/en/`)) return source;
  const url = new URL(source);
  const docs = /^\/en\/docs\/([a-z0-9-]+)\/$/.exec(url.pathname);
  if (docs) {
    const manual = await getCollection('manual');
    const en = manual.find((p) => p.id.startsWith('en/') && p.data.slug === docs[1]);
    const fr = en && manual.find((p) => p.id === `fr/${en.id.slice(3)}`);
    return fr ? `${SITE_URL}/fr/docs/${fr.data.slug}/${url.hash}` : source;
  }
  if (url.pathname === '/en/' || url.pathname.startsWith('/en/changelog/')) return `${SITE_URL}${url.pathname.replace(/^\/en\//, '/fr/')}${url.hash}`;
  return source;
}
