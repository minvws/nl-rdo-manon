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
 * @param {Event} event
 */
function onClick(event) {
  if (!(event.target instanceof HTMLElement)) return;
  const languageSelectorElement = event.target.closest(
    ".language-selector-options"
  );
  if (!languageSelectorElement) return;

  const expanded =
    languageSelectorElement.getAttribute("aria-expanded") === "true";
  languageSelectorElement.setAttribute(
    "aria-expanded",
    expanded ? "false" : "true"
  );
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
  const expanded =
    languageSelectorElement.getAttribute("aria-expanded") === "true";
  const listLength = languageSelectorElement.getElementsByTagName("li").length;
  const selectorButton =
    languageSelectorElement.getElementsByTagName("button")[0];
  const firstOption =
    languageSelectorElement.querySelector("li:first-of-type a");
  const lastOption = languageSelectorElement.querySelector("li:last-of-type a");
  if (!(firstOption instanceof HTMLElement)) return;

  // If the element that has focus is the selector button, switch the focus to the first or last element of the options list.
  if (selectorButton === document.activeElement) {
    switch (event.code) {
      case "Enter":
        languageSelectorElement.setAttribute(
          "aria-expanded",
          expanded ? "false" : "true"
        );
        event.preventDefault();
        break;
      case "Space":
        languageSelectorElement.setAttribute(
          "aria-expanded",
          expanded ? "false" : "true"
        );
        event.preventDefault();
        break;
      case "Escape":
        languageSelectorElement.setAttribute("aria-expanded", "false");
        break;
      case "ArrowUp":
        languageSelectorElement.setAttribute("aria-expanded", "true");
        languageSelectorElement
          .getElementsByTagName("li")
          [listLength - 1].getElementsByTagName("a")[0]
          .focus();
        event.preventDefault();
        break;
      case "ArrowDown":
        languageSelectorElement.setAttribute("aria-expanded", "true");
        firstOption.focus();
        event.preventDefault();
        break;
    }
    // Return so the next if-statement isn't reached, to prevent switching the focus twice.
    return;
  }

  // If the element that has focus is a decendent of the language selector element.
  if (languageSelectorElement.contains(document.activeElement)) {
    const focusParent = document.activeElement;
    if (!(focusParent instanceof HTMLElement)) return;
    switch (event.code) {
      // If the ESCAPE key is pressed.
      case "Escape":
        // Give focus to the selector button.
        selectorButton.focus();
        // Close the drop down.
        languageSelectorElement.setAttribute("aria-expanded", "false");
        break;
      // If the UP key is pressed.
      case "ArrowUp":
        if (firstOption === document.activeElement) {
          // Stop the script if the focus is on the first element.
          break;
        }
        // Target the currently focused element -> <a>, go up a node -> <li>, select the previous sibling of the previous sibling and the a-node within and focus it.
        focusParent.previousElementSibling
          ?.getElementsByTagName("a")[0]
          .focus();
        event.preventDefault();
        break;
      // If the DOWN key is pressed.
      case "ArrowDown":
        if (lastOption === document.activeElement) {
          // Stop the script if the focus is on the last element.
          break;
        }
        // Target the currently focused element -> <a>, go up a node -> <li>, select the next sibling of the next sibling and the a-node within and focus it.
        focusParent.nextElementSibling?.getElementsByTagName("a")[0].focus();
        event.preventDefault();
        break;
    }
  }
}
