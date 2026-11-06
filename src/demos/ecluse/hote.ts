/* L'écluse du module d'exemple « canal-locks » (elabora-core, examples/canal-locks/objects/canal-lock), copiée telle quelle
   dans objet/ et montée seule pour l'accueil. Dans un module, le lecteur la fait tourner dans une iframe et lui donne
   un hôte (le temps, le hasard, la zone sûre, ses mots) ; cet hôte-ci en fait le minimum. La page /demo/ecluse/ appelle
   window.ecluse(racine, réglages), et l'accueil, dans la même origine, la pilote par ce qu'elle rend.
   Deux retouches de la copie : la zone sûre de droite (la barre d'outils et la pause restent à gauche de l'inspecteur)
   et sa feuille de style, en fichier (objet.css). */
import { mount } from './objet/object.js';
import { formatMessage } from './message.ts';
import manifest from './objet/object.manifest.json';
import textes from './textes.json';

type Props = Record<string, unknown>;
type Lang = 'fr' | 'en';
interface Api { update(next: Props): void; getState(): unknown; pause?(): void; resume?(): void }
export interface Ecluse {
  update(next: Props): void;
  /** La part du cadre couverte par la page (px depuis chaque bord). */
  safe(area: Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>): void;
  pause(): void;
  resume(): void;
}
export interface Options {
  props?: Props;
  lang?: Lang;
  safeArea?: Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>;
  reducedMotion?: boolean;
  onEvent?: (name: string, payload: Record<string, unknown>) => void;
  /** La hauteur que l'objet demande quand il range ses commandes sous la scène (cadre étroit). */
  onHeight?: (px: number) => void;
}

const properties = (manifest as { props: { properties: Record<string, { default?: unknown }> } }).props.properties;
/** Les jetons du module (son thème) : l'objet en tire ses couleurs, comme dans le lecteur. */
const TOKENS = {
  'font.heading': '"Fraunces", "Iowan Old Style", Georgia, serif',
  'font.body': '"Source Sans 3", "Segoe UI", system-ui, -apple-system, Arial, sans-serif',
  'color.primary': '#35573F', 'color.onPrimary': '#FBF8F1', 'color.accent': '#A4502A', 'color.surface': '#F4EFE3',
  'color.text': '#23302A', 'color.muted': '#56625A', 'color.success': '#2E6B43', 'color.error': '#A13A28', 'color.focus': '#1D5C88', radius: 14,
  'color.paper': '#F4EFE3', 'color.paper-deep': '#E8DFCB', 'color.ink': '#23302A', 'color.sage': '#A5B697', 'color.sage-light': '#D7DFCB',
  'color.moss': '#5C7B48', 'color.water': '#5B93A8', 'color.water-deep': '#2C6378', 'color.water-light': '#C4DBE0', 'color.ochre': '#C3963D', 'color.terracotta': '#A4502A',
};
/** Les réglages par défaut du manifeste, comme le lecteur les donne à l'objet. */
const DEFAUTS: Props = Object.fromEntries(Object.entries(properties).filter(([, v]) => 'default' in v).map(([k, v]) => [k, v.default]));

function random(seed: number) {
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function ecluse(root: HTMLElement, o: Options = {}): Ecluse {
  const lang: Lang = o.lang === 'en' ? 'en' : 'fr';
  const words = textes[lang] as { strings: Record<string, string>; phases: unknown[] };
  type Cb = (...a: never[]) => void;
  const frames = new Set<(dt: number, frame: number) => void>(), safes = new Set<(area: Props) => void>();
  const off = <T extends Cb>(set: Set<T>, cb: T) => { set.add(cb); return () => { set.delete(cb); }; };
  const host = {
    emit: (name: string, payload?: Record<string, unknown>) => o.onEvent?.(name, payload ?? {}),
    random: random(7),
    now: () => performance.now(),
    onFrame: (cb: (dt: number, frame: number) => void) => off(frames, cb),
    asset: () => Promise.reject(new Error('no asset in the demo')),
    registerRenderer() {}, registerCamera() {}, registerObject() {},
    onSafeArea: (cb: (area: Props) => void) => off(safes, cb),
    onContext: () => () => {}, onView: () => () => {},
    get still() { return false; }, onStill: () => () => {},
    requestHeight: (px: number) => o.onHeight?.(px), log() {},
  };
  const t = (key: string, values?: Record<string, unknown>) => (words.strings[key] === undefined ? key : formatMessage(words.strings[key], values, lang));
  const api = mount(root, {
    strings: words.strings, t, props: { ...DEFAUTS, phases: words.phases, ...o.props }, host, seed: 7, locale: lang, reducedMotion: !!o.reducedMotion,
    safeArea: { top: 0, right: 0, bottom: 0, left: 0, ...o.safeArea }, context: null,
    view: { visible: true, ratio: 1, progress: 0.5, entry: 1, exit: 0 }, testMode: false, tokens: TOKENS, objects: [], savedState: null,
  }) as unknown as Api;
  let last = 0, paused = false, raf = 0;
  const loop = (ts: number) => {
    raf = requestAnimationFrame(loop);
    const dt = last ? Math.min(0.1, (ts - last) / 1000) : 1 / 60; last = ts;
    if (document.hidden) return;
    for (const cb of [...frames]) cb(paused ? 0 : dt, 0);
  };
  raf = requestAnimationFrame(loop);
  return {
    update: (next) => api.update(next),
    safe: (area) => { for (const cb of [...safes]) cb({ top: 0, right: 0, bottom: 0, left: 0, ...area }); },
    pause() { paused = true; api.pause?.(); cancelAnimationFrame(raf); raf = 0; },
    resume() { if (raf) return; paused = false; last = 0; api.resume?.(); raf = requestAnimationFrame(loop); },
  };
}
