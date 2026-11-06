/* The end of the home (components/home/Closing.astro): as it nears, the riso press loads (src/brand/presse.js),
   prints the anchor once, and the brand's current flows along the section's edges, clear in the middle where the
   words are. Still under « reduce motion »; nothing when WebGL2 is missing (the cream page stays). */
import { live, reduced } from './loop.ts';

const section = document.querySelector<HTMLElement>('[data-closing]');
if (section) {
  const current = section.querySelector<HTMLCanvasElement>('canvas.current')!;
  const anchor = section.querySelector<HTMLCanvasElement>('canvas.anchor')!;
  const ancre = JSON.parse(section.dataset['ancre'] ?? '{}');
  const io = new IntersectionObserver(async ([e]) => {
    if (!e?.isIntersecting) return;
    io.disconnect();
    // No WebGL2: the cream page stays, without the anchor and the current.
    if (!document.createElement('canvas').getContext('webgl2')) return;
    const presse = await import('../brand/presse.js');
    presse.tireAncre(anchor, 140, 150, ancre);
    const W = 1600, H = 900;
    // The current fades out toward the middle, where the anchor and the words are.
    const weight = (x: number, y: number) => { const d = Math.hypot((x - 800) / 640, (y - 450) / 330); return 0.04 + 0.96 * presse.smooth(0.72, 1.25, d); };
    let scene: { draw(dt: number): void } | null = null;
    live(section, (_t, dt) => {
      scene ??= presse.courant(current, W, H, { weight, n: 460, seed: 9 });
      scene.draw(dt);
    }, { stillAt: 6 });
  }, { rootMargin: '400px' });
  io.observe(section);
  if (reduced) current.dataset['still'] = '1';
}
