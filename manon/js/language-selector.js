import { onDomReady, onDomUpdate } from "./utils.js";

onDomReady(initLanguageSelector);
onDomUpdate(initLanguageSelector);

export function initLanguageSelector() {
  var languageSelectorElements = document.querySelectorAll(
    ".language-selector-options"
  );

  languageSelectorElements.forEach((languageSelectorElement) => {
    languageSelectorElement.addEventListener("click", onClick);
    languageSelectorElement.addEventListener("keydown", onKeyPress);
  });
}

/**
 * Returns the button that expands and collapses the list of languages.
 *
 * @param {Element} el
 * @returns {HTMLButtonElement | null}
 */
function getSelectorButton(el) {
  return el.querySelector(":scope > button");
}

/**
 * @param {HTMLElement} btn
 * @param {boolean} expanded
 */
function setExpanded(btn, expanded) {
  btn.setAttribute("aria-expanded", expanded ? "true" : "false");
}

/**
 * @param {HTMLElement} btn
 * @returns {boolean}
 */
function isExpanded(btn) {
  return btn.getAttribute("aria-expanded") === "true";
}

/**
 * Give focus to the language within the given list item.
 *
 * @param {Element | null} listItem
 */
function focusOption(listItem) {
  const option = listItem?.querySelector("a");
  if (option instanceof HTMLElement) option.focus();
}

/**
 * @param {Event} event
 */
function onClick(event) {
  if (!(event.target instanceof HTMLElement)) return;
  const languageSelectorElement = event.target.closest(
    ".language-selector-options"
  );
  if (!languageSelectorElement) return;

  const selectorButton = getSelectorButton(languageSelectorElement);
  if (!selectorButton) return;

  setExpanded(selectorButton, !isExpanded(selectorButton));
}

/**
 * @param {Event} event
 */
function onKeyPress(event) {
  if (!(event instanceof KeyboardEvent)) return;
  if (!(event.target instanceof HTMLElement)) return;
  const languageSelectorElement = event.target.closest(
    ".language-selector-options"
  );
  if (!languageSelectorElement) return;
  const selectorButton = getSelectorButton(languageSelectorElement);
  if (!selectorButton) return;
  const expanded = isExpanded(selectorButton);
  const listLength = languageSelectorElement.getElementsByTagName("li").length;
  const firstOption =
    languageSelectorElement.querySelector("li:first-of-type a");
  const lastOption = languageSelectorElement.querySelector("li:last-of-type a");
  if (!(firstOption instanceof HTMLElement)) return;

  // If the element that has focus is the selector button, switch the focus to the first or last element of the options list.
  if (selectorButton === document.activeElement) {
    switch (event.code) {
      case "Enter":
        setExpanded(selectorButton, !expanded);
        event.preventDefault();
        break;
      case "Space":
        setExpanded(selectorButton, !expanded);
        event.preventDefault();
        break;
      case "Escape":
        setExpanded(selectorButton, false);
        break;
      case "ArrowUp":
        setExpanded(selectorButton, true);
        languageSelectorElement
          .getElementsByTagName("li")
          [listLength - 1].getElementsByTagName("a")[0]
          .focus();
        event.preventDefault();
        break;
      case "ArrowDown":
        setExpanded(selectorButton, true);
        firstOption.focus();
        event.preventDefault();
        break;
    }
    // Return so the next if-statement isn't reached, to prevent switching the focus twice.
    return;
  }

  // If the element that has focus is a decendent of the language selector element.
  if (languageSelectorElement.contains(document.activeElement)) {
    const focusedOption = document.activeElement;
    if (!(focusedOption instanceof HTMLElement)) return;
    // Go up from the focused element -> <a> to its <li>, so its siblings are the other languages.
    const focusedItem = focusedOption.closest("li");
    if (!focusedItem) return;
    switch (event.code) {
      // If the ESCAPE key is pressed.
      case "Escape":
        // Give focus to the selector button.
        selectorButton.focus();
        // Close the drop down.
        setExpanded(selectorButton, false);
        break;
      case "Space":
      // On SPACE key, select the focused language
        if (focusedOption instanceof HTMLAnchorElement) {
          focusedOption.click();
          event.preventDefault();
        }
        break;
      // If the UP key is pressed.
      case "ArrowUp":
        if (firstOption === document.activeElement) {
          // Stop the script if the focus is on the first element.
          break;
        }
        focusOption(focusedItem.previousElementSibling);
        event.preventDefault();
        break;
      // If the DOWN key is pressed.
      case "ArrowDown":
        if (lastOption === document.activeElement) {
          // Stop the script if the focus is on the last element.
          break;
        }
        focusOption(focusedItem.nextElementSibling);
        event.preventDefault();
        break;
    }
  }
}
