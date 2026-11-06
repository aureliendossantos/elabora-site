/* The 3D section (components/home/LockDemo.astro). The lock's page (/demo/ecluse/) loads as the section nears, and
   the lock is mounted, with its watercolour entrance, once the stage is well in view. It pauses out of the window.
   The inspector's settings are the object's props: each change goes straight to it. On a phone, the inspector opens
   in a drawer from the bottom (home.css). */
import type { Ecluse, Options } from '../demos/ecluse/hote.ts';
import { reduced } from './loop.ts';

type Mount = (root: HTMLElement, o: Options) => Ecluse;

const stage = document.querySelector<HTMLElement>('[data-lock]');
if (stage) {
  const frame = stage.querySelector('iframe')!;
  const inspector = stage.querySelector<HTMLElement>('.inspector')!;
  const lang = stage.dataset['lang'] === 'en' ? 'en' : 'fr';
  const props: Record<string, unknown> = JSON.parse(stage.dataset['props'] ?? '{}');
  const narrow = () => innerWidth <= 900;
  // The inspector covers the stage's right, its left fades into the paper: the lock keeps clear of both (its safe area).
  const zone = () => (narrow() ? {} : { left: 40, right: inspector.offsetWidth + 30 });
  let lock: Ecluse | null = null, watcher: IntersectionObserver | null = null, loads = 0;

  // The page nears: load the lock's page; the stage is a third in view: mount it.
  const near = new Promise<void>((resolve) => { const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { io.disconnect(); resolve(); } }, { rootMargin: '600px' }); io.observe(stage); });
  const inView = new Promise<void>((resolve) => { const io = new IntersectionObserver(([e]) => { if ((e?.intersectionRatio ?? 0) > 0.35) { io.disconnect(); resolve(); } }, { threshold: [0, 0.35, 0.6] }); io.observe(stage); });

  function mount(when: Promise<void>) {
    watcher?.disconnect(); lock = null;
    frame.addEventListener('load', async () => {
      await when;
      const w = frame.contentWindow as (Window & { ecluse?: Mount }) | null;
      if (!w) return;
      const start = () => {
        lock = w.ecluse!(w.document.getElementById('root')!, {
          lang, props: { ...props, entrance: reduced ? 'none' : 'watercolor' }, safeArea: zone(), reducedMotion: reduced,
          // Narrow, the lock puts its controls under the scene and asks for its height.
          onHeight: (px) => { frame.style.height = narrow() ? `${Math.ceil(px)}px` : ''; },
        });
        watcher = new IntersectionObserver(([e]) => { if (e?.isIntersecting) lock?.resume(); else lock?.pause(); }, { rootMargin: '80px' });
        watcher.observe(frame);
      };
      if (w.document.body?.dataset['ready']) start(); else w.addEventListener('ecluse-prete', start, { once: true });
    }, { once: true });
    // (a new address each time, so that « Revoir l'apparition » loads the page again)
    frame.src = loads++ ? `/demo/ecluse/?n=${loads}` : '/demo/ecluse/';
  }
  void near.then(() => mount(inView));
  addEventListener('resize', () => lock?.safe(zone()));

  const set = (k: string, v: unknown) => { props[k] = v; lock?.update({ [k]: v }); };
  inspector.querySelectorAll<HTMLElement>('.inspector-row').forEach((row) => {
    const k = row.dataset['k']!;
    row.querySelectorAll<HTMLButtonElement>('button[data-v]').forEach((b) => {
      if (b.dataset['color']) b.style.background = b.dataset['color'];
      b.addEventListener('click', () => {
        row.querySelectorAll('button[data-v]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        set(k, b.dataset['v']);
      });
    });
    row.querySelector('select')?.addEventListener('change', (e) => set(k, (e.target as HTMLSelectElement).value));
    row.querySelector<HTMLInputElement>('input[type="checkbox"]')?.addEventListener('change', (e) => set(k, (e.target as HTMLInputElement).checked));
    const range = row.querySelector<HTMLInputElement>('input[type="range"]');
    if (range) {
      const out = row.querySelector('output')!;
      range.addEventListener('input', () => { out.textContent = (range.dataset['format'] ?? '{n}').replace('{n}', Number(range.value).toLocaleString(range.dataset['lang'])); });
      range.addEventListener('change', () => set(k, Number(range.value)));
    }
  });
  // « Revoir l'apparition »: the lock's page again, with the settings as they are.
  inspector.querySelector('[data-replay]')?.addEventListener('click', () => mount(Promise.resolve()));

  // ── On a phone, the drawer ──
  // The inspector moves into it while it is open, and back into the stage after: one inspector, one set of
  // settings. The page brings the lock up first, so that it shows above the drawer. Its button, a swipe down on its
  // head, Escape or a tap above close it, the way it came; the focus goes back to the button.
  const drawer = document.querySelector<HTMLDialogElement>('#lock-drawer');
  const opener = document.querySelector<HTMLButtonElement>('[data-lock-open]');
  if (drawer && opener) {
    const head = inspector.querySelector<HTMLElement>('.inspector-head')!;
    let closing = false;
    const home = () => { if (inspector.parentElement !== stage) stage.append(inspector); };
    opener.addEventListener('click', () => {
      const bar = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0;
      scrollTo({ top: stage.getBoundingClientRect().top + scrollY - bar - 8, behavior: reduced ? 'auto' : 'smooth' });
      drawer.classList.remove('is-leaving');
      drawer.append(inspector);
      drawer.showModal();
    });
    const close = () => {
      if (!drawer.open || closing) return;
      closing = true;
      drawer.classList.remove('is-dragging');
      drawer.style.translate = '';
      drawer.classList.add('is-leaving');
      // Gone once its own move ends (not its veil's, nor a button's inside), or at the latest after 450 ms.
      const end = (e: TransitionEvent) => { if (e.target === drawer && !e.pseudoElement) done(); };
      const timer = setTimeout(() => done(), 450);
      function done() {
        drawer!.removeEventListener('transitionend', end); clearTimeout(timer);
        closing = false;
        drawer!.close(); drawer!.classList.remove('is-leaving'); home(); opener!.focus();
      }
      drawer.addEventListener('transitionend', end);
    };
    inspector.querySelector('.drawer-close')?.addEventListener('click', close);
    drawer.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
    drawer.addEventListener('click', (e) => { if (e.target === drawer) close(); });
    // The swipe: the drawer follows the finger down; past 80 px or thrown, it closes, else it settles back.
    let drag: { y: number; dy: number; t: number; v: number } | null = null;
    head.addEventListener('pointerdown', (e) => {
      if (!drawer.open || closing || (e.target as Element).closest('button')) return;
      drag = { y: e.clientY, dy: 0, t: e.timeStamp, v: 0 };
      head.setPointerCapture(e.pointerId);
      drawer.classList.add('is-dragging');
    });
    head.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dy = Math.max(0, e.clientY - drag.y), dt = e.timeStamp - drag.t;
      if (dt > 0) drag.v = (dy - drag.dy) / dt;
      drag.dy = dy; drag.t = e.timeStamp;
      drawer.style.translate = `0 ${dy}px`;
    });
    const release = () => {
      if (!drag) return;
      const { dy, v } = drag;
      drag = null;
      drawer.classList.remove('is-dragging');
      if (dy > 80 || v > 0.5) close(); else drawer.style.translate = '';
    };
    head.addEventListener('pointerup', release);
    head.addEventListener('pointercancel', release);
    // Wider again (a window grown, a tablet turned): the inspector goes back beside the lock.
    matchMedia('(max-width: 900px)').addEventListener('change', (m) => {
      if (m.matches || !drawer.open) return;
      drawer.close(); drawer.classList.remove('is-leaving', 'is-dragging'); drawer.style.translate = ''; closing = false; home();
      lock?.safe(zone());
    });
  }
}
