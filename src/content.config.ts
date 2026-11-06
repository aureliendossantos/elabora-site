import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { pathToFileURL } from 'node:url';
import { CORE_DOCS_DIR, CORE_DOCS_PATTERN, pageId } from './lib/core-docs';

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['fr', 'en']),
    slug: z.string(),
    updated: z.coerce.date(),
  }),
});

/** The app's user manual, written for the site in French (reference) and English: `fr/<id>.md` and `en/<id>.md`. */
export const MANUAL_GROUPS = ['start', 'create', 'deliver', 'more'] as const;
const manual = defineCollection({
  // The id is the file (fr/plan): `slug` is the address in its language, '' for the docs' home.
  loader: glob({ pattern: '**/*.md', base: './src/content/manual', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().regex(/^(|[a-z0-9-]+)$/).refine((slug) => slug !== 'developers', 'developers is the developer docs'),
    group: z.enum(MANUAL_GROUPS),
    order: z.number(),
  }),
});

/** The developer documentation: elabora-core's Markdown, as its snapshot holds it (src/lib/core-docs.ts). */
const coreDocs = defineCollection({
  loader: glob({ pattern: CORE_DOCS_PATTERN, base: pathToFileURL(CORE_DOCS_DIR), generateId: ({ entry }) => pageId(entry) }),
});

/**
 * The comparison pages, written over the facts of src/data/comparisons/ (src/lib/comparisons.ts): `en/<page>.md` and
 * `fr/<page>.md`, the same file name in both languages. The body is the page's own text; the tables, Elabora's gaps,
 * the corrections and the links to the other comparisons are the layout's.
 */
const compare = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compare', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    /** The page's title (its <h1>); `seo` is the <title> when it should say more. */
    title: z.string(),
    seo: z.string().optional(),
    description: z.string().max(170),
    /** The address in its language, '' for the overview. */
    slug: z.string().regex(/^(|[a-z0-9-]+)$/),
    kind: z.enum(['overview', 'versus', 'alternative']),
    /** versus: the other tool; its facts and Elabora's make the table. */
    tool: z.string().optional(),
    /** overview and alternative: one row per tool, one column per fact. */
    table: z.object({ tools: z.array(z.string()).min(2), attributes: z.array(z.string()).min(1) }).optional(),
    /** The short answer, under the title. */
    summary: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    /** Who should choose the other tool, who should choose Elabora (versus, alternative). */
    chooseOther: z.array(z.string()).optional(),
    chooseElabora: z.array(z.string()).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    /** Its place in the lists of comparisons. */
    order: z.number(),
  }),
});

export const collections = { legal, manual, coreDocs, compare };
