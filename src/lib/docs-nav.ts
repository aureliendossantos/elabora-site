import { getCollection, type CollectionEntry } from 'astro:content';
import { MANUAL_GROUPS } from '../content.config';
import { docsPath, useT, type Lang } from '../i18n';
import { DEV_BASE, devDecisions, devMap, devPath } from './core-docs';

export interface NavItem { title: string; href: string; current?: boolean }
export interface NavGroup { title: string; items: NavItem[] }
export type ManualEntry = CollectionEntry<'manual'>;

/** The manual's pages of one language, in the sidebar's order: by group, then by `order`. */
export async function manualPages(lang: Lang): Promise<ManualEntry[]> {
  const pages = (await getCollection('manual')).filter((entry) => entry.id.startsWith(`${lang}/`));
  const rank = (entry: ManualEntry) => MANUAL_GROUPS.indexOf(entry.data.group) * 1000 + entry.data.order;
  return pages.sort((a, b) => rank(a) - rank(b));
}

/** The same page in the other language: the same file name (fr/plan.md, en/plan.md). */
export async function manualCounterpart(entry: ManualEntry, lang: Lang): Promise<ManualEntry | undefined> {
  const name = entry.id.split('/').slice(1).join('/');
  return (await getCollection('manual')).find((other) => other.id === `${lang}/${name}`);
}

const mark = (items: NavItem[], current: string) => items.map((item) => ({ ...item, current: item.href === current }));

export function manualNav(pages: ManualEntry[], lang: Lang, current: string): NavGroup[] {
  const t = useT(lang);
  return MANUAL_GROUPS.map((group) => ({
    title: t.docs.groups[group],
    items: mark(pages.filter((page) => page.data.group === group).map((page) => ({ title: page.data.title, href: docsPath(lang, page.data.slug) })), current),
  })).filter((group) => group.items.length);
}

/** The developer docs' sections, from docs/index.md; a decision marks the decision log as current. */
export function devNav(currentId: string): NavGroup[] {
  const current = currentId.startsWith('decisions/') ? devPath('decisions') : currentId === 'index' ? DEV_BASE : devPath(currentId);
  return devMap().sections.map((section) => ({
    title: section.title,
    items: mark(section.pages.map((page) => ({ title: page.title, href: devPath(page.id) })), current),
  }));
}

/** The pages before and after, in the reading order of the sidebar (between decisions on a decision). */
export function neighbours(items: NavItem[], href: string): { prev?: NavItem | undefined; next?: NavItem | undefined } {
  const index = items.findIndex((item) => item.href === href);
  if (index < 0) return {};
  return { prev: items[index - 1], next: items[index + 1] };
}
export const decisionItems = (): NavItem[] => devDecisions().map((page) => ({ title: page.title, href: devPath(page.id) }));
