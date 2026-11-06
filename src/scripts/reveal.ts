/* Each block marked .reveal shows once as it enters the window: a fade and a short rise (components.css).
   The scroll is the browser's own; nothing is pinned or hijacked. With less motion asked, a fade alone. */
const blocks = [...document.querySelectorAll<HTMLElement>('.reveal')];
if (blocks.length && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('reveal-on');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  blocks.forEach((b) => io.observe(b));
}
