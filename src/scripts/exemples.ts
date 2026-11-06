/* The examples' rail: its arrows, and a card opening its published module in a sheet (scripts/sheet.ts), one line
   of head, the module drawn at 90 % right below, the download and « Ouvrir dans un onglet ». */
import { el, openSheet } from './sheet.ts';
import { reduced } from './loop.ts';

const rail = document.querySelector<HTMLElement>('[data-rail]');
const back = document.querySelector<HTMLButtonElement>('[data-rail-back]');
const on = document.querySelector<HTMLButtonElement>('[data-rail-on]');
if (rail && back && on) {
  const step = () => (rail.querySelector('li')?.getBoundingClientRect().width ?? 380) + 22;
  back.addEventListener('click', () => rail.scrollBy({ left: -step() * 2, behavior: reduced ? 'auto' : 'smooth' }));
  on.addEventListener('click', () => rail.scrollBy({ left: step() * 2, behavior: reduced ? 'auto' : 'smooth' }));
  const ends = () => { back.disabled = rail.scrollLeft < 8; on.disabled = rail.scrollLeft > rail.scrollWidth - rail.clientWidth - 8; };
  rail.addEventListener('scroll', ends, { passive: true });
  addEventListener('resize', ends);
  ends();
}

// The download button of the page, copied into the sheet (it already points at the visitor's system).
const download = document.querySelector<HTMLAnchorElement>('.hero [data-download]');
const tabLink = document.querySelector<HTMLTemplateElement>('#module-actions');

document.querySelectorAll<HTMLAnchorElement>('[data-module]').forEach((card) => card.addEventListener('click', (e) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  const title = card.dataset['title'] ?? '';
  const frame = el('div', { class: 'frame frame--16x9 module-frame' }, el('iframe', { src: card.href, title, allow: 'autoplay; fullscreen' } as Partial<HTMLIFrameElement>));
  const tab = tabLink?.content.firstElementChild?.cloneNode(true) as HTMLAnchorElement | undefined;
  if (tab) tab.href = card.href;
  const actions = el('div', { class: 'actions' }, ...[download?.cloneNode(true), tab].filter((n): n is Node => !!n));
  const head = el('div', { class: 'module-head' }, el('h2', { id: 'sheet-title', lang: card.dataset['titleLang'] ?? '' }, title), el('span', {}, card.dataset['meta'] ?? ''));
  openSheet(el('div', {}, head, frame, actions), { module: true });
}));
