/**
 * Run the given callback function once after the DOM is ready.
 *
 * @param {() => void} fn
 */
export function onDomReady(fn) {
  if (document.readyState !== "loading") return fn();
  document.addEventListener("DOMContentLoaded", fn);
}

/**
 * Provide the given element with a unique generated `id`, if it does not have one already.
 *
 * @param {HTMLElement} element
 */
export function ensureElementHasId(element) {
  if (!element.id) {
    element.id =
      element.tagName + "-" + (~~(Math.random() * 1e9) + 1e9).toString(16);
  }
}

/**
 * Set up a matchMedia change event listener. Returns a function that, when
 * called, will remove the event listener again.
 *
 * @param {string} media
 * @param {(event: { matches: boolean }) => void} handler
 * @return {() => void}
 */
export function onMediaQueryMatch(media, handler) {
  var mql = window.matchMedia(media);

  mql.addEventListener("change", handler);
  handler(mql);

  return function remove() {
    mql.removeEventListener("change", handler);
  };
}

/**
 * @param {HTMLElement} parent
 * @param {HTMLElement} child
 */
export function prependNode(parent, child) {
  var children = parent.childNodes;
  if (children.length) parent.insertBefore(child, children[0]);
  else parent.appendChild(child);
}

/**
 * Set up a MutationObserver. Returns a disconnect function.
 * @param {() => void} handler
 * @param {HTMLElement | undefined} [root]
 * @return {undefined|(() => void)}
 */
export function onDomUpdate(handler, root) {
  if ("MutationObserver" in window) {
    var observer = new MutationObserver(handler);
    observer.observe(root || document, { childList: true, subtree: true });
    return observer.disconnect.bind(observer);
  }
}
