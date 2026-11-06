import fs from 'node:fs';
import path from 'node:path';
import { CORE_REPO_URL } from '../site.config';

/**
 * The developer documentation, as elabora-core writes it: docs/index.md is the map (the same one GitHub
 * shows, `elabora docs` serves and llms.txt becomes), docs/decisions/Dnn.md one decision each. The site
 * reads the snapshot in src/content/core-docs (scripts/core-docs.mjs), or a core checkout when
 * ELABORA_CORE_DIR is set; it never keeps a copy of its own. Ids follow the core's
 * (packages/cli/src/docs.ts, `pageId`): docs/architecture/media.md is architecture/media.
 */
export const CORE_DOCS_DIR = path.resolve(process.env.ELABORA_CORE_DIR || 'src/content/core-docs');
const manifestFile = path.join(CORE_DOCS_DIR, 'manifest.json');
/** The core commit the snapshot comes from; a live checkout links to its main branch. */
export const CORE_REVISION: string = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')).revision : 'main';
/** The files of the core the site renders (scripts/core-docs.mjs syncs the same). */
export const CORE_DOCS_PATTERN = ['docs/**/*.md', 'SPEC.md', 'CONTRIBUTING.md', 'CHANGELOG.md'];

export const DEV_BASE = '/en/docs/developers/';

export function pageId(file: string): string {
  const relative = file.startsWith('docs/') ? file.slice('docs/'.length) : file;
  return relative.replace(/\.md$/, '').toLowerCase().replace(/^decisions\/d0*(\d+)$/, 'decisions/d$1');
}
export const devPath = (id: string) => (id === 'index' ? DEV_BASE : `${DEV_BASE}${id}/`);
/** The page as Markdown, for agents and people who want the source (`index.md` is the map). */
export const devMarkdownPath = (id: string) => `${DEV_BASE}${id}.md`;
export const sourceUrl = (file: string) => `${CORE_REPO_URL}/blob/${CORE_REVISION}/${file}`;
/** A path of the core that is not a page (code, schemas, examples): on GitHub, at the same commit. */
export const codeUrl = (corePath: string) => `${CORE_REPO_URL}/${corePath.endsWith('/') || !/\.[a-z0-9]+$/i.test(corePath) ? 'tree' : 'blob'}/${CORE_REVISION}/${corePath.replace(/\/$/, '')}`;

export interface DevPage {
  id: string;
  title: string;
  description: string;
  section: string;
  file: string;
  generated: boolean;
}
export interface DevSection { title: string; pages: DevPage[] }
export interface DevMap { title: string; summary: string; sections: DevSection[] }

let cachedMap: DevMap | undefined;
/** docs/index.md: its title, its summary (the quote under it), and each `## Section` with its `- [Title](file): description` lines. */
export function devMap(): DevMap {
  if (cachedMap) return cachedMap;
  const lines = fs.readFileSync(path.join(CORE_DOCS_DIR, 'docs/index.md'), 'utf8').split('\n');
  const map: DevMap = { title: '', summary: '', sections: [] };
  for (const line of lines) {
    const [, hashes, text = ''] = /^(#{1,2}) (.+)$/.exec(line) ?? [];
    if (hashes === '#') { map.title = text.trim(); continue; }
    if (hashes) { map.sections.push({ title: text.trim(), pages: [] }); continue; }
    if (line.startsWith('> ') && !map.summary) { map.summary = line.slice(2).trim(); continue; }
    const [entry, title = '', link = '', note = ''] = /^- \[([^\]]+)\]\(([^)#]+\.md)\)(?::\s*(.*))?$/.exec(line) ?? [];
    const section = map.sections.at(-1);
    if (!entry || !section) continue;
    const file = path.posix.normalize(path.posix.join('docs', link));
    const description = note.trim();
    // On the map a description follows a colon; on a card or a page it stands alone: a capital.
    const sentence = description.replace(/\s*\((index )?generated\)\.?$/, '.').replace(/\.\.$/, '.');
    section.pages.push({ id: pageId(file), title, description: sentence.charAt(0).toUpperCase() + sentence.slice(1), section: section.title, file, generated: /\((index )?generated\)/.test(description) });
  }
  return (cachedMap = map);
}

let cachedDecisions: DevPage[] | undefined;
/** The decisions, from their first line, « # D29. Title (date) ». */
export function devDecisions(): DevPage[] {
  if (cachedDecisions) return cachedDecisions;
  const dir = path.join(CORE_DOCS_DIR, 'docs/decisions');
  return (cachedDecisions = fs.readdirSync(dir).filter((name) => /^D\d+\.md$/.test(name)).sort().map((name) => {
    const head = /^# (D\d+)\. (.*)$/m.exec(fs.readFileSync(path.join(dir, name), 'utf8'));
    const file = `docs/decisions/${name}`;
    return { id: pageId(file), title: head ? `${head[1]}. ${head[2]}` : name, description: '', section: 'Decisions', file, generated: false };
  }));
}

/** Every page of the map, then every decision, in reading order. */
export const devPages = (): DevPage[] => [...devMap().sections.flatMap((section) => section.pages), ...devDecisions()];
export const devPage = (id: string): DevPage | undefined => devPages().find((page) => page.id === id);
export const decisionExists = (number: number) => devDecisions().some((page) => page.id === `decisions/d${number}`);

/** A core page's own title, its leading `# Title` (the Markdown plugin takes it out of the page body). */
export const coreTitle = (markdown: string | undefined): string | undefined => /^# (.+)$/m.exec(markdown ?? '')?.[1]?.replace(/`/g, '').trim();

/** The route of a core path (relative to the core's root) when it is a page, with its anchor. */
export function routeOfCorePath(corePath: string): string | undefined {
  if (!/\.md$/.test(corePath)) return undefined;
  const id = pageId(corePath);
  if (corePath !== 'docs/index.md' && !fs.existsSync(path.join(CORE_DOCS_DIR, corePath))) return undefined;
  return devPath(corePath === 'docs/index.md' ? 'index' : id);
}
