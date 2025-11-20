// @ts-check

import { ensureElementHasId, onDomReady, prependNode } from "./utils.js";

onDomReady(initSidemenus);

/**
 * Add a close/open toggle behaviour to the sidemenus. Safe to call again to
 * apply to newly added sidemenus.
 */
export function initSidemenus() {
  var sidemenus = document.querySelectorAll(".sidemenu > nav");
  for (var i = 0; i < sidemenus.length; i++) {
    var sidemenu = sidemenus[i];
    if (!(sidemenu instanceof HTMLElement)) {
      continue;
    }
    if (!sidemenu.querySelector("button.sidemenu-toggle")) {
      addToggleButton(sidemenu);
    }
  }
}

/**
 * @param {HTMLElement} sidemenu
 */
function addToggleButton(sidemenu) {
  const main = sidemenu.closest(".sidemenu");
  if (!(main instanceof HTMLElement)) return;
  const ul = sidemenu.querySelector("ul");
  if (!(ul instanceof HTMLElement)) return;

  ensureElementHasId(ul);

  const openLabel = sidemenu.dataset.openLabel || "Zijbalknavigatie";
  const closeLabel = sidemenu.dataset.closeLabel || "Sluit zijbalknavigatie";
  const toggleButtonType = sidemenu.dataset.toggleButtonType || "secondary";

  const button = document.createElement("button");
  button.type = "button";
  button.classList.add(toggleButtonType, "sidemenu-toggle");
  button.setAttribute("aria-controls", ul.id);

  const isClosed = () => {
    return main.classList.contains("sidemenu-closed");
  };

  /**
   * @param {boolean} closed
   */
  const setClosed = (closed) => {
    button.innerText = closed ? closeLabel : openLabel;
    button.setAttribute("aria-expanded", String(!closed));
    if (closed) {
      main.classList.add("sidemenu-closed");
    } else {
      main.classList.remove("sidemenu-closed");
    }
  };

  setClosed(isClosed());

  button.addEventListener("click", function () {
    setClosed(!isClosed());
  });

  prependNode(sidemenu, button);
}
