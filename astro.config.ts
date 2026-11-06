import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/site.config';
import { satteri } from '@astrojs/markdown-satteri';
import { headersFile } from './src/integrations/headers';
import { sitemapFile } from './src/integrations/sitemap';
import { coreDocsLinks } from './src/lib/core-docs-links';
import { speedCharts } from './src/lib/speed-charts';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  // No inline <style>: the CSP allows `style-src 'self'` only.
  build: { format: 'directory', inlineStylesheets: 'never' },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    // `/` is answered by the Worker (302 by Accept-Language), so no static redirect page.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  markdown: {
    // Prism writes classes, which src/styles/docs.css colours; Shiki's inline styles would break the CSP.
    syntaxHighlight: 'prism',
    processor: satteri({ mdastPlugins: [coreDocsLinks, speedCharts] }),
  },
  // Nothing inlined: the CSP allows scripts (the docs' search) and images from files only.
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [headersFile(), sitemapFile()],
});
