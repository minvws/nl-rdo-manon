// @ts-check

import { ensureElementHasId, onDomReady } from "./utils.js";

onDomReady(initCollapsible);

/**
 * Finds and initializes all collapsible components on the page.
 *
 * This function scans the DOM for elements with the `.collapsible` class and
 * makes them interactive by creating and injecting a toggle button.
 * It is safe to call this function multiple times, as it will not
 * re-initialize a component that already has a toggle button.
 */
export function initCollapsible() {
  document.querySelectorAll(".collapsible").forEach((collapsibleElement) => {
    if (!(collapsibleElement instanceof HTMLElement)) return;

    const collapsingElement = collapsibleElement.querySelector(
      ".collapsing-element"
    );

    if (!(collapsingElement instanceof HTMLElement)) {
      console.error("Missing collapsing element for: ", collapsibleElement);
      return;
    }

    ensureElementHasId(collapsingElement);

    // Create the collapsible button or skip if button already exists
    if (collapsibleElement.querySelector(".collapsible-toggle")) return;

    const toggleButton = createMenuButton(collapsibleElement, collapsingElement);

    collapsingElement.parentNode?.insertBefore(toggleButton, collapsingElement);
  });
}

/**
* Creates and returns a toggle button for a collapsible component.
* This function builds the button element, sets its ARIA attributes, reads
* data-* attributes from the parent for configuration (e.g., labels, icons),
* and attaches the click event listener for toggling.
*
* @param {HTMLElement} collapsibleElement The root `.collapsible` element, used to read `data-*` attributes.
* @param {HTMLElement} collapsingElement The element that will be shown/hidden, used for the `aria-controls` attribute.
* @returns {HTMLButtonElement} The created button element with all event listeners attached.
 * @param {HTMLElement} collapsibleElement
 * @param {HTMLElement} collapsingElement
 * @return {HTMLElement}
 */
function createMenuButton(collapsibleElement, collapsingElement) {
  const openLabel = collapsibleElement.dataset.openLabel || "Dropdown menu";
  const closeLabel =
    collapsibleElement.dataset.closeLabel || "Sluit dropdown menu";
  const buttonClasses = collapsibleElement.dataset.buttonClasses || "";
  const iconClasses = collapsibleElement.dataset.iconClasses || "";

  // Create button
  const button = document.createElement("button");
  button.type = "button";
  button.className = `collapsible-toggle ${buttonClasses}`;
  button.setAttribute("aria-controls", collapsingElement.id);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-haspopup", "menu");
  button.setAttribute("aria-label", openLabel);

  // Visible button text
  const visibleLabel = document.createElement("span");
  visibleLabel.className = "button-text";
  visibleLabel.innerText = openLabel;
  button.appendChild(visibleLabel);

  // Create span for icons to add to button
  if (iconClasses.includes("icon")) {
    const iconSpan = document.createElement("span");
    iconSpan.setAttribute("aria-hidden", "true");
    iconSpan.className = iconClasses;

    if (iconClasses.includes("left")) {
      button.prepend(iconSpan);
    } else {
      button.append(iconSpan);
    }
  }
  // Toggle button function
  function toggleCollapsingElement() {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const newExpanded = !isExpanded;

    button.setAttribute("aria-expanded", String(newExpanded));
    visibleLabel.innerText = newExpanded ? closeLabel : openLabel;
    button.setAttribute("aria-label", newExpanded ? closeLabel : openLabel);

    collapsibleElement.classList.toggle("collapsed", !newExpanded);
  }

  button.addEventListener("click", toggleCollapsingElement);

  return button;
}
