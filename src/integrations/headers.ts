import type { AstroIntegration } from 'astro';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { DOCS_CSP, HOME_CSP, PRICING_CSP, SECURITY_HEADERS, demoCsp } from '../lib/security-headers';
import { LOCALES, PRICING_PATHS } from '../i18n';

/** Writes `dist/_headers` (Cloudflare static assets) from `SECURITY_HEADERS` and `INDEXING`. */
export function headersFile(): AstroIntegration {
  return {
    name: 'headers-file',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        // `! Name` detaches a header a broader rule set, so that the rule below replaces it.
        const block = (path: string, h: Record<string, string>) =>
          `${path}\n${Object.entries(h).map(([k, v]) => (k.startsWith('! ') ? `  ${k}` : `  ${k}: ${v}`)).join('\n')}\n`;
        const text = [
          block('/*', SECURITY_HEADERS),
          block('/_astro/*', { 'Cache-Control': 'public, max-age=31536000, immutable' }),
          block('/.well-known/security.txt', { 'Content-Type': 'text/plain; charset=utf-8' }),
          // The docs and their search (DocsSearch.astro): a CSP that lets the site's own script run.
          // Its worker (pagefind/pagefind-worker.js) fetches the index under its own response's CSP.
          ...[...LOCALES.map((lang) => `/${lang}/docs/*`), '/pagefind/*'].map((path) => block(path, { '! Content-Security-Policy': '', 'Content-Security-Policy': DOCS_CSP })),
          // The home (its scripts, videos and frames) and its demos (framed by it only, never indexed).
          ...LOCALES.map((lang) => block(`/${lang}/`, { '! Content-Security-Policy': '', 'Content-Security-Policy': HOME_CSP })),
          ...LOCALES.map((lang) => block(PRICING_PATHS[lang], { '! Content-Security-Policy': '', 'Content-Security-Policy': PRICING_CSP })),
          block('/demo/*', { '! Content-Security-Policy': '', 'Content-Security-Policy': demoCsp(), 'X-Robots-Tag': 'noindex' }),
          block('/demo/phishing/*', { '! Content-Security-Policy': '', 'Content-Security-Policy': demoCsp({ inlineStyles: true }) }),
          block('/en/docs/developers/*.md', { 'Content-Type': 'text/markdown; charset=utf-8' }),
          block('/llms.txt', { 'Content-Type': 'text/plain; charset=utf-8' }),
          // Public format schemas are also consumed by browser-based editors on other origins.
          // Keep the default ETag/revalidation policy, including while 0.1 is a draft.
          // The chat's models list, read by the app at the start of a chat: a change reaches it within minutes.
          block('/app/chat-models.json', { 'Cache-Control': 'public, max-age=300', 'Content-Type': 'application/json; charset=utf-8' }),
          block('/schemas/*', { 'Access-Control-Allow-Origin': '*' }),
          block('/schemas/*.schema.json', { 'Content-Type': 'application/schema+json; charset=utf-8' }),
        ].join('\n');
        await writeFile(fileURLToPath(new URL('_headers', dir)), text);
      },
    },
  };
}
