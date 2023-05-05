// @ts-check

import { ensureElementHasId, onMediaQueryMatch, onDomReady } from "./utils.js";

onDomReady(initNaviation);

/**
 * Add responsive behaviour to header navigation. Safe to call again to make a
 * newly added header navigation responsive.
 */
export function initNaviation() {
  var collapsible = document.querySelectorAll(".collapsible");
  for (var i = 0; i < collapsible.length; i++) {
    var collapsibleElement = collapsible[i];

    if (!(collapsible[i] instanceof HTMLElement) || collapsible[i].querySelector(".menu-toggle")) {
      continue;
    }
    var isCondensed = collapsibleElement.className.indexOf("condensed") !== -1;
    makeResponsive(collapsibleElement, isCondensed);
  }
}

/**
 * @param {HTMLElement} collapsibleElement
 * @param {boolean} isCondensed
 */
function makeResponsive(collapsibleElement, isCondensed) {
    var collapsingElement = collapsibleElement.querySelector(".collapsing-element");
    if (!(collapsingElement instanceof HTMLElement)) {
        return;
    }

    ensureElementHasId(collapsibleElement);

    var button = createMenuButton(
        collapsingElement,
        collapsingElement.dataset.openLabel || "Menu",
        collapsingElement.dataset.closeLabel || "Sluit menu"
    );

    collapsingElement.parentNode.insertBefore(button.element, collapsingElement);

  if (!isCondensed) {
    onMediaQueryMatch(
      collapsibleElement.dataset.media || "(min-width: 42rem)",
      function (event) {
        button.setExpanded(false);
        if (event.matches) {
            collapsibleElement.classList.remove("collapsed");
        } else {
            collapsibleElement.classList.add("collapsed");
        }
      }
    );
  }
}

/**
 * @param {HTMLElement} ul
 * @param {string} openLabel
 * @param {string} closeLabel
 * @return {{ element: HTMLButtonElement, setExpanded: (expanded: boolean) => void }}
 */
function createMenuButton(ul, openLabel, closeLabel) {
  var button = document.createElement("button");
  button.className = "menu-toggle";
  button.setAttribute("aria-controls", ul.id);
  button.setAttribute("aria-expanded", "false");

  var label = document.createElement("span");
  label.innerText = openLabel;
  label.className = "sr-only";
  ensureElementHasId(label);

  button.appendChild(label);
  button.setAttribute("aria-labelledby", label.id);

  function setExpanded(expanded) {
    if (expanded !== (button.getAttribute("aria-expanded") === "true")) {
      button.setAttribute("aria-expanded", String(expanded));
      label.innerText = expanded ? closeLabel : openLabel;
    }
  }

  button.addEventListener("click", function () {
    setExpanded(button.getAttribute("aria-expanded") === "false");
  });

  return {
    element: button,
    setExpanded: setExpanded,
  };
}
