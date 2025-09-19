// @ts-check

import { ensureElementHasId, onDomReady, onDomUpdate } from "./utils.js";

var initiatedFilterToggles = new WeakMap();

onDomReady(initFilterToggles);
onDomUpdate(initFilterToggles);

/**
 * Add a close/open toggle behaviour to the filters. Safe to call again to
 * apply to newly added filters.
 */
export function initFilterToggles() {
  var filterToggles = document.querySelectorAll(".filter > div > button");
  for (var i = 0; i < filterToggles.length; i++) {
    var filterToggle = filterToggles[i];
    if (
      initiatedFilterToggles.has(filterToggle) ||
      !(filterToggle instanceof HTMLElement)
    ) {
      continue;
    }
    initFilterToggle(filterToggle);
    initiatedFilterToggles.set(filterToggle, true);
  }
  document.body.classList.add("js-filters-loaded");
}

/**
 * @param {HTMLElement} filterToggle
 */
function initFilterToggle(filterToggle) {
  const filter = filterToggle.parentNode?.parentNode;
  if (!(filter instanceof HTMLElement)) {
    return;
  }
  const form = filter.querySelector("form");
  if (!(form instanceof HTMLElement)) {
    console.error(
      "Could not find <form> corresponding to filter toggle:",
      filterToggle
    );
    return;
  }
  const expanded = filterToggle.getAttribute("aria-expanded") !== "false";
  /** @type {string} */
  let hideLabel;
  /** @type {string} */
  let showLabel;
  if (expanded) {
    hideLabel = filterToggle.innerText;
    showLabel = filterToggle.dataset.showFiltersLabel || "Toon filters";
  } else {
    hideLabel = filterToggle.dataset.hideFiltersLabel || "Verberg filters";
    showLabel = filterToggle.innerText;
  }
  ensureElementHasId(form);
  filterToggle.setAttribute("aria-controls", form.id);
  if (expanded) {
    filterToggle.setAttribute("aria-expanded", "true");
  } else {
    form.setAttribute("hidden", "");
  }
  filterToggle.addEventListener("click", function () {
    var expand = filterToggle.getAttribute("aria-expanded") == "false";
    filterToggle.setAttribute("aria-expanded", expand ? "true" : "false");
    filterToggle.innerHTML = expand ? hideLabel : showLabel;
    if (expand) {
      form.removeAttribute("hidden");
    } else {
      form.setAttribute("hidden", "");
    }
  });
}
