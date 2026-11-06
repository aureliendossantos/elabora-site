import type { APIRoute } from 'astro';
import { SITE_URL } from '../site.config';
import { docsPath, useT } from '../i18n';
import { devMap, devMarkdownPath } from '../lib/core-docs';
import { manualPages } from '../lib/docs-nav';
import { comparePages, comparePath } from '../lib/comparisons';

/**
 * /llms.txt (llmstxt.org): what an agent needs to know about Elabora, with a link to each page. The
 * developer docs come from the core's docs/index.md, each page as its Markdown; the manual and the comparisons in English.
 */
export const GET: APIRoute = async () => {
  const t = useT('en');
  const map = devMap();
  const abs = (p: string) => new URL(p, SITE_URL).href;
  const optional = new Set(['Decisions']);
  const lines = [
    '# Elabora',
    '',
    `> ${t.siteDescription}`,
    '',
    `The app works with the author's own AI agent on course folders in an open format. ${map.summary.replace(/^The open core of Elabora: /, 'Its open core (elabora-core, Apache-2.0) is ')} Developer pages below are Markdown; the same pages are served by the \`elabora docs\` command and the \`elabora_docs\` MCP tool of an installed Elabora.`,
  ];
  for (const section of map.sections.filter((s) => !optional.has(s.title))) {
    lines.push('', `## ${section.title}`, '', ...section.pages.map((page) => `- [${page.title}](${abs(devMarkdownPath(page.id))}): ${page.description}`));
  }
  lines.push('', '## App manual', '', ...(await manualPages('en')).map((page) => `- [${page.data.title}](${abs(docsPath('en', page.data.slug))}): ${page.data.description}`));
  // The comparisons, with dated facts from each vendor's pages (src/data/comparisons/): agents are one of their readers.
  lines.push('', '## Comparisons with other authoring tools', '', ...(await comparePages('en')).map((page) => `- [${page.data.title}](${abs(comparePath('en', page.data.slug))}): ${page.data.description}`));
  lines.push('', '## Optional', '', ...map.sections.filter((s) => optional.has(s.title)).flatMap((section) => section.pages.map((page) => `- [${page.title}](${abs(devMarkdownPath(page.id))}): ${page.description}`)));
  return new Response(`${lines.join('\n')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
