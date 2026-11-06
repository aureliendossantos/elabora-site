// The Worker in front of the static assets. It only runs for `/`, `/docs/` and for the unprefixed legal addresses
// the app and the review page already link to (`run_worker_first` in wrangler.jsonc); everything else is
// served straight from the assets, with the headers of `dist/_headers`.
import { LEGAL_PAGES, LEGAL_KEYS, type Lang } from '../src/i18n';
import { SECURITY_HEADERS } from '../src/lib/security-headers';

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

/** `fr*` → fr, anything else → en; when both appear, the one with the higher q wins. */
export function pickLang(acceptLanguage: string | null): Lang {
  let best: { lang: Lang; q: number } | undefined;
  for (const part of (acceptLanguage ?? '').split(',')) {
    const [tag = '', ...params] = part.trim().split(';');
    const primary = tag.trim().toLowerCase().split('-')[0];
    if (primary !== 'fr' && primary !== 'en') continue;
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (!Number.isFinite(q) || q <= 0) continue;
    if (!best || q > best.q) best = { lang: primary, q };
  }
  return best?.lang ?? 'en';
}

/** Unprefixed legal slugs (either language) → the key of the page. */
const legalBySlug = new Map<string, keyof typeof LEGAL_PAGES>();
for (const key of LEGAL_KEYS) for (const slug of Object.values(LEGAL_PAGES[key])) legalBySlug.set(slug, key);

function redirect(location: string): Response {
  const headers = new Headers({ Location: location, Vary: 'Accept-Language', 'Cache-Control': 'private, no-store' });
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) headers.set(name, value);
  return new Response(null, { status: 302, headers });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === 'GET' || request.method === 'HEAD') {
      const lang = pickLang(request.headers.get('Accept-Language'));
      if (url.pathname === '/') return redirect(`/${lang}/`);
      if (url.pathname === '/docs' || url.pathname === '/docs/') return redirect(`/${lang}/docs/`);
      const slug = url.pathname.replace(/^\/|\/$/g, '');
      const key = legalBySlug.get(slug);
      if (key) return redirect(`/${lang}/${LEGAL_PAGES[key][lang]}/`);
    }
    return env.ASSETS.fetch(request);
  },
};

