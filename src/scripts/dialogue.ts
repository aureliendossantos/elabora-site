/* The dialogue (components/home/DialogueDemo.astro). On « Écouter la scène », the module built for the web opens in
   the frame: same origin, so the page adds its full-frame stylesheet (public/demo/plein-cadre.css) and goes to the
   dialogue's screen. The click lets its voices play. */
const stage = document.querySelector<HTMLElement>('[data-dialogue]');
const play = stage?.querySelector<HTMLButtonElement>('[data-play]');
if (stage && play) {
  play.addEventListener('click', () => {
    play.disabled = true;
    const frame = document.createElement('iframe');
    frame.title = stage.dataset['title'] ?? '';
    frame.allow = 'autoplay';
    frame.addEventListener('load', async () => {
      const w = frame.contentWindow as (Window & { __elabora?: { go(id: string): void } }) | null;
      if (!w) return;
      const css = w.document.createElement('link');
      css.rel = 'stylesheet'; css.href = '/demo/plein-cadre.css';
      w.document.head.appendChild(css);
      for (let i = 0; i < 60 && !w.__elabora; i++) await new Promise((r) => setTimeout(r, 100));
      w.__elabora?.go('practice');
      setTimeout(() => { stage.classList.add('is-playing'); frame.focus(); }, 500);
    }, { once: true });
    // (the module is in French and English: the player opens in the page's language)
    frame.src = `/demo/phishing/?lang=${stage.dataset['lang'] ?? 'en'}`;
    stage.appendChild(frame);
  });
}
