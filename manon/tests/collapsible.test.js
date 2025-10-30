import { expect, test, vi, beforeEach } from "vitest";
import { getByRole, getByText } from "@testing-library/dom";
import { render } from "../vitest.setup.js";
import { initCollapsible } from "../src/collapsible.js";
import * as utils from "../src/utils.js";

beforeEach(() => {
  document.body.innerHTML = "";
  vi.restoreAllMocks();
});

test("creates a toggle button for a collapsible element", async () => {
  const { container, user } = render(`
    <div class="collapsible" data-open-label="Open menu" data-close-label="Close menu">
      <div class="collapsing-element">Menu content</div>
    </div>
  `);

  vi.spyOn(utils, "ensureElementHasId").mockImplementation(el => {
    el.id = "mock-id";
  });

  initCollapsible();

  // Expect toggle button to be created
  const button = getByRole(container, "button", { name: "Open menu" });
  expect(button).toHaveAttribute("aria-controls", "mock-id");
  expect(button).toHaveAttribute("aria-expanded", "false");

  // Simulate click to expand
  await user.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");
  expect(button).toHaveAttribute("aria-label", "Close menu");

  // Collapsing element still visible in DOM
  getByText(container, "Menu content");
});

test("skips creating a button if one already exists", () => {
  const { container } = render(`
    <div class="collapsible">
      <button class="collapsible-toggle">Existing</button>
      <div class="collapsing-element" id="x"></div>
    </div>
  `);

  vi.spyOn(utils, "ensureElementHasId").mockImplementation(() => {});
  initCollapsible();

  expect(container.querySelectorAll(".collapsible-toggle").length).toBe(1);
});

test("logs error when .collapsing-element is missing", () => {
  console.error = vi.fn();

  render(`<div class="collapsible"></div>`);
  initCollapsible();

  expect(console.error).toHaveBeenCalled();
});

test("responds to media query changes", () => {
  const { container } = render(`
    <div class="collapsible">
      <div class="collapsing-element"></div>
    </div>
  `);

  vi.spyOn(utils, "ensureElementHasId").mockImplementation(el => {
    el.id = "media-id";
  });

  const mql = {
    matches: true,
    addEventListener: vi.fn(),
  };
  window.matchMedia = vi.fn().mockReturnValue(mql);

  initCollapsible();

  expect(window.matchMedia).toHaveBeenCalled();
  expect(mql.addEventListener).toHaveBeenCalled();
  expect(container.querySelector(".collapsible-toggle")).toBeTruthy();
});
