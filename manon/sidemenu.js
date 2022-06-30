// @ts-check

import {
  closest,
  ensureElementHasId,
  onDomReady,
  prependNode,
} from "./utils.js";

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
  var main = closest(sidemenu, ".sidemenu");
  var ul = sidemenu.querySelector("ul");

  if (!main || !ul) {
    return;
  }

  ensureElementHasId(ul);

  var openLabel = sidemenu.dataset.openLabel || "Zijbalknavigatie";
  var closeLabel = sidemenu.dataset.closeLabel || "Sluit zijbalknavigatie";
  var iconOpenClasses = (
    sidemenu.dataset.iconOpenClass || "icon icon-hamburger"
  ).split(/\s+/);
  var iconCloseClasses = (
    sidemenu.dataset.iconCloseClass || "icon icon-close"
  ).split(/\s+/);
  var toggleButtonType = sidemenu.dataset.toggleButtonType || "ghost";

  var button = document.createElement("button");
  button.classList.add(toggleButtonType, "sidemenu-toggle");
  button.setAttribute("aria-controls", ul.id);

  function isClosed() {
    return main.classList.contains("sidemenu-closed");
  }

  function setClosed(closed) {
    button.innerText = closed ? closeLabel : openLabel;
    button.classList.remove.apply(
      button.classList,
      closed ? iconCloseClasses : iconOpenClasses
    );
    button.classList.add.apply(
      button.classList,
      closed ? iconOpenClasses : iconCloseClasses
    );
    button.setAttribute("aria-expanded", String(!closed));
    if (closed) {
      main.classList.add("sidemenu-closed");
    } else {
      main.classList.remove("sidemenu-closed");
    }
  }

  setClosed(isClosed());

  button.addEventListener("click", function () {
    setClosed(!isClosed());
  });

  prependNode(sidemenu, button);
}
