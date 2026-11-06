import type { AstroIntegration } from 'astro';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from '../site.config';

/**
 * Writes `dist/sitemap.xml` from the built pages: every page's canonical address, with the language alternates its
 * own `<link rel="alternate" hreflang>` give. Left out: the 404 page, the home's demos (/demo/*, framed, never indexed)
 * and any page marked noindex. `robots.txt` names it; `pnpm run links` checks it against dist/.
 */
export function sitemapFile(): AstroIntegration {
  return {
    name: 'sitemap-file',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files: string[] = [];
        const walk = async (folder: string) => {
          for (const entry of await readdir(folder, { withFileTypes: true })) {
            const path = join(folder, entry.name);
            if (entry.isDirectory()) await walk(path);
            else if (entry.name === 'index.html') files.push(path);
          }
        };
        await walk(root);
        const urls: string[] = [];
        for (const file of files.sort()) {
          const page = `/${relative(root, file).split(sep).join('/')}`.replace(/index\.html$/, '');
          if (page.startsWith('/demo/')) continue;
          const html = await readFile(file, 'utf8');
          if (/<meta name="robots" content="noindex"/.test(html)) continue;
          const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
          if (!canonical || canonical !== new URL(page, SITE_URL).href) continue;
          const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(
            ([, lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`,
          );
          urls.push(['  <url>', `    <loc>${canonical}</loc>`, ...alternates, '  </url>'].join('\n'));
        }
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...urls,
          '</urlset>',
          '',
        ].join('\n');
        await writeFile(join(root, 'sitemap.xml'), xml);
      },
    },
  };
}
