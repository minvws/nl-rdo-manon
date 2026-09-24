// @ts-check

import { ensureElementHasId, onDomReady, onDomUpdate } from "./utils.js";

var initiatedAccordions = new WeakMap();

onDomReady(initAccordions);
onDomUpdate(initAccordions);

export function initAccordions() {
  var accordions = document.querySelectorAll(".accordion");
  for (var i = 0; i < accordions.length; i++) {
    var accordion = accordions[i];
    if (initiatedAccordions.has(accordion)) {
      continue;
    }
    if (!(accordion instanceof HTMLElement)) {
      continue;
    }
    initAccordion(accordion);
    initiatedAccordions.set(accordion, true);
  }
  document.body.classList.add("js-accordion-loaded");
}

/**
 * @param {HTMLElement} accordion
 */
function initAccordion(accordion) {
  var hasExpandedMarkup = false;
  var headings = getItemHeadings(accordion);
  var buttons = [];

  for (var i = 0; i < headings.length; i++) {
    var button = initHeading(headings[i]);
    if (!button) {
      continue;
    }

    // Set up the initial `aria-expanded` state.
    if (button.hasAttribute("aria-expanded")) {
      hasExpandedMarkup = true;
    } else {
      button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", onButtonClick);
    buttons.push(button);
  }

  // Expand the first item by default
  if (!hasExpandedMarkup && buttons.length) {
    buttons[0].setAttribute("aria-expanded", "true");
  }
}

/**
 * Creates the toggle button inside an item heading and
 * moves the heading text into that button
 *
 * @param {Element} heading
 * @returns {Element | null}
 */
function initHeading(heading) {
  if (heading.querySelector("button")) {
    console.error(
      "Accordion heading already contains a <button>, accordion.js generates it:",
      heading
    );
    return null;
  }

  var sibling = heading.nextElementSibling;
  if (!(sibling instanceof HTMLElement) || sibling.tagName !== "DIV") {
    console.error("No sibling <div> found for accordion heading:", heading);
    return null;
  }

  var button = document.createElement("button");
  button.type = "button";
  while (heading.firstChild) {
    button.appendChild(heading.firstChild);
  }
  heading.appendChild(button);

  // Point the button at the content <div>, which needs an id to point at
  ensureElementHasId(sibling);
  button.setAttribute("aria-controls", sibling.id);

  // `aria-expanded` is not allowed on headings, so `data-expanded`
  // used there instead and copied to the button
  if (heading.hasAttribute("data-expanded")) {
    var expanded = heading.getAttribute("data-expanded") === "true";
    button.setAttribute("aria-expanded", expanded ? "true" : "false");
  }

  return button;
}

/**
 * @param {Event} event
 */
function onButtonClick(event) {
  var target = event.currentTarget;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  var expanded = target.getAttribute("aria-expanded") === "true";
  target.setAttribute("aria-expanded", expanded ? "false" : "true");
}

/**
 * Get the <h2>-<h6> item headings. Logs an error for a <button> item header
 *
 * @param {HTMLElement} accordion
 * @returns {Element[]}
 */
function getItemHeadings(accordion) {
  var headings = [];
  for (var i = 0; i < accordion.children.length; i++) {
    var container = accordion.children[i];
    for (var j = 0; j < container.children.length; j++) {
      var child = container.children[j];
      if (/^H[2-6]$/.test(child.tagName)) {
        headings.push(child);
      } else if (child.tagName === "BUTTON") {
        console.error(
          "Accordion items need a heading (h2-h6) instead of a <button>:",
          child
        );
      }
    }
  }
  return headings;
}
