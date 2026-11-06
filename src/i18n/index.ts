import { fr } from './fr';
import { en } from './en';
import type { Dict } from './fr';

export const LOCALES = ['fr', 'en'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = 'fr';

const dictionaries: Record<Lang, Dict> = { fr, en };
export const useT = (lang: Lang): Dict => dictionaries[lang];

export function isLang(value: string | undefined): value is Lang {
  return LOCALES.includes(value as Lang);
}

/**
 * The legal pages, one entry per page, with the slug in each language. The language selector uses it to
 * stay on the same page; the Worker uses the unprefixed forms (`/confidentialite`, `/conditions`, …) that
 * the app and the review page already link to.
 */
export const LEGAL_PAGES = {
  legalNotice: { fr: 'mentions-legales', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', en: 'privacy' },
  terms: { fr: 'conditions', en: 'terms' },
  reporting: { fr: 'signalement', en: 'reporting' },
} as const satisfies Record<string, Record<Lang, string>>;
export type LegalKey = keyof typeof LEGAL_PAGES;
export const LEGAL_KEYS = Object.keys(LEGAL_PAGES) as LegalKey[];

export function legalKeyOf(lang: Lang, slug: string): LegalKey | undefined {
  return LEGAL_KEYS.find((key) => LEGAL_PAGES[key][lang] === slug);
}

export const homePath = (lang: Lang) => `/${lang}/`;
export const legalPath = (lang: Lang, key: LegalKey) => `/${lang}/${LEGAL_PAGES[key][lang]}/`;
/** A page of the manual by its slug in that language ('' is the docs' home). */
export const docsPath = (lang: Lang, slug = '') => (slug ? `/${lang}/docs/${slug}/` : `/${lang}/docs/`);

/** A sentence of the dictionaries with its `{name}` slots filled. */
export const fill = (text: string, values: Record<string, string | number>) => text.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
