// @ts-check

import { ensureElementHasId, onDomReady } from "./utils.js";

onDomReady(initCollapsible);

export function initCollapsible() {
  document.querySelectorAll(".collapsible").forEach((collapsibleElement) => {
    
    if (!(collapsibleElement instanceof HTMLElement)) return;

    const collapsingElement = collapsibleElement.querySelector(".collapsing-element");
    
    if (!(collapsingElement instanceof HTMLElement)) {
      console.error("Missing collapsing element for: ", collapsibleElement);
      return;
    }
   
    ensureElementHasId(collapsingElement);

    // Create the collapsible button or skip if button already exists
    if (collapsibleElement.querySelector(".collapsible-toggle")) return;

    var toggleButton = createMenuButton(collapsibleElement, collapsingElement);

    collapsingElement.parentNode?.insertBefore(toggleButton, collapsingElement);

    
  });
}

/**
 * @param {HTMLElement} collapsibleElement
 * @param {HTMLElement} collapsingElement
 * @return {HTMLElement} 
 */
function createMenuButton(collapsibleElement, collapsingElement) {

  var openLabel = collapsibleElement.dataset.openLabel || "Dropdown menu";
  var closeLabel = collapsibleElement.dataset.closeLabel || "Sluit dropdown menu";
  var buttonClasses = collapsibleElement.dataset.buttonClasses || "";
  var iconClasses = collapsibleElement.dataset.iconClasses || "";
  
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
    var iconSpan = document.createElement("span");
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






  