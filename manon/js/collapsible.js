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

    const toggleButton = createCollapsibleButton(collapsibleElement, collapsingElement);

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
 */
function createCollapsibleButton(collapsibleElement, collapsingElement) {
  const openLabel = collapsibleElement.dataset.openLabel || "Dropdown menu";
  const closeLabel =
    collapsibleElement.dataset.closeLabel || "Sluit dropdown menu";
  const buttonClasses = collapsibleElement.dataset.buttonClasses || "";
  const iconClasses = collapsibleElement.dataset.iconClasses || "";
  const iconPosition = collapsibleElement.dataset.iconPosition || "right"
  const mediaQuery = collapsibleElement.dataset.media || "(min-width: 42rem)";

  // Create button
  const button = document.createElement("button");
  
  // Set button attributes
  button.type = "button";
  button.innerText = openLabel;
  button.className = `collapsible-toggle ${buttonClasses}`;
  button.setAttribute("aria-controls", collapsingElement.id);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-haspopup", "menu");
  button.setAttribute("aria-label", openLabel);

  // Add icon left or right of button text if icon is set.
  if (iconClasses.includes("icon")) {
    const iconSpan = document.createElement("span");
    iconSpan.setAttribute("aria-hidden", "true");
    iconSpan.className = iconClasses;
    iconPosition.includes("left") ? button.prepend(iconSpan) : button.append(iconSpan);
  }

  /**
   * Set the expanded/collapsed state of the button and its collapsible element
   * @param {boolean} expanded - true to expand, false to collapse
  */
  const setExpanded = (expanded) => {
    button.setAttribute("aria-expanded", String(expanded));
    button.setAttribute("aria-label", expanded ? closeLabel : openLabel);
  };

  // Attach click toggle
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setExpanded(!isExpanded);
  });

  // Attach responsive behavior
  if (!collapsibleElement.classList.contains("condensed")) {
    const mql = window.matchMedia(mediaQuery);

  /**
   * Handles media query changes for the collapsible
   * @param {MediaQueryList | MediaQueryListEvent} mq
   */
    const handleMediaChange = (mq) => {
      setExpanded(false); // collapse on media change
      collapsibleElement.classList.toggle("collapsed", !mq.matches);
    };
    
    handleMediaChange(mql); 

    mql.addEventListener("change", handleMediaChange);
  }

  return button;

}
