/* L'agent pas à pas, le geste de la marque dans l'interface (planches d'identité, cinquième passe).
   Le chemin est un pointillé fixe. La tête de l'agent avance d'un mouvement continu ; chaque point qu'elle touche
   gonfle au contact (un ressort, avec un léger dépassement), puis dégonfle avec le temps. La traînée n'est donc pas
   un dessin attaché à l'agent : ce sont les points du chemin qui se souviennent de son passage. */

export const PAS = { repos: '#D9D0F7', vif: '#8F70DE', tete: '#5A43C9', fait: '#B7A5EE' } as const;
type Couleurs = { repos: string; vif: string; tete: string; fait: string };

const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x));

/** Deux couleurs #RRGGBB mêlées (t de 0 à 1). */
export function mixHex(a: string, b: string, t: number): string {
  const p = (h: string, i: number) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
  const c = [0, 1, 2].map((i) => Math.round(p(a, i) + (p(b, i) - p(a, i)) * t));
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
}

export type Crisp = HTMLCanvasElement & { g: CanvasRenderingContext2D; cw: number; ch: number };
/** Un canevas net sur les écrans denses, dessiné en pixels CSS. */
export function crisp(w: number, h: number): Crisp {
  const c = document.createElement('canvas') as Crisp, px = Math.min(3, Math.max(2, devicePixelRatio || 1));
  c.width = Math.round(w * px); c.height = Math.round(h * px);
  c.style.width = `${w}px`; c.style.height = `${h}px`;
  const g = c.getContext('2d')!; g.setTransform(px, 0, 0, px, 0, 0);
  return Object.assign(c, { g, cw: w, ch: h });
}

interface Options {
  dots: [number, number][];
  /** Où est la tête au temps t : [x, y] et, en option, son opacité. */
  at: (t: number) => [number, number, number?];
  r: number; r0: number; r1: number;
  tau?: number; k?: number; zeta?: number; reach?: number;
  /** Un plancher par point (un travail fait reste un peu gonflé). */
  floor?: (i: number, t: number) => number;
}

export function makeSteps(o: Options) {
  const n = o.dots.length, M = new Float32Array(n), X = new Float32Array(n), V = new Float32Array(n);
  const tau = o.tau ?? 0.7, reach = o.reach ?? (o.r + o.r1) * 1.05, k = o.k ?? 520, c = 2 * (o.zeta ?? 0.42) * Math.sqrt(k);
  let head: [number, number, number?] = o.at(0), alpha = 1, now = 0;
  function step(t: number, dt: number) {
    const h = o.at(t); head = h; alpha = h[2] ?? 1; now = t;
    const sub = Math.max(1, Math.ceil(dt * 240)), d = dt / sub, fade = Math.exp(-dt / tau);
    for (let i = 0; i < n; i++) {
      const p = o.dots[i]!, dist = Math.hypot(p[0] - h[0], p[1] - h[1]);
      const touch = alpha * clamp(1 - (dist - reach * 0.35) / (reach * 0.65));
      M[i] = Math.max(M[i]! * fade, touch * touch * (3 - 2 * touch));
      const target = Math.max(M[i]!, o.floor ? o.floor(i, t) : 0);
      for (let s = 0; s < sub; s++) { V[i]! += (k * (target - X[i]!) - c * V[i]!) * d; X[i]! += V[i]! * d; }
    }
  }
  function draw(g: CanvasRenderingContext2D, colors: Couleurs = PAS) {
    for (let i = 0; i < n; i++) {
      const x = Math.max(0, X[i]!), p = o.dots[i]!, fl = o.floor ? o.floor(i, now) : 0;
      const r = o.r0 + (o.r1 - o.r0) * Math.min(1.25, x);
      g.fillStyle = mixHex(fl > 0 ? colors.fait : colors.repos, colors.vif, fl > 0 ? clamp((x - fl) / (1 - fl)) : clamp(x));
      g.beginPath(); g.arc(p[0], p[1], Math.max(0.2, r), 0, Math.PI * 2); g.fill();
    }
    if (alpha > 0.01) { g.globalAlpha = alpha; g.fillStyle = colors.tete; g.beginPath(); g.arc(head[0], head[1], o.r, 0, Math.PI * 2); g.fill(); g.globalAlpha = 1; }
  }
  return { step, draw };
}

/** Le relais : un pointillé de n segments que l'agent parcourt d'un pas régulier, un segment par étape.
 *  Le segment en cours garde ses points un peu gonflés. Un clic sur un segment appelle pick(i). */
export function relais(host: HTMLElement, n: number, pick?: (i: number) => void) {
  const gap = 9, per = 5, W = (n * per - 1) * gap + 14, c = crisp(W, 18);
  c.setAttribute('aria-hidden', 'true');
  host.appendChild(c);
  const dots: [number, number][] = [];
  for (let i = 0; i < n * per; i++) dots.push([7 + i * gap, 9]);
  let k = 0, u = 0, T = 0;
  const st = makeSteps({ dots, r: 4.2, r0: 1.3, r1: 3, tau: 0.7, at: () => [7 + k * per * gap + clamp(u) * (per - 1) * gap, 9],
    floor: (i) => (Math.floor(i / per) === k ? 0.25 : 0) });
  if (pick) {
    c.style.cursor = 'pointer';
    c.addEventListener('click', (e) => { const r = c.getBoundingClientRect(); pick(clamp(Math.floor((e.clientX - r.left) / (r.width / n)), 0, n - 1)); });
  }
  return {
    /** k : l'étape, u : où en est l'agent dans son segment (0 à 1). */
    draw(kk: number, uu: number, dt: number) { k = kk; u = uu; T += dt; st.step(T, dt); c.g.clearRect(0, 0, c.cw, c.ch); st.draw(c.g); },
  };
}
