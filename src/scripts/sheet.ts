/* The sheet over the page (components/home/Sheet.astro). open() puts content in it and shows it; what the content
   started (a module in an iframe, a video) is stopped by the `leave` callback when the sheet closes. */
const dialog = document.getElementById('sheet') as HTMLDialogElement | null;
const body = dialog?.querySelector<HTMLElement>('.sheet-body');
const inner = dialog?.querySelector<HTMLElement>('.sheet-in');
let leave: (() => void) | null = null;

if (dialog && body) {
  dialog.querySelector('.sheet-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  // A link to the page (« Télécharger ») closes the sheet first.
  dialog.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a[href^="#"], a[href*="/#"]')) dialog.close(); });
  // The event comes afterwards: a sheet opened again meanwhile keeps its content.
  dialog.addEventListener('close', () => { if (dialog.open) return; leave?.(); leave = null; body.replaceChildren(); });
}

/** Shows `content` in the sheet; `module`: the wide sheet of a sample module. */
export function openSheet(content: Node, o: { module?: boolean; leave?: () => void } = {}): HTMLElement | null {
  if (!dialog || !body || !inner) return null;
  if (dialog.open) { leave?.(); dialog.close(); }
  body.replaceChildren(content);
  inner.classList.toggle('sheet-in--module', !!o.module);
  leave = o.leave ?? null;
  dialog.showModal();
  dialog.scrollTop = 0;
  return body;
}

/** An element with its classes and children, for the sheets' content. */
export function el<K extends keyof HTMLElementTagNameMap>(tag: K, props: Partial<HTMLElementTagNameMap[K]> & { class?: string } = {}, ...children: (Node | string)[]): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  const { class: cls, ...rest } = props;
  if (cls) node.className = cls;
  Object.assign(node, rest);
  node.append(...children);
  return node;
}
