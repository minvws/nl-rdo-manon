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
  var headers = getItemHeaders(accordion);
  var buttons = [];

  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    var button =
      header.tagName === "BUTTON" ? initButton(header) : initHeading(header);
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
 * Links a hand-written button to the content it opens. This is the old markup:
 * such a button does nothing until this script runs
 *
 * @param {Element} button
 * @returns {Element | null}
 */
function initButton(button) {
  if (!button.getAttribute("aria-controls")) {
    var sibling = button.nextElementSibling;
    if (!(sibling instanceof HTMLElement) || sibling.tagName !== "DIV") {
      return null;
    }
    ensureElementHasId(sibling);
    button.setAttribute("aria-controls", sibling.id);
  }
  return button;
}

/**
 * Creates the toggle button inside an item heading and
 * moves the heading text into that button
 *
 * @param {Element} heading
 * @returns {Element | null}
 */
function initHeading(heading) {
  // Aleady initialized
  var firstChild = heading.firstElementChild;
  if (firstChild && firstChild.tagName === "BUTTON") {
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
 * Get item headers, which are either <button> (deprecated) or <h2>-<h6> elements
 *
 * @param {HTMLElement} accordion
 * @returns {Element[]}
 */
function getItemHeaders(accordion) {
  var headers = [];
  for (var i = 0; i < accordion.children.length; i++) {
    var container = accordion.children[i];
    for (var j = 0; j < container.children.length; j++) {
      var child = container.children[j];
      if (child.tagName === "BUTTON" || /^H[2-6]$/.test(child.tagName)) {
        headers.push(child);
      }
    }
  }
  return headers;
}
