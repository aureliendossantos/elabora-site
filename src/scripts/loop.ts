/* One animation loop for the page: a scene advances only while its element is in the window (and the tab shown).
   frame(t, dt): t its own clock, in seconds. Under « reduce motion », frame is called once, still (t = stillAt). */
export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
type Frame = (t: number, dt: number, still: boolean) => void;
interface Scene { el: Element; frame: Frame; t: number; seen: boolean }
const scenes: Scene[] = [];
let last = 0, running = false;

function tick(now: number) {
  const dt = last ? Math.min(0.1, (now - last) / 1000) : 1 / 60;
  last = now;
  if (!document.hidden) for (const s of scenes) if (s.seen) { s.t += dt; s.frame(s.t, dt, false); }
  requestAnimationFrame(tick);
}

export function live(el: Element, frame: Frame, o: { stillAt?: number; margin?: string } = {}): () => void {
  if (reduced) { requestAnimationFrame(() => frame(o.stillAt ?? 8, 1 / 30, true)); return () => {}; }
  const scene: Scene = { el, frame, t: 0, seen: false };
  scenes.push(scene);
  const io = new IntersectionObserver(([e]) => { scene.seen = !!e?.isIntersecting; }, { rootMargin: o.margin ?? '120px' });
  io.observe(el);
  if (!running) { running = true; requestAnimationFrame(tick); }
  return () => { io.disconnect(); scenes.splice(scenes.indexOf(scene), 1); };
}
