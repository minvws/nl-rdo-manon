import type { Action } from "svelte/action";

type SidemenuAction = Action<HTMLBodyElement, { closed: boolean } | undefined>;

/**
 * Use this action to add the "sidemenu" class to the current page's `<body>`.
 * Optionally pass `{ closed: true }` to also add the "sidemenu-closed" class.
 * @example <svelte:body use:sidemenuAction />
 * @example <svelte:body use:sidemenuAction={{ closed: true }} />
 */
export const sidemenuAction: SidemenuAction = (node, opts) => {
  node.classList.add("sidemenu");
  if (opts?.closed) node.classList.add("sidemenu-closed");
  return {
    destroy() {
      node.classList.remove("sidemenu", "sidemenu-closed");
    },
  };
};
