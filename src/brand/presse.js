// @ts-nocheck
/* La presse de la marque : risographie simulée en WebGL2 (encres, papier, calage) et le courant d'agents.
   Repris des planches d'identité (elabora-notes/reports/elabora-identite/sources/surimpression, fichiers
   02-presse.js et 03-courant.js, tels quels) ; c'est ici qu'on les modifie désormais. Le site s'en sert pour
   la fin de l'accueil : l'ancre tirée à l'encre, le courant qui passe sur les bords (voir fond() plus bas). */

const TAU = Math.PI * 2, DEG = Math.PI / 180;
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
function mulberry32(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

/* ================= la presse : risographie simulée en WebGL2 ================= */
// Teintes de référence des encres : stencil.wiki, via le paquet riso-colors (MIT).
const INKS = {
  noir: { nom: 'Noir', riso: 'Black', hex: '#000000', show: '#25221F' },
  violet: { nom: 'Violet', riso: 'Violet', hex: '#9D7AD2' },
  rose: { nom: 'Rose fluo', riso: 'Fluorescent Pink', hex: '#FF48B0' },
  aqua: { nom: 'Aqua', riso: 'Aqua', hex: '#5EC8E5' },
  jaune: { nom: 'Jaune', riso: 'Yellow', hex: '#FFE800' },
  tournesol: { nom: 'Tournesol', riso: 'Sunflower', hex: '#FFB511' },
  orange: { nom: 'Orange', riso: 'Orange', hex: '#FF6C2F' },
  bleu: { nom: 'Bleu moyen', riso: 'Medium Blue', hex: '#3255A4' },
  bleuet: { nom: 'Bleuet', riso: 'Cornflower', hex: '#62A8E5' },
  sarcelle: { nom: 'Sarcelle', riso: 'Teal', hex: '#00838A' },
  menthe: { nom: 'Menthe', riso: 'Mint', hex: '#82D8D5' },
  vert: { nom: 'Vert', riso: 'Green', hex: '#00A95C' },
  bonbon: { nom: 'Bonbon', riso: 'Bubble Gum', hex: '#F984CA' },
  blanc: { nom: 'Blanc', riso: 'White', hex: '#FFFFFF' },
};
const inkHex = (k) => k[0] === '#' ? k : (INKS[k].show || INKS[k].hex);
const PAPERS = { creme: '#F3EEE4', blanc: '#F7F5F0', rose: '#F6DDD7', ciel: '#DDE8EA', kraft: '#CFB28C', nuit: '#1F1D27' };

/* une feuille de calque : un canevas dessiné en unités de scène */
function plate(w, h, ls = 1) {
  const c = document.createElement('canvas'); c.width = Math.ceil(w * ls); c.height = Math.ceil(h * ls);
  const g = c.getContext('2d'); g.setTransform(ls, 0, 0, ls, 0, 0); c.ls = ls; c.sw = w; c.sh = h; c.g = g; c._v = 1;
  c.clear = () => { g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, c.width, c.height); g.restore(); c._v++; };
  c.touch = () => { c._v++; };
  return c;
}

const Riso = (() => {
  const MAXL = 10;
  let gl = null, glc = null, prog = null, U = {}, nzTex = null, papTex = null, blank = null, failed = false;
  const cache = new Map();
  const rgb = (h) => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255];
  const VS = `#version 300 es
in vec2 aP; void main(){ gl_Position = vec4(aP, 0., 1.); }`;
  const FS = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 uRes;
uniform float uPx, uFib, uBoil;
uniform vec3 uPaper;
uniform sampler2D uWarp, uKn;
uniform vec2 uWs, uOut;
uniform sampler2D uNz, uPap, uL0, uL1, uL2, uL3, uL4, uL5, uL6, uL7, uL8, uL9;
uniform int uN;
uniform vec3 uMa[10], uMb[10], uInk[10];
uniform vec4 uA[10], uB[10], uC[10], uD[10], uE[10];
uniform vec4 uRol; uniform vec3 uRolInk;
float L(int i, vec2 uv) {
  if (uv.x < 0. || uv.y < 0. || uv.x > 1. || uv.y > 1.) return 0.;
  if (i == 0) return texture(uL0, uv).a;
  if (i == 1) return texture(uL1, uv).a;
  if (i == 2) return texture(uL2, uv).a;
  if (i == 3) return texture(uL3, uv).a;
  if (i == 4) return texture(uL4, uv).a;
  if (i == 5) return texture(uL5, uv).a;
  if (i == 6) return texture(uL6, uv).a;
  if (i == 7) return texture(uL7, uv).a;
  if (i == 8) return texture(uL8, uv).a;
  return texture(uL9, uv).a;
}
void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 q = p / uPx;
  vec4 pa = texture(uPap, q / 512.);
  vec3 col = uPaper * (1. + (pa.r - .5) * uFib);
  col *= 1. - .22 * step(.9965, pa.g) * uFib * 3.;
  for (int i = 0; i < 10; i++) {
    if (i >= uN) break;
    vec4 A = uA[i], B = uB[i], C = uC[i], D = uD[i], E = uE[i];
    float sd = B.x + uBoil * (3.17 + float(i) * 1.13);
    vec2 so = fract(vec2(sd * .1373, sd * .2917));
    // bords : le pochoir et les fibres boivent l'encre de façon irrégulière
    vec2 w = vec2(texture(uNz, q / 384. + so).b, texture(uNz, q / 384. + so.yx + .5).b) - .5;
    vec2 pw = p + w * 2. * C.x * uPx;
    if (D.z > 0.) pw += (texture(uWarp, p / uRes.x * vec2(1., uWs.y)).rg - .5) * D.z * uWs.x;
    vec2 uv = vec2(dot(uMa[i], vec3(pw, 1.)), dot(uMb[i], vec3(pw, 1.)));
    float c = L(i, uv);
    // passage : la feuille sort du tambour de haut en bas
    float edge = D.x + (texture(uNz, vec2(q.x / 900., so.y)).b - .5) * D.y * 2.;
    c *= 1. - smoothstep(edge - D.y, edge + D.y, q.y);
    c = min(1., c * (1. + C.w));
    if (D.w > 0.) c *= 1. - D.w * texture(uKn, p / uOut).a;
    // aplats inégaux : l'encre inonde le pochoir par plaques et par bandes
    float m1 = texture(uNz, q / 2600. + so.yx).b;
    float m2 = texture(uNz, q / 560. + so).b;
    float band = texture(uNz, vec2(so.x, q.y / 1100.)).b;
    float thick = clamp(1. + A.z * ((m1 - .5) * .8 + (band - .5) * C.z * 1.2), .6, 1.3);
    float dens = 1. - A.z * .5 * smoothstep(.62, .98, m2);
    // poussières sur le master : des points blancs
    float du = texture(uNz, q / 1536. + so * 3.1).g;
    dens *= 1. - smoothstep(1. - .004 * C.y, 1. - .002 * C.y, du);
    // encre bien chargée : le cœur des formes se bouche, seuls les bords gardent le grain
    float v = c * dens + E.x * smoothstep(.5, 1., c), dt;
    if (A.w < .5) {
      vec2 gq = q / max(A.y, .25) + so * 512.;
      float t1 = texture(uNz, gq / 512.).r, t2 = texture(uNz, gq / 512. * .41 + .37).a;
      float th = clamp((mix(t1, t2, .3) - .5) * 1.75 + .5, 0., 1.);
      float e = v - th;
      dt = clamp(.5 + e / max(fwidth(e), 1e-3), 0., 1.) * step(.004, v);
    } else if (A.w < 1.5) {
      float cs = B.y, an = B.z;
      vec2 r = mat2(cos(an), sin(an), -sin(an), cos(an)) * (q + w * 2. * C.x) / cs;
      vec2 f = fract(r) - .5;
      float d = length(f);
      float jit = texture(uNz, floor(r) / 512. + so).r;
      float rad = mix(sqrt(v / 3.14159), .72, smoothstep(.7, 1., v)) * (1. + (jit - .5) * .24);
      dt = clamp((rad - d) * cs * uPx / 1.4 + .5, 0., 1.) * step(.01, v);
    } else dt = v;
    float a = dt * A.x * thick;
    if (B.w < .5) col *= pow(max(uInk[i], vec3(.003)), vec3(a));
    else col = mix(col, uInk[i], clamp(a, 0., 1.));
  }
  // traces de rouleau : une ligne rythmée au milieu, vers le haut de la feuille
  if (uRol.y > 0.) {
    float yy = mod(q.y + 7., uRol.z) - uRol.z * .5, xx = q.x - uRol.x;
    float sm = (1. - smoothstep(.55, 1., length(vec2(xx / 15., yy / 2.6)))) * (1. - smoothstep(uRol.w * .55, uRol.w, q.y));
    float th = texture(uNz, q / 1.3 / 512. + .7).r;
    col *= pow(max(uRolInk, vec3(.003)), vec3(step(th, sm * .85) * uRol.y));
  }
  O = vec4(col, 1.);
}`;
  // bruit tuilable : R et G blancs, B fbm égalisé, A bruit de valeur fin égalisé
  function noiseData(S = 512) {
    const rnd = mulberry32(7), d = new Uint8Array(S * S * 4);
    const lattice = (n, r) => { const a = new Float32Array(n * n); for (let i = 0; i < a.length; i++) a[i] = r(); return a; };
    const vnoise = (cells, lat) => (x, y) => {
      const fx = x / S * cells, fy = y / S * cells, i = Math.floor(fx), j = Math.floor(fy), u = fx - i, v = fy - j;
      const s = (t) => t * t * (3 - 2 * t), a = (ii, jj) => lat[((jj % cells + cells) % cells) * cells + ((ii % cells + cells) % cells)];
      const su = s(u), sv = s(v);
      return (a(i, j) * (1 - su) + a(i + 1, j) * su) * (1 - sv) + (a(i, j + 1) * (1 - su) + a(i + 1, j + 1) * su) * sv;
    };
    const oct = [[4, .42], [8, .26], [16, .16], [32, .1], [64, .06]].map(([c, w]) => [vnoise(c, lattice(c, rnd)), w]);
    const fine = vnoise(128, lattice(128, rnd));
    const B = new Float32Array(S * S), A = new Float32Array(S * S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const k = y * S + x; let s = 0; for (const [f, w] of oct) s += f(x, y) * w; B[k] = s; A[k] = fine(x, y);
      d[k * 4] = Math.floor(rnd() * 256); d[k * 4 + 1] = Math.floor(rnd() * 256);
    }
    const eq = (F, ch) => { const idx = Array.from(F.keys()).sort((a, b) => F[a] - F[b]); for (let r = 0; r < idx.length; r++) d[idx[r] * 4 + ch] = Math.floor(r / idx.length * 256); };
    eq(B, 2); eq(A, 3);
    return d;
  }
  // papier : marbrure douce, fibres claires et sombres, quelques points
  function paperCanvas(S = 512) {
    const c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d'), rnd = mulberry32(31);
    g.fillStyle = 'rgb(128,0,0)'; g.fillRect(0, 0, S, S);
    const wrap = (fn) => { for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { g.save(); g.translate(ox, oy); fn(); g.restore(); } };
    for (let i = 0; i < 90; i++) { const x = rnd() * S, y = rnd() * S, r = 20 + rnd() * 70, v = 128 + (rnd() - .5) * 26;
      wrap(() => { const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${v | 0},0,0,.35)`); gr.addColorStop(1, `rgba(${v | 0},0,0,0)`); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); }); }
    g.lineCap = 'round';
    for (let i = 0; i < 2200; i++) {
      const x = rnd() * S, y = rnd() * S, a = rnd() * TAU, L = 3 + rnd() * 13, bend = (rnd() - .5) * 1.2, light = rnd() < .62;
      const v = light ? 160 + rnd() * 50 : 70 + rnd() * 40, w = .35 + rnd() * .7, al = .18 + rnd() * .32;
      wrap(() => { g.strokeStyle = `rgba(${v | 0},0,0,${al})`; g.lineWidth = w; g.beginPath(); g.moveTo(x, y);
        g.quadraticCurveTo(x + Math.cos(a + bend) * L * .5, y + Math.sin(a + bend) * L * .5, x + Math.cos(a) * L, y + Math.sin(a) * L); g.stroke(); });
    }
    const img = g.getImageData(0, 0, S, S), dd = img.data;
    for (let k = 0; k < S * S; k++) dd[k * 4 + 1] = Math.floor(rnd() * 256);
    g.putImageData(img, 0, 0); return c;
  }
  function mkTex(src, repeat) {
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    const w = repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE; gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, w); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, w);
    if (src instanceof Uint8Array) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 512, 512, 0, gl.RGBA, gl.UNSIGNED_BYTE, src);
    else if (src) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
    else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
    return t;
  }
  function init() {
    if (gl || failed) return !failed;
    glc = document.createElement('canvas'); glc.width = 64; glc.height = 64;
    gl = glc.getContext('webgl2', { antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: true, alpha: false });
    if (!gl) { failed = true; return false; }
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    for (const n of ['uRes', 'uPx', 'uFib', 'uBoil', 'uPaper', 'uNz', 'uPap', 'uN', 'uMa', 'uMb', 'uInk', 'uA', 'uB', 'uC', 'uD', 'uE', 'uRol', 'uRolInk', 'uWarp', 'uWs', 'uKn', 'uOut', 'uL0', 'uL1', 'uL2', 'uL3', 'uL4', 'uL5', 'uL6', 'uL7', 'uL8', 'uL9']) U[n] = gl.getUniformLocation(prog, n);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'aP'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    nzTex = mkTex(noiseData(), true); papTex = mkTex(paperCanvas(), true); blank = mkTex(null, false);
    gl.uniform1i(U.uNz, 0); gl.uniform1i(U.uPap, 1); gl.uniform1i(U.uWarp, 12); gl.uniform1i(U.uKn, 13); for (let i = 0; i < MAXL; i++) gl.uniform1i(U['uL' + i], 2 + i);
    return true;
  }
  function texFor(c) {
    let e = cache.get(c);
    if (!e) { e = { t: mkTex(null, false), v: -1 }; cache.set(c, e); }
    if (e.v !== c._v) { gl.bindTexture(gl.TEXTURE_2D, e.t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c); e.v = c._v; }
    return e.t;
  }
  function release(c) { const e = cache.get(c); if (e && gl) { gl.deleteTexture(e.t); cache.delete(c); } }
  const hash = (a, b) => { const r = mulberry32((a * 7919 + b * 104729) | 0); r(); return r() - .5; };
  // sc = { w, h, paper, fib, layers:[{ src, ink, op, grain, flood, mode, cell, angle, blend, wobble, dust, band, gain, solid, fixed, mis:[dx,dy,rot°], off:[ox,oy], seed, reveal }], roller }
  // fixed : le calque ne tremble pas au tirage par tirage (logo, petits textes) ; solid : bouche le cœur des formes
  function render(sc, out, o = {}) {
    const W = out.width, H = out.height;
    if (!init()) return fallback(sc, out);
    if (glc.width < W || glc.height < H) { glc.width = Math.max(glc.width, W); glc.height = Math.max(glc.height, H); }
    gl.viewport(0, glc.height - H, W, H);
    const os = W / sc.w, px = o.px || out._px || W / (out.clientWidth || W), n = Math.min(MAXL, sc.layers.length);
    const Ma = new Float32Array(3 * MAXL), Mb = new Float32Array(3 * MAXL), Ik = new Float32Array(3 * MAXL), A = new Float32Array(4 * MAXL), B = new Float32Array(4 * MAXL), C = new Float32Array(4 * MAXL), D = new Float32Array(4 * MAXL), E = new Float32Array(4 * MAXL);
    const cx = sc.w / 2, cy = sc.h / 2, boil = o.boil || 0, jit = o.jitter == null ? (sc.jitter || 0) : o.jitter;
    for (let i = 0; i < n; i++) {
      const L = sc.layers[i], s = L.src, ls = s.ls || s.width / sc.w, m = L.mis || [0, 0, 0], off = L.off || [0, 0];
      const bo = boil && !L.fixed, jx = bo ? hash(boil, i * 3 + 1) * 2 * jit : 0, jy = bo ? hash(boil, i * 3 + 2) * 2 * jit : 0, jr = bo ? hash(boil, i * 3 + 3) * jit * .12 : 0;
      const r = (m[2] + jr) * DEG, co = Math.cos(r), si = Math.sin(r), dx = m[0] + jx, dy = m[1] + jy, kx = ls / s.width, ky = ls / s.height;
      Ma.set([kx * co / os, -kx * si / os, kx * (-co * cx + si * cy + cx + dx + off[0])], i * 3);
      Mb.set([ky * si / os, ky * co / os, ky * (-si * cx - co * cy + cy + dy + off[1])], i * 3);
      Ik.set(rgb(inkHex(L.ink)), i * 3);
      const mode = L.mode === 'tone' ? 1 : L.mode === 'flat' ? 2 : 0;
      A.set([L.op == null ? .95 : L.op, (L.grain || 1.3) * (sc.grain || 1), L.flood == null ? .35 : L.flood, mode], i * 4);
      B.set([L.seed == null ? i * 1.7 + .3 : L.seed, L.cell || 7, (L.angle == null ? 15 : L.angle) * DEG, L.blend === 'opaque' ? 1 : 0], i * 4);
      C.set([L.wobble == null ? .6 : L.wobble, L.dust == null ? .6 : L.dust, L.band == null ? .4 : L.band, L.gain || 0], i * 4);
      D.set([L.reveal == null ? 1e6 : L.reveal * sc.h * os / px, L.revealSoft || 18, L.warp || 0, L.knock || 0], i * 4);
      E.set([L.solid || 0, 0, 0, 0], i * 4);
      gl.activeTexture(gl.TEXTURE2 + i); gl.bindTexture(gl.TEXTURE_2D, texFor(s));
    }
    for (let i = n; i < MAXL; i++) { gl.activeTexture(gl.TEXTURE2 + i); gl.bindTexture(gl.TEXTURE_2D, blank); }
    gl.activeTexture(gl.TEXTURE12); gl.bindTexture(gl.TEXTURE_2D, sc.warp ? texFor(sc.warp) : blank);
    gl.activeTexture(gl.TEXTURE13); gl.bindTexture(gl.TEXTURE_2D, sc.knock ? texFor(sc.knock) : blank); gl.uniform2f(U.uOut, W, H);
    // la carte de déplacement couvre la scène ; uWs.x : pixels de sortie par unité de déplacement, uWs.y : rapport largeur/hauteur
    gl.uniform2f(U.uWs, os, W / H);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, nzTex); gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, papTex);
    gl.uniform2f(U.uRes, W, glc.height); gl.uniform1f(U.uPx, px); gl.uniform1f(U.uFib, sc.fib == null ? .14 : sc.fib); gl.uniform1f(U.uBoil, boil);
    gl.uniform3fv(U.uPaper, rgb(sc.paper || PAPERS.creme)); gl.uniform1i(U.uN, n);
    gl.uniform3fv(U.uMa, Ma); gl.uniform3fv(U.uMb, Mb); gl.uniform3fv(U.uInk, Ik);
    gl.uniform4fv(U.uA, A); gl.uniform4fv(U.uB, B); gl.uniform4fv(U.uC, C); gl.uniform4fv(U.uD, D); gl.uniform4fv(U.uE, E);
    const ro = sc.roller; gl.uniform4f(U.uRol, ro ? ro.x * os / px : 0, ro ? ro.a : 0, ro ? ro.period || 31 : 31, ro ? (ro.until || .45) * sc.h * os / px : 0);
    gl.uniform3fv(U.uRolInk, rgb(inkHex(ro ? ro.ink : 'noir')));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    const g = out.getContext('2d'); g.drawImage(glc, 0, 0, W, H, 0, 0, W, H);
  }
  function fallback(sc, out) {
    const g = out.getContext('2d'), W = out.width, H = out.height, os = W / sc.w;
    g.globalCompositeOperation = 'source-over'; g.fillStyle = sc.paper || PAPERS.creme; g.fillRect(0, 0, W, H);
    for (const L of sc.layers) {
      const t = document.createElement('canvas'); t.width = W; t.height = H; const tg = t.getContext('2d'), m = L.mis || [0, 0, 0], off = L.off || [0, 0], ls = L.src.ls || L.src.width / sc.w;
      tg.setTransform(os / ls, 0, 0, os / ls, -(m[0] + off[0]) * os, -(m[1] + off[1]) * os); tg.drawImage(L.src, 0, 0);
      tg.setTransform(1, 0, 0, 1, 0, 0); tg.globalCompositeOperation = 'source-in'; tg.fillStyle = inkHex(L.ink); tg.fillRect(0, 0, W, H);
      g.globalCompositeOperation = L.blend === 'opaque' ? 'source-over' : 'multiply'; g.globalAlpha = L.op || .95; g.drawImage(t, 0, 0); g.globalAlpha = 1;
    }
    g.globalCompositeOperation = 'source-over';
  }
  return { render, release, ok: () => init(), canvas: () => glc };
})();

/* une sortie : canevas à la taille de son conteneur, en pixels de l'écran */
function outCanvas(el, w, h, maxPx = 2) {
  const c = el.tagName === 'CANVAS' ? el : el.appendChild(document.createElement('canvas'));
  const cw = c.clientWidth || el.clientWidth || w, px = Math.min(maxPx, window.devicePixelRatio || 1);
  c.width = Math.round(cw * px); c.height = Math.round(cw * px * h / w); c._px = px; return c;
}


/* ================= le courant : mille agents, lents ================= */
// champ sans divergence : une dérive douce plus quelques modes de Fourier qui tournent lentement
function makeField(seed, o = {}) {
  const R = mulberry32(seed), n = o.modes || 7, M = [], lmin = o.lmin || 300, lmax = o.lmax || 950;
  for (let k = 0; k < n; k++) {
    const L = lmin + R() * (lmax - lmin), a = R() * TAU, kk = TAU / L;
    M.push({ kx: Math.cos(a) * kk, ky: Math.sin(a) * kk, ux: Math.sin(a), uy: -Math.cos(a), amp: (o.curl == null ? 7 : o.curl) * (.55 + .9 * R()) / Math.sqrt(n / 3), ph: R() * TAU, w: (R() - .5) * (o.evolve == null ? .07 : o.evolve) });
  }
  const U = o.drift || [11, -2.4];
  const f = (x, y, t, out) => {
    let vx = U[0], vy = U[1];
    for (const m of M) { const c = Math.cos(m.kx * x + m.ky * y + m.ph + m.w * t) * m.amp; vx += c * m.ux; vy += c * m.uy; }
    out[0] = vx; out[1] = vy;
  };
  f.curl = (x, y, t, out, k = 1) => {
    let vx = 0, vy = 0;
    for (const m of M) { const c = Math.cos(m.kx * x + m.ky * y + m.ph + m.w * t) * m.amp * k; vx += c * m.ux; vy += c * m.uy; }
    out[0] = vx; out[1] = vy;
  };
  f.drift = U;
  return f;
}

// l'essaim : historique en anneau pour des traînées longues sans canevas qui s'efface
function makeSwarm(o) {
  const N = o.n, HN = o.hist || 46, R = mulberry32(o.seed || 5), w = o.w, h = o.h, M = o.margin == null ? 60 : o.margin;
  const X = new Float32Array(N), Y = new Float32Array(N), AGE = new Float32Array(N), LIFE = new Float32Array(N), K = new Uint8Array(N), SP = new Float32Array(N);
  const HX = new Float32Array(N * HN), HY = new Float32Array(N * HN), HC = new Uint16Array(N), HP = new Uint16Array(N);
  const v = [0, 0], v2 = [0, 0], life = o.life || [10, 26], dtH = o.dtH || .16;
  let t = 0, acc = 0;
  const dens = o.density || (() => 1);
  const spawnAt = o.spawn || (() => { for (let k = 0; k < 30; k++) { const x = -M + R() * (w + 2 * M), y = -M + R() * (h + 2 * M); if (R() < dens(x, y, t)) return [x, y]; } return [R() * w, R() * h]; });
  function spawn(i, first) {
    const p = spawnAt(i, first, R); X[i] = p[0]; Y[i] = p[1];
    LIFE[i] = life[0] + R() * (life[1] - life[0]); AGE[i] = first ? R() * LIFE[i] : 0; HC[i] = 0; HP[i] = 0;
    SP[i] = .75 + R() * .5;
  }
  for (let i = 0; i < N; i++) { K[i] = R() < (o.heads || .05) ? 1 : 0; spawn(i, true); }
  const kindCount = (k) => { let c = 0; for (let i = 0; i < N; i++) if (K[i] === k) c++; return c; };
  const speedAt = o.slow || (() => 1);
  function step(dt) {
    for (let i = 0; i < N; i++) {
      o.field(X[i], Y[i], t, v); const s = SP[i] * speedAt(X[i], Y[i]);
      o.field(X[i] + v[0] * dt * s * .5, Y[i] + v[1] * dt * s * .5, t, v2);
      X[i] += v2[0] * dt * s; Y[i] += v2[1] * dt * s; AGE[i] += dt;
      if (AGE[i] > LIFE[i] || X[i] < -M - 40 || X[i] > w + M + 40 || Y[i] < -M - 40 || Y[i] > h + M + 40) spawn(i, false);
    }
    t += dt; acc += dt;
    if (acc >= dtH) { acc -= dtH; for (let i = 0; i < N; i++) { const k = i * HN + HP[i]; HX[k] = X[i]; HY[k] = Y[i]; HP[i] = (HP[i] + 1) % HN; if (HC[i] < HN) HC[i]++; } }
  }
  const env = (i) => { const a = AGE[i], L = LIFE[i]; return Math.min(1, a / 2.2, (L - a) / 2.2); };
  // dessin : 8 niveaux d'encre, chacun un seul trait de canevas
  const NB = 8;
  function draw(g, opt = {}) {
    const paths = []; for (let b = 0; b < NB; b++) paths.push(new Path2D());
    const wid = opt.width || 1.5, fade = opt.fade || 1.25, fx = opt.weight || (() => 1), kind = opt.kind, len = Math.round((opt.len || 1) * HN), al = opt.alpha || 1;
    for (let i = 0; i < N; i++) {
      if (kind != null && K[i] !== kind) continue;
      const c = Math.min(HC[i], len); if (c < 2) continue;
      const e = env(i) * fx(X[i], Y[i]) * al; if (e <= .02) continue;
      let px = X[i], py = Y[i];
      for (let j = 0; j < c; j++) {
        const k = i * HN + ((HP[i] - 1 - j + HN * 2) % HN), qx = HX[k], qy = HY[k];
        const f = (j + .5) / len, lvl = e * Math.pow(1 - f, fade), b = Math.min(NB - 1, Math.floor((1 - lvl) * NB));
        if (lvl > .04) { paths[b].moveTo(px, py); paths[b].lineTo(qx, qy); }
        px = qx; py = qy;
      }
    }
    g.lineCap = 'round'; g.strokeStyle = opt.color || '#000';
    for (let b = 0; b < NB; b++) { const l = 1 - (b + .5) / NB; g.globalAlpha = Math.min(1, l * 1.08); g.lineWidth = wid * (.55 + .45 * l); g.stroke(paths[b]); }
    g.globalAlpha = 1;
  }
  function drawHeads(g, opt = {}) {
    const r = opt.r || 2.4, fx = opt.weight || (() => 1); g.fillStyle = opt.color || '#000';
    for (let i = 0; i < N; i++) { if (!K[i]) continue; const e = env(i) * fx(X[i], Y[i]); if (e < .05) continue; g.globalAlpha = Math.min(1, e * 1.2); g.beginPath(); g.arc(X[i], Y[i], r, 0, TAU); g.fill(); }
    g.globalAlpha = 1;
  }
  // l'agent d'un seul tenant : la tête et sa traînée sur le même calque, comme dans « Le grain ».
  function drawAgents(g, opt = {}) {
    const fx = opt.weight || (() => 1), len = Math.max(3, Math.round((opt.len || .6) * HN)), front = opt.front || 1, list = [];
    for (let i = 0; i < N; i++) {
      if (!K[i]) continue;
      const e = env(i) * fx(X[i], Y[i]) * (opt.alpha || 1); if (e <= .04) continue;
      // Born again, an agent has no trace yet: its ring still holds its former life, far away (a body drawn to it
      // crossed the scene in a flash, the « shooting stars »). It shows once it has a point of its own.
      const c = Math.min(HC[i], len); if (!c) continue;
      const n = Math.max(1, Math.round(c * front)), P = [[X[i], Y[i]]];
      for (let j = 0; j < n; j++) { const k = i * HN + ((HP[i] - 1 - j + HN * 2) % HN); P.push([HX[k], HY[k]]); }
      list.push({ P, e });
    }
    fillAgents(g, list, { ...opt, len });
  }
  function warm(sec, dt = 1 / 12) { for (let s = 0; s < sec; s += dt) step(dt); }
  return { step, draw, drawHeads, drawAgents, warm, kindCount, get t() { return t; }, X, Y, K, N };
}

// Des agents d'un seul tenant. Chaque agent : P, ses points de la tête vers la queue ; e, son encre (0 à 1).
// Le corps s'élargit jusqu'à la tête et se défait en poussière vers la queue ; front < 1 ne trace que l'avant (double frappe).
function fillAgents(g, list, opt = {}) {
  const NA = 10, paths = []; for (let b = 0; b < NA; b++) paths.push(new Path2D());
  const r = opt.r || 2.9, len = opt.len || 48, neck = opt.neck == null ? .8 : opt.neck, front = opt.front || 1, fade = opt.fade || 1.15, tip = opt.tip == null ? .35 : opt.tip;
  for (const { P, e } of list) {
    const n = P.length - 1, L = [], R = [], A = [];
    for (let j = 0; j <= n; j++) {
      const a = P[Math.max(0, j - 1)], b = P[Math.min(n, j + 1)]; let tx = a[0] - b[0], ty = a[1] - b[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
      const w = (2 * r * neck * Math.pow(Math.max(0, 1 - j / len), .8) + tip) / 2;
      L.push([P[j][0] - ty * w, P[j][1] + tx * w]); R.push([P[j][0] + ty * w, P[j][1] - tx * w]); A.push(e * Math.pow(Math.max(0, 1 - j / (len * front)), fade));
    }
    for (let j = 0; j < n; j++) {
      const lv = (A[j] + A[j + 1]) / 2; if (lv < .035) continue;
      const Q = paths[Math.min(NA - 1, Math.floor((1 - lv) * NA))];
      Q.moveTo(L[j][0], L[j][1]); Q.lineTo(L[j + 1][0], L[j + 1][1]); Q.lineTo(R[j + 1][0], R[j + 1][1]); Q.lineTo(R[j][0], R[j][1]); Q.closePath();
    }
    const Q = paths[Math.min(NA - 1, Math.floor((1 - e) * NA))]; Q.moveTo(P[0][0] + r, P[0][1]); Q.arc(P[0][0], P[0][1], r, 0, TAU);
  }
  g.fillStyle = opt.color || '#000';
  for (let b = 0; b < NA; b++) { g.globalAlpha = Math.min(1, (1 - (b + .5) / NA) * 1.06); g.fill(paths[b]); }
  g.globalAlpha = 1;
}

// l'agent identifiable de la quatrième passe : tête au compas, corps effilé, queue en pointillé (remplacé par le pas à pas)
// P : points du chemin, du plus ancien au plus récent ; r : rayon de la tête
function cometParts(P, r, o = {}) {
  const n = P.length; if (n < 2) return null;
  const S = [0]; for (let i = 1; i < n; i++) S.push(S[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
  const total = S[n - 1], at = (s) => {
    s = Math.max(0, Math.min(total, s)); let lo = 0, hi = n - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (S[m] < s) lo = m; else hi = m; }
    const f = (s - S[lo]) / (S[hi] - S[lo] || 1); return [P[lo][0] + (P[hi][0] - P[lo][0]) * f, P[lo][1] + (P[hi][1] - P[lo][1]) * f];
  };
  const body = o.body || 9 * r, tail = o.tail || 26 * r, L = [], Rr = [], steps = 36;
  for (let k = 0; k <= steps; k++) {
    const s = total - body * (1 - k / steps); if (s < 0) continue;
    const a = at(s - 1), b = at(s + 1), dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, p = at(s);
    const u = k / steps, wdt = r * .92 * Math.pow(u, .75);
    L.push([p[0] - dy / l * wdt, p[1] + dx / l * wdt]); Rr.push([p[0] + dy / l * wdt, p[1] - dx / l * wdt]);
  }
  const dots = [], gap = o.gap || r * 1.55;
  for (let s = total - body - gap * .6, j = 0; s > total - body - tail && s > 0; s -= gap, j++) {
    const u = 1 - (total - body - s) / tail; dots.push([...at(s), r * (.18 + .3 * u), u]);
  }
  return { head: P[n - 1], ribbon: L.concat(Rr.reverse()), dots };
}
function drawComet(gBody, gHead, P, r, o = {}) {
  const c = cometParts(P, r, o); if (!c) return;
  const a = o.alpha == null ? 1 : o.alpha;
  gBody.globalAlpha = a; gBody.fillStyle = '#000'; gBody.beginPath();
  c.ribbon.forEach((p, i) => i ? gBody.lineTo(p[0], p[1]) : gBody.moveTo(p[0], p[1])); gBody.closePath(); gBody.fill();
  for (const [x, y, rr, u] of c.dots) { gBody.globalAlpha = a * (.25 + .75 * u); gBody.beginPath(); gBody.arc(x, y, rr, 0, TAU); gBody.fill(); }
  gBody.globalAlpha = 1;
  if (gHead) { gHead.globalAlpha = a; gHead.fillStyle = '#000'; gHead.beginPath(); gHead.arc(c.head[0], c.head[1], r, 0, TAU); gHead.fill(); gHead.globalAlpha = 1; }
}


/* ================= ce que le site en fait ================= */
// Un calque d'encre (le réglage des planches) et le tirage « net à peine imprimé » de la cinquième passe.
const lay = (src, ink, x = {}) => ({ src, ink, grain: 1.35, flood: .35, ...x });
const TIRE = { op: .96, flood: .26, wobble: .4, grain: 1.2, solid: .07 };

/** Le courant d'agents, imprimé en continu dans `canvas` (une scène de W × H unités) ; poids(x, y) l'éclaircit.
 *  La scène couvre le canevas (comme object-fit: cover) : on n'imprime que la part qu'il montre, à sa taille exacte
 *  et à la densité de l'écran (devicePixelRatio, au plus o.maxPx, 2 par défaut, et o.maxPixels en tout, pour la
 *  batterie d'un téléphone) ; elle suit la taille du canevas. */
export function courant(canvas, W, H, o = {}) {
  const maxPx = o.maxPx || 2, maxPixels = o.maxPixels || 6e6;
  let pV, pA, pH, sc, view = { w: 0, h: 0 };
  // La part de la scène que montre le canevas : ses calques à la taille de la sortie, la sortie à celle du canevas.
  const size = () => {
    const cw = canvas.clientWidth || W, ch = canvas.clientHeight || H;
    if (cw === view.w && ch === view.h) return;
    const k = Math.max(cw / W, ch / H), ww = cw / k, wh = ch / k;
    const px = Math.min(maxPx, window.devicePixelRatio || 1, Math.sqrt(maxPixels / (cw * ch)));
    for (const p of [pV, pA, pH]) if (p) Riso.release(p);
    [pV, pA, pH] = [0, 1, 2].map(() => { const p = plate(ww, wh, k * px); p.g.translate(-(W - ww) / 2, -(H - wh) / 2); return p; });
    canvas.width = Math.round(cw * px); canvas.height = Math.round(ch * px); canvas._px = px;
    sc = { w: ww, h: wh, paper: o.paper || PAPERS.creme, layers: [lay(pV, 'violet', { mis: [2, -1.5, .05] }), lay(pA, 'violet', { mis: [-1.2, 1.4, -.03], solid: .12 }), lay(pH, 'violet', { mis: [-.7, 1, -.03], solid: .2 })] };
    view = { w: cw, h: ch };
  };
  let resized = true;
  new ResizeObserver(() => { resized = true; }).observe(canvas);
  const field = makeField(o.seed || 4, { drift: o.drift || [12, -2.2], curl: 4.2, lmin: 520, lmax: 1500, modes: 6 });
  const sw = makeSwarm({ n: o.n || 520, w: W, h: H, field, seed: (o.seed || 4) + 5, heads: .14, hist: 80, dtH: .2,
    density: (x, y) => { const u = Math.sin((y + .18 * x) / 150 + 1.3 * Math.sin(x / 520)) * .5 + .5; return .15 + .85 * u * u; } });
  sw.warm(o.warm || 18);
  const weight = o.weight || (() => 1);
  return {
    draw(dt) {
      if (resized) { resized = false; size(); }
      sw.step(dt); pV.clear(); pA.clear(); pH.clear();
      sw.draw(pV.g, { kind: 0, width: 1.1, weight, fade: 1, alpha: .75 });
      sw.drawAgents(pA.g, { r: 3.3, neck: .66, weight, len: .6 }); sw.drawAgents(pH.g, { r: 3.2, neck: .66, weight, len: .6, front: .07, fade: 1 });
      Riso.render(sc, canvas);
    }
  };
}

/** L'ancre tirée une fois à l'encre noire dans `canvas` (w × h), sur un papier blanc : posée en « multiply », seule
 *  l'encre reste sur la page. `ancre` : le tracé d'une des ancres de la marque ({ d, x, y, w, h } de son viewBox). */
export function tireAncre(canvas, w, h, ancre) {
  const out = outCanvas(canvas, w, h, 3), pK = plate(w, h, out._px), g = pK.g;
  const hh = h * .86, s = hh / ancre.h;
  g.save(); g.translate(w / 2 - (ancre.x + ancre.w / 2) * s, h / 2 - (ancre.y + ancre.h / 2) * s); g.scale(s, s);
  g.fillStyle = '#000'; g.fill(new Path2D(ancre.d), 'evenodd'); g.restore();
  Riso.render({ w, h, paper: '#FFFFFF', fib: 0, layers: [lay(pK, 'noir', { ...TIRE })] }, out, { px: out._px });
  Riso.release(pK);
}

export { smooth, PAPERS };
