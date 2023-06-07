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

    if (!(collapsible[i] instanceof HTMLElement)) {
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
    collapsibleElement,
    collapsingElement.id,
  );

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
 * @param {HTMLElement} collapsibleElement
 * @param {string} collapsingElementId
 * @return {{ setExpanded: (expanded: boolean) => void }}
 */
function createMenuButton(collapsibleElement, collapsingElementId) {
    // Init button variables
    var buttonOpenLabel = collapsibleElement.dataset.buttonOpenLabel;
    var buttonCloseLabel = collapsibleElement.dataset.buttonCloseLabel;
    var openLabel = collapsibleElement.dataset.openLabel || "Menu";
    var closeLabel = collapsibleElement.dataset.closeLabel || "Sluit menu";
    var buttonClasses = collapsibleElement.dataset.buttonClasses || "";

    // Create button HTML element with classes and content
    var button = document.createElement("button");
    button.className = "collapsible-toggle " + buttonClasses;
    button.innerHTML = buttonOpenLabel || openLabel;

    // Configure button aria attributes
    button.setAttribute("aria-controls", collapsingElementId);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-haspopup", "menu");

    // Add <span> for screen readers (thus .visually-hidden)
    var label = document.createElement("span");
    label.innerText = openLabel;
    label.className = "visually-hidden";
    ensureElementHasId(label);

    button.appendChild(label);
    button.setAttribute("aria-labelledby", label.id);

  function setExpanded(expanded) {
    if (expanded !== (button.getAttribute("aria-expanded") === "true")) {
      button.setAttribute("aria-expanded", String(expanded));
      button.innerHTML = expanded ? (buttonCloseLabel || closeLabel) : (buttonOpenLabel || openLabel);
      label.innerText = expanded ? closeLabel : openLabel;
    }
  }

  button.addEventListener("click", function () {
    setExpanded(button.getAttribute("aria-expanded") === "false");
  });

  // Insert button as first child element of "collapsibleElement" (root element)
  collapsibleElement.insertBefore(button, collapsibleElement.firstChild);

  return {
    setExpanded: setExpanded,
  };
}
