import { SITE_URL } from '../site.config';

// Crawling stays allowed even while indexing is off (see INDEXING in site.config.ts), so that
// crawlers can read the noindex and drop the pages. The sitemap is written at build (src/integrations/sitemap.ts).
export const GET = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
