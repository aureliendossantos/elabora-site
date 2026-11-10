/**
 * The one switch for search-engine indexing.
 *
 * `false`: every response carries `X-Robots-Tag: noindex` (from `_headers`, written at build
 * and by the Worker), every page has `<meta name="robots" content="noindex">`, and `robots.txt` still
 * allows crawling so that crawlers can see the noindex.
 * `true`: all of that is removed. Change this one line, then `npm run deploy`.
 */
export const INDEXING = true;

export const SITE_URL = 'https://elabora.studio';
export const CONTACT_EMAIL = 'contact@elabora.studio';
/** Where « Réserver une démo » leads: the team's booking page. */
export const DEMO_URL = 'https://cal.com/elabora-studio';
/** Where the sample modules are published (the home's cards open them there); the CSP's only external origin. */
export const VITRINE_ORIGIN = 'https://vitrine.elabora.page';
/** The core's repository: the developer docs link to its code at the commit they were synced from. */
export const CORE_REPO_URL = 'https://github.com/aureliendossantos/elabora-core';
/** The site's repository: the comparison pages link to their facts files there, for corrections. */
export const SITE_REPO_URL = 'https://github.com/aureliendossantos/elabora-site';
/** Who signs the comparison pages (he reviews every one). */
export const COMPARE_AUTHOR = 'Aurélien Dos Santos';
