import { INDEXING, VITRINE_ORIGIN } from '../site.config';

const CSP = [
  "default-src 'none'",
  "img-src 'self' " + VITRINE_ORIGIN,
  "style-src 'self'",
  "font-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
];

/**
 * The docs' pages run one script of the site, their search: Pagefind's index, fetched from the site and
 * read by its WebAssembly module ('wasm-unsafe-eval' allows compiling WebAssembly, not `eval`).
 */
export const DOCS_CSP = [...CSP, "script-src 'self' 'wasm-unsafe-eval'", "connect-src 'self'"].join('; ');

/** The pricing page runs one script of the site: the download button's choice of the visitor's system. */
export const PRICING_CSP = [...CSP, "script-src 'self'"].join('; ');

/**
 * The home runs the site's own scripts (the film, the lock's inspector, the sheets, the press of the last section),
 * plays its videos, and frames the lock and the dialogue (/demo/*) and the published samples (vitrine.elabora.page).
 */
export const HOME_CSP = [...CSP, "script-src 'self'", "media-src 'self'", `frame-src 'self' ${VITRINE_ORIGIN}`].join('; ');

/**
 * The home's demos, framed by the home only: the lock (/demo/ecluse/, three.js; its styles are files) and the dialogue
 * (/demo/phishing/, the module built for the web: its player fetches its media, draws into blobs, and styles its
 * characters and its panels inline as it plays, hence `inlineStyles` there: static content only, no visitor's input).
 */
export function demoCsp({ inlineStyles = false } = {}): string {
  return [
    "default-src 'none'",
    "script-src 'self'",
    inlineStyles ? "style-src 'self' 'unsafe-inline'" : "style-src 'self'",
    "img-src 'self' data: blob:",
    "media-src 'self' blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "base-uri 'none'",
    "form-action 'none'",
    "frame-ancestors 'self'",
  ].join('; ');
}

/** The security headers, shared with the Worker (which answers `/` itself, outside `_headers`). */
export const SECURITY_HEADERS: Record<string, string> = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Content-Security-Policy': CSP.join('; '),
  ...(INDEXING ? {} : { 'X-Robots-Tag': 'noindex' }),
};
