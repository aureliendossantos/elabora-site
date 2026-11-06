/* The templates (components/home/Templates.astro): a thumbnail sets the large preview (the new video laid over the
   old, which fades) and the card; « Voir les 14 écrans » opens the template's sheet: its name, what it is for, the
   download, then its screens, one large and all fourteen below. */
import { el, openSheet } from './sheet.ts';
import { reduced } from './loop.ts';

interface Template { id: string; name: string; summary: string; for: string; dir: string }
const data = document.getElementById('modeles-data');
const screen = document.querySelector<HTMLElement>('[data-template-screen]');
const card = document.querySelector<HTMLElement>('[data-template-card]');
const SCREENS = ['cover', 'objectives', 'part-one', 'key-message', 'text-and-picture', 'cards', 'key-figures', 'steps', 'comparison', 'chart', 'quote', 'practice', 'recap', 'the-end'];

if (data && screen && card) {
  const { list, words } = JSON.parse(data.textContent ?? '{}') as { list: Template[]; words: Record<string, string> };
  const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ''));
  let current = list[0]!;
  if (reduced) screen.querySelector('video')?.pause();

  function choose(m: Template) {
    current = m;
    document.querySelectorAll('[data-template]').forEach((b) => b.setAttribute('aria-pressed', String((b as HTMLElement).dataset['template'] === m.id)));
    const video = el('video', { muted: true, loop: true, playsInline: true, autoplay: !reduced, preload: 'auto', poster: `${m.dir}cover.webp`, src: `${m.dir}boucle.mp4` });
    video.setAttribute('aria-label', fill(words['preview']!, { name: m.name }));
    video.style.opacity = '0';
    const old = [...screen!.querySelectorAll('video')];
    screen!.appendChild(video);
    let done = false;
    const swap = () => { if (done) return; done = true; video.style.opacity = '1'; old.forEach((o) => { o.classList.add('is-leaving'); setTimeout(() => o.remove(), 600); }); };
    video.addEventListener('loadeddata', swap, { once: true });
    setTimeout(swap, 700);
    card!.querySelector('h3')!.textContent = m.name;
    const [summary, audiences] = card!.querySelectorAll('p');
    summary!.textContent = m.summary; audiences!.textContent = m.for;
  }
  document.querySelectorAll<HTMLButtonElement>('[data-template]').forEach((b) => b.addEventListener('click', () => choose(list.find((m) => m.id === b.dataset['template'])!)));

  // The sheet: the template's screens, and what to do to use it.
  const download = document.querySelector<HTMLAnchorElement>('.hero [data-download]');
  card.querySelector('[data-template-sheet]')?.addEventListener('click', () => {
    const m = current;
    const big = el('img', { src: `${m.dir}cover.webp`, alt: '', width: 1200, height: 675 });
    const strip = el('ul', { class: 'screens' });
    strip.setAttribute('aria-label', words['screens']!);
    SCREENS.forEach((s, i) => {
      const b = el('button', { type: 'button' }, el('img', { src: `${m.dir}${s}.webp`, alt: '', loading: 'lazy', width: 1200, height: 675 }));
      b.setAttribute('aria-label', fill(words['screen']!, { n: i + 1 }));
      b.setAttribute('aria-pressed', String(i === 0));
      b.addEventListener('click', () => { big.src = `${m.dir}${s}.webp`; strip.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); });
      strip.appendChild(el('li', {}, b));
    });
    const actions = el('div', { class: 'actions' }, ...(download ? [download.cloneNode(true)] : []));
    openSheet(el('div', {},
      el('div', { class: 'sheet-head' },
        el('p', { class: 'eyebrow' }, words['kind']!),
        el('h2', { id: 'sheet-title' }, m.name),
        el('p', {}, m.summary),
        el('p', { class: 'for' }, `${m.for} · ${words['facts']}`),
        actions,
        el('p', { class: 'sheet-note' }, fill(words['note']!, { name: m.name }))),
      el('div', { class: 'frame frame--16x9 sheet-screen' }, big),
      strip));
  });
}
