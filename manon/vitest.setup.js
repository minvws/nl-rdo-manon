import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

/**
 * @import {UserEvent} from "@testing-library/user-event"
 */

/**
 * @param {String} markup
 * @return {{ container: HTMLElement, user: UserEvent }}
 */
export function render(markup) {
  const user = userEvent.setup();
  const container = document.createElement("test-container");
  container.innerHTML = markup;
  document.body.append(container);
  return { container, user };
}

afterEach(() => {
  for (const container of document.querySelectorAll("test-container")) {
    container.remove();
  }
});
