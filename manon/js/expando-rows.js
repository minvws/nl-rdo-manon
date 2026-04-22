// @ts-check

import { ensureElementHasId, onDomReady, onDomUpdate } from "./utils.js";

var managedTables = new WeakMap();

onDomReady(initExpandoRows);
onDomUpdate(initExpandoRows);

/**
 * Add a close/open toggle behaviour to expando-rows. Safe to call again to
 * apply to newly added expando-rows.
 */
export function initExpandoRows() {
  var tables = document.querySelectorAll("table");
  for (var i = 0; i < tables.length; i++) {
    var table = tables[i];
    if (!(table instanceof HTMLElement)) {
      continue;
    }
    if (
      !(table instanceof HTMLElement) ||
      !table.querySelector(".expando-button") ||
      managedTables.has(table)
    ) {
      continue;
    }
    initTable(table);
    managedTables.set(table, true);
  }
  document.body.classList.add("js-expando-rows-loaded");
}

/**
 * Start managing the table's expando-buttons, their corresponding
 * expando-rows, and the zebra striping of the other rows.
 * @param {HTMLElement} table
 */
function initTable(table) {
  initExpandoButtons(table);
  updateZebra(table);
  onDomUpdate(function () {
    initExpandoButtons(table);
    updateZebra(table);
  }, table);
}

/**
 * Setup the table's expando-buttons to handle clicks and control their
 * corresponding expando-rows. Safe to call again to apply to newly added
 * expando-buttons.
 * @param {HTMLElement} table
 */
function initExpandoButtons(table) {
  var buttons = table.querySelectorAll(".expando-button");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (
      !(button instanceof HTMLElement) ||
      button.hasAttribute("aria-controls") ||
      button.hasAttribute("disabled")
    ) {
      continue;
    }
    initExpandoButton(button);
  }
}

/**
 * Setup an expando-buttons to handle clicks and control its corresponding
 * expando-row.
 * @param {HTMLElement} button
 */
function initExpandoButton(button) {
  const iconOpenClasses = button.dataset.iconOpenClass?.split(/\s+/) || [];
  const iconCloseClasses = button.dataset.iconCloseClass?.split(/\s+/) || [];

  // Get the expando row corresponding to the expando button, and check if it
  // has the expected structure.
  const buttonRow = button.closest("tr");
  const row = buttonRow?.nextElementSibling;
  const expanded = button.getAttribute("aria-expanded") === "true";

  if (
    !(row instanceof HTMLElement) ||
    !(row.tagName === "TR") ||
    !row.classList.contains("expando-row")
  ) {
    // The expando row is missing or has an unexpected structure. Disable the
    // button and log a warning.
    console.warn(
      "Could not find .expando-row corresponding to .expando-button:",
      button
    );

    button.setAttribute("disabled", "");
    button.classList.add("action-button");

    const disabledLabelSpan = document.createElement("span");
    disabledLabelSpan.classList.add("visually-hidden");
    disabledLabelSpan.textContent = "Details kunnen niet worden geopend";

    const disabledIconSpan = document.createElement("span");
    disabledIconSpan.setAttribute("aria-hidden", "true");
    disabledIconSpan.classList.add.apply(
      disabledIconSpan.classList,
      expanded ? iconCloseClasses : iconOpenClasses
    );

    button.textContent = "";
    button.appendChild(disabledIconSpan);
    button.appendChild(disabledLabelSpan);

    return;
  }

  /** @type {string} */
  let closeLabel;
  /** @type {string} */
  let openLabel;

  // Set the initial state of the expando row and button based on the button's
  // aria-expanded attribute, and store the open/close labels for later use.
  if (expanded) {
    closeLabel = button.textContent.trim();
    openLabel = (button.dataset.openLabel || "Open details").trim();
    button.setAttribute("aria-expanded", "true");
  } else {
    closeLabel = (button.dataset.closeLabel || "Sluit details").trim();
    openLabel = button.textContent.trim();
    button.setAttribute("aria-expanded", "false");
    row.setAttribute("hidden", "");
  }

  ensureElementHasId(row);
  button.setAttribute("aria-controls", row.id);
  button.classList.add("action-button");

  // We're clearing the button's content and add a visually hidden label and an
  // icon span. The label's text content and the icon's classes depend on the
  // initial state of the button. Adding the `labelSpan` ensures screen readers
  // have a clear, text-only description. The `iconSpan` with
  // `aria-hidden="true"` ensures that screen readers ignore the icon, which is
  // purely decorative.
  const labelSpan = document.createElement("span");
  labelSpan.classList.add("visually-hidden");
  labelSpan.textContent = expanded ? closeLabel : openLabel;

  const iconSpan = document.createElement("span");
  iconSpan.setAttribute("aria-hidden", "true");
  iconSpan.classList.add.apply(
    iconSpan.classList,
    expanded ? iconCloseClasses : iconOpenClasses
  );

  button.textContent = "";
  button.appendChild(labelSpan);
  button.appendChild(iconSpan);

  // Handle clicks on the button to toggle the visibility of the expando row,
  // aria-expanded attribute, button label and icon, and the expanded-row class
  // on the button's parent row.
  button.addEventListener("click", function () {
    const expand = button.getAttribute("aria-expanded") === "false";

    if (expand) {
      labelSpan.textContent = closeLabel;

      button.setAttribute("aria-expanded", "true");
      iconSpan.classList.remove.apply(iconSpan.classList, iconOpenClasses);
      iconSpan.classList.add.apply(iconSpan.classList, iconCloseClasses);
      button.parentElement?.parentElement?.classList.add("expanded-row");
      row.removeAttribute("hidden");
    } else {
      labelSpan.textContent = openLabel;

      button.setAttribute("aria-expanded", "false");
      iconSpan.classList.remove.apply(iconSpan.classList, iconCloseClasses);
      iconSpan.classList.add.apply(iconSpan.classList, iconOpenClasses);
      button.parentElement?.parentElement?.classList.remove("expanded-row");
      row.setAttribute("hidden", "");
    }
  });
}

/**
 * Update the rows' .odd/.even override classes.
 * @param {HTMLElement} table
 */
function updateZebra(table) {
  table
    ?.querySelector("tbody")
    ?.querySelectorAll("tr:not(.expando-row)")
    ?.forEach((row, i) => {
      if (i % 2) {
        row.classList.add("even");
        row.classList.remove("odd");
      } else {
        row.classList.add("odd");
        row.classList.remove("even");
      }
    });
}
