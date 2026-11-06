/* The hero's film (components/home/Hero.astro). For each module: its request types itself (set down whole first, so
   that it never moves), then the module crossfades in, a picture or a recording playing. Before the next request
   types itself, the one written fades out (home.css). The relay below counts the modules; a click on one of its
   segments shows that module at once. */
import { relais } from '../brand/pas.ts';
import { live, reduced } from './loop.ts';

const root = document.querySelector<HTMLElement>('[data-film]');
if (root) {
  const requests = [...root.querySelectorAll<HTMLElement>('.film-request > span')];
  const shots = [...root.querySelectorAll<HTMLImageElement | HTMLVideoElement>('.film-screen > *')];
  const screen = root.querySelector<HTMLElement>('.film-screen')!;
  const label = screen.getAttribute('aria-label') ?? '';
  const texts = shots.map((s) => s.dataset['request'] ?? '');
  // LENGTH: a module's turn, in seconds; FADE: its last moment, the request fading out.
  const n = shots.length, LENGTH = 7.5, TYPE = 46, FADE = 0.3;
  const typedFor = (i: number) => texts[i]!.length / TYPE + 0.3;
  // The page opens on the first module, its request already written (as the server set it down).
  let k = 0, t0 = -typedFor(0), T = 0, typed = texts[0]!.length, shown = 0, leaving = false;

  const type = (i: number, count: number) => {
    requests.forEach((r, j) => { if (r.classList.contains('is-on') !== (j === i)) r.classList.toggle('is-on', j === i); if (r.classList.contains('is-leaving')) r.classList.remove('is-leaving'); });
    leaving = false;
    // A recording loads while its request types (the page loads the first one only).
    const shot = shots[i];
    if (shot instanceof HTMLVideoElement && shot.preload === 'none') shot.preload = 'auto';
    const r = requests[i]!, text = texts[i]!;
    r.querySelector('.typed')!.textContent = text.slice(0, count);
    r.querySelector('.rest')!.textContent = text.slice(count);
  };
  const show = (i: number) => {
    shown = i;
    shots.forEach((s, j) => {
      if (j === i) {
        s.classList.remove('is-on'); void s.offsetWidth; s.classList.add('is-on');
        if (s instanceof HTMLVideoElement) { s.loop = true; s.currentTime = 0; void s.play().catch(() => {}); }
      } else if (s.classList.contains('is-on')) {
        s.classList.remove('is-on');
        // A recording that leaves plays on while it fades, and holds its last image if it ends meanwhile.
        if (s instanceof HTMLVideoElement) { s.loop = false; setTimeout(() => s.pause(), 1100); }
      }
    });
    screen.setAttribute('aria-label', `${label}. ${shots[i]!.dataset['title']}: « ${texts[i]} »`);
  };
  const relay = relais(root.querySelector('.film-relay')!, n, (i) => { k = i; t0 = T - typedFor(i); typed = -1; show(i); });
  // The first module is on from the start (the server set it so): its recording plays at once.
  const first = shots[0];
  if (first instanceof HTMLVideoElement) void first.play().catch(() => {});

  live(root, (t, dt, still) => {
    T = t;
    if (still) { type(0, texts[0]!.length); show(0); relay.draw(0, 1, 1); return; }
    let u = (T - t0) / LENGTH;
    if (u >= 1) { k = (k + 1) % n; t0 = T; typed = -1; u = 0; }
    const count = Math.min(texts[k]!.length, Math.floor(Math.max(0, T - t0) * TYPE));
    if (count !== typed) { typed = count; type(k, count); }
    if (!leaving && T - t0 >= LENGTH - FADE) { leaving = true; requests[k]!.classList.add('is-leaving'); }
    if (shown !== k && T - t0 >= typedFor(k)) show(k);
    relay.draw(k, Math.min(1, u), dt);
  }, { stillAt: 8 });
  if (reduced) root.querySelectorAll('.caret').forEach((c) => c.remove());
}
