// @ts-check

import { ensureElementHasId, onMediaQueryMatch, onDomReady } from "./utils.js";

onDomReady(initNaviation);

/**
 * Add responsive behaviour to header navigation. Safe to call again to make a
 * newly added header navigation responsive.
 */

/* Locate all collapsable components */
export function initNaviation() {
  var collapsible = document.querySelectorAll(".collapsible");
  for (var i = 0; i < collapsible.length; i++) {
    var collapsibleElement = collapsible[i];

    if (!(collapsible[i] instanceof HTMLElement) || collapsible[i].querySelector(".collapsible-toggle")) {
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
      console.error("missing collapsing element for: ", collapsibleElement);
      return;
  }

  ensureElementHasId(collapsingElement);

  var button = createMenuButton(
    collapsingElement.id,
    collapsibleElement.dataset.openLabel || "Menu",
    collapsibleElement.dataset.closeLabel || "Sluit menu",
    collapsibleElement.dataset.buttonClasses || ""
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
 * @param {string} collapsingElementId
 * @param {string} openLabel
 * @param {string} closeLabel
 * @return {{ element: HTMLButtonElement, setExpanded: (expanded: boolean) => void }}
 */
function createMenuButton(collapsingElementId, openLabel, closeLabel, buttonClasses) {
    var buttonElement = document.getElementById(collapsingElementId).parentElement.querySelector("button.collapsible-toggle");

    console.log(buttonElement)

    if(buttonElement) {
      var button = buttonElement
    } else {
      var button = document.createElement("button");
      button.className = "collapsible-toggle " + buttonClasses;
    }

    button.setAttribute("aria-controls", collapsingElementId);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-haspopup", "menu");

    var label = document.createElement("span");
    label.innerText = openLabel;
    label.className = "visually-hidden";
    ensureElementHasId(label);

    button.appendChild(label);
    button.setAttribute("aria-labelledby", label.id);

  function setExpanded(expanded) {
    if (expanded !== (button.getAttribute("aria-expanded") === "true")) {
      button.setAttribute("aria-expanded", String(expanded));
      if(!buttonElement) {
        label.innerText = expanded ? closeLabel : openLabel;
      }
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
