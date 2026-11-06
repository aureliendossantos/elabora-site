import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineMdastPlugin } from 'satteri';
import { CORE_DOCS_DIR, codeUrl, decisionExists, devPath, routeOfCorePath } from './core-docs';

/**
 * The core's Markdown is written for GitHub: relative links between pages and to code. Rendered on the
 * site, a link to a page becomes its route and a link to code a GitHub link at the snapshot's commit,
 * so one file reads right in both places. Decision numbers (D24) and page paths (`docs/design.md`)
 * named in the text become links too. Only the core's pages are touched: the manual and the legal
 * pages link with site paths already.
 */
const corePathOf = (fileURL: URL | undefined): string | undefined => {
  if (!fileURL) return undefined;
  const relative = path.relative(CORE_DOCS_DIR, fileURLToPath(fileURL)).split(path.sep).join('/');
  return relative.startsWith('..') || path.isAbsolute(relative) ? undefined : relative;
};

export function rewriteCoreUrl(url: string, from: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('#') || url.startsWith('/')) return url;
  const [where = '', ...rest] = url.split('#');
  const anchor = rest.length ? `#${rest.join('#')}` : '';
  const target = path.posix.normalize(path.posix.join(path.posix.dirname(from), decodeURI(where)));
  if (target.startsWith('../')) return url;
  return (routeOfCorePath(target) ?? codeUrl(target)) + anchor;
}

// D24 (a decision that exists) and docs/….md, as they appear in prose.
const MENTION = /\b(?:D([1-9]\d?)|((?:docs\/[a-z0-9/-]+|SPEC|CONTRIBUTING|CHANGELOG)\.md))\b/g;
const PAGE_PATH = /^(?:docs\/[a-z0-9/-]+|SPEC|CONTRIBUTING|CHANGELOG)\.md$/;

type Node = { type: string; value?: string };
type Context = { parent(node: unknown): (Node & object) | undefined; fileURL: URL | undefined };
const insideLinkOrHeading = (node: unknown, ctx: Context) => {
  for (let parent = ctx.parent(node); parent; parent = ctx.parent(parent)) {
    if (['link', 'linkReference', 'heading'].includes(parent.type)) return true;
  }
  return false;
};

export const coreDocsLinks = defineMdastPlugin({
  name: 'elabora-core-docs-links',
  // A core page opens with its `# Title`; the layout shows it above the page's outline (coreTitle).
  heading(node, ctx) {
    if (node.depth === 1 && corePathOf(ctx.fileURL) && ctx.indexOf(node) === 0 && ctx.parent(node)?.type === 'root') ctx.removeNode(node);
  },
  link(node, ctx) {
    const from = corePathOf(ctx.fileURL);
    if (!from) return;
    const url = rewriteCoreUrl(node.url, from);
    if (url !== node.url) ctx.setProperty(node, 'url', url);
  },
  inlineCode(node, ctx) {
    const from = corePathOf(ctx.fileURL);
    if (!from || !PAGE_PATH.test(node.value) || insideLinkOrHeading(node, ctx as unknown as Context)) return;
    const route = routeOfCorePath(node.value);
    if (route) ctx.replaceNode(node, { type: 'link', url: route, children: [{ type: 'inlineCode', value: node.value }] });
  },
  text(node, ctx) {
    const from = corePathOf(ctx.fileURL);
    if (!from || insideLinkOrHeading(node, ctx as unknown as Context)) return;
    // The diagnostics page names guardrails D1 and D3, which are not decisions.
    const linkDecisions = from !== 'docs/diagnostics.md';
    const own = /^docs\/decisions\/D0*(\d+)\.md$/.exec(from)?.[1];
    const parts: ({ type: 'text'; value: string } | { type: 'link'; url: string; children: { type: 'text'; value: string }[] })[] = [];
    let last = 0;
    for (const match of node.value.matchAll(MENTION)) {
      const [text, number, page] = match;
      let url: string | undefined;
      if (number && linkDecisions && number !== own && decisionExists(Number(number))) url = devPath(`decisions/d${number}`);
      if (page) url = routeOfCorePath(page);
      if (!url) continue;
      if (match.index > last) parts.push({ type: 'text', value: node.value.slice(last, match.index) });
      parts.push({ type: 'link', url, children: [{ type: 'text', value: text }] });
      last = match.index + text.length;
    }
    if (!parts.length) return;
    if (last < node.value.length) parts.push({ type: 'text', value: node.value.slice(last) });
    ctx.replaceNode(node, parts);
  }
});
