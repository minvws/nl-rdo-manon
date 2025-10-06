import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

(window as any).PointerEvent = MouseEvent;

export function render(markup: string) {
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
