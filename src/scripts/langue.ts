// The developer docs exist in English only. A visitor who came from the French site keeps it: the links of the page's
// frame (logo, header, crumbs, footer) lead back to the French pages. The language is the one of the page they came
// from, kept for the tab (sessionStorage), so that it survives a walk through several developer pages.
const KEY = 'elabora:lang';
const DEV = '/en/docs/developers/';

const from = document.referrer ? new URL(document.referrer) : null;
if (from && from.origin === location.origin && !from.pathname.startsWith(DEV)) {
  const lang = from.pathname.split('/')[1];
  if (lang === 'fr' || lang === 'en') sessionStorage.setItem(KEY, lang);
}

const frame = document.querySelector<HTMLElement>('[data-fr-links]');
if (frame && sessionStorage.getItem(KEY) === 'fr') {
  const links: Record<string, string> = JSON.parse(frame.dataset['frLinks'] ?? '{}');
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/en/"]').forEach((a) => {
    const url = new URL(a.href);
    const fr = links[url.pathname];
    if (fr) a.href = fr + url.hash;
  });
}
