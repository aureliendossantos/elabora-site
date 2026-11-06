/* How it works (components/home/Steps.astro): a tab shows its sentence and its screen. While the section is in view
   the tabs advance by themselves, every 6.5 s; between two tabs, the agent walks the dotted line as the time passes.
   A click (or the arrow keys) and the visitor leads. */
import { crisp, makeSteps } from '../brand/pas.ts';
import { live, reduced } from './loop.ts';

const bar = document.querySelector<HTMLElement>('[data-steps]');
if (bar) {
  const tabs = [...bar.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panel = document.getElementById('step-panel')!;
  const sentence = panel.querySelector<HTMLElement>('.step-sentence')!;
  const shots = [...panel.querySelectorAll<HTMLImageElement>('.app-window > img')];
  const window_ = panel.querySelector<HTMLElement>('.app-window')!;
  const n = tabs.length, LENGTH = 6.5;
  let k = 0, t0 = 0, T = 0, auto = !reduced;

  // The dotted lines between the tabs: 8 points, the agent's head walks them while the tab before is shown.
  const links = tabs.slice(1).map((tab) => {
    const c = crisp(64, 14), dots: [number, number][] = [];
    for (let j = 0; j < 8; j++) dots.push([4 + j * 8, 7]);
    let u = 0, done = false;
    const st = makeSteps({ dots, r: 3.6, r0: 1.2, r1: 2.7, tau: 0.8, at: () => [4 + u * 56, 7, u > 0 && u < 1 ? 1 : 0], floor: () => (done ? 0.3 : 0) });
    c.setAttribute('aria-hidden', 'true');
    tab.before(c);
    return { set(uu: number, dd: boolean) { u = uu; done = dd; }, draw(time: number, dt: number) { st.step(time, dt); c.g.clearRect(0, 0, 64, 14); st.draw(c.g); } };
  });

  function go(i: number, focus = false) {
    k = i; t0 = T;
    tabs.forEach((tab, j) => { tab.setAttribute('aria-selected', String(j === i)); tab.tabIndex = j === i ? 0 : -1; });
    panel.setAttribute('aria-labelledby', tabs[i]!.id);
    if (focus) tabs[i]!.focus();
    shots.forEach((s, j) => s.classList.toggle('is-on', j === i));
    window_.classList.toggle('is-document', shots[i]!.classList.contains('is-document'));
    sentence.style.opacity = '0';
    setTimeout(() => { sentence.textContent = tabs[i]!.dataset['sentence'] ?? ''; sentence.style.opacity = '1'; }, 180);
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => { auto = false; go(i); });
    tab.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); auto = false; go((i + d + n) % n, true); }
    });
  });

  live(bar, (t, dt, still) => {
    T = t;
    const u = auto ? (T - t0) / LENGTH : 0;
    if (auto && u >= 1) go((k + 1) % n);
    links.forEach((l, j) => { l.set(j === k && auto ? Math.min(1, u) : 0, j < k); l.draw(T, still ? 1 : dt); });
  });
}
