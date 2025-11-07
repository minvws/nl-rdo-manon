// @ts-check

import { ensureElementHasId, onMediaQueryMatch, onDomReady } from "./utils.js";

onDomReady(initCollapsible);

/**
 * Add responsive behaviour to collapsible components. Safe to call again to
 * make a newly added collapsible components.
 */
export function initCollapsible() {
  var collapsibleElements = document.querySelectorAll(".collapsible");
  for (const collapsibleElement of collapsibleElements) {
    if (
      !(collapsibleElement instanceof HTMLElement) ||
      collapsibleElement.querySelector(".collapsible-toggle")
    ) {
      continue;
    }

    var isCondensed = collapsibleElement.className.indexOf("condensed") !== -1;
    makeResponsive(collapsibleElement, isCondensed);
  }
}

/** @deprecated */
export { initCollapsible as initNavigation };

/**
 * @param {HTMLElement} collapsibleElement
 * @param {boolean} isCondensed
 */
function makeResponsive(collapsibleElement, isCondensed) {
  var collapsingElement = collapsibleElement.querySelector(
    ".collapsing-element"
  );

  if (!(collapsingElement instanceof HTMLElement)) {
    console.error("Missing collapsing element for: ", collapsibleElement);
    return;
  }

  ensureElementHasId(collapsingElement);

  var button = createMenuButton(collapsibleElement, collapsingElement);

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
 * @param {HTMLElement} collapsingElement
 * @return {{ setExpanded: (expanded: boolean) => void }}
 */
function createMenuButton(collapsibleElement, collapsingElement) {
  // Init button variables
  var buttonOpenLabel = collapsibleElement.dataset.buttonOpenLabel;
  var buttonCloseLabel = collapsibleElement.dataset.buttonCloseLabel;
  var openLabel = collapsibleElement.dataset.openLabel || "Menu";
  var closeLabel = collapsibleElement.dataset.closeLabel || "Sluit menu";
  var buttonDataClasses = collapsibleElement.dataset.buttonClasses || "";

  // button classes includes icon classes, seperate class list for icon span.
  const iconClasses = buttonDataClasses
    .split(/\s+/)
    .filter((c) => c === "icon" || c.startsWith("icon-"))
    .join(" ");

  const buttonClasses = buttonDataClasses
    .split(/\s+/)
    .filter((c) => c !== "icon" && !c.startsWith("icon-"))
    .join(" ");

  // Create button HTML element with classes and content
  var button = document.createElement("button");
  button.type = "button";
  button.className = "collapsible-toggle " + buttonClasses;

  var buttonTextNode = document.createTextNode(buttonOpenLabel || openLabel);
  button.appendChild(buttonTextNode);

  // Configure button aria attributes
  button.setAttribute("aria-controls", collapsingElement.id);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-haspopup", "menu");

  // Add <span> for screen readers (thus .visually-hidden)
  var label = document.createElement("span");
  label.innerText = openLabel;
  label.className = "visually-hidden";
  ensureElementHasId(label);
  button.appendChild(label);
  button.setAttribute("aria-labelledby", label.id);

  // Add <span> for icon when set
  if (iconClasses) {
    var iconSpan = document.createElement("span");
    iconSpan.className = iconClasses;
    iconSpan.setAttribute("aria-hidden", "true");
    button.appendChild(iconSpan);
  }

  /**
   * @param {boolean} expanded
   */
  function setExpanded(expanded) {
    if (expanded !== (button.getAttribute("aria-expanded") === "true")) {
      button.setAttribute("aria-expanded", String(expanded));
      buttonTextNode.nodeValue = expanded
        ? buttonCloseLabel || closeLabel
        : buttonOpenLabel || openLabel;
      label.innerText = expanded ? closeLabel : openLabel;
    }
  }

  button.addEventListener("click", function () {
    setExpanded(button.getAttribute("aria-expanded") === "false");
  });

  // Insert button as element directly before the "collapsingElement"
  collapsingElement.parentNode?.insertBefore(button, collapsingElement);

  return {
    setExpanded: setExpanded,
  };
}
