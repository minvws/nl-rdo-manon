import { afterEach, expect, test, vi } from "vitest";
import { getAllByRole, getByRole } from "@testing-library/dom";
import { render } from "../vitest.setup.js";

import { initAccordions } from "../js/accordion.js";

afterEach(() => {
  document.body.classList.remove("js-accordion-loaded");
});

function renderAccordion(markup) {
  const result = render(markup);

  initAccordions();

  return result;
}

function renderHeadingAccordion({ first = "", second = "" } = {}) {
  const result = renderAccordion(`
    <ul class="accordion">
      <li>
        <h3 id="accordion-item-1" ${first}>Onderwerp 1</h3>
        <div aria-labelledby="accordion-item-1"><p>Content 1</p></div>
      </li>
      <li>
        <h3 id="accordion-item-2" ${second}>Onderwerp 2</h3>
        <div aria-labelledby="accordion-item-2"><p>Content 2</p></div>
      </li>
    </ul>`);

  return {
    ...result,
    buttons: getAllByRole(result.container, "button"),
    headings: Array.from(result.container.querySelectorAll("h3")),
  };
}

function renderLegacyAccordion({ first = "" } = {}) {
  const result = renderAccordion(`
    <ul class="accordion">
      <li>
        <button id="accordion-item-1" ${first}>Onderwerp 1</button>
        <div aria-labelledby="accordion-item-1"><p>Content 1</p></div>
      </li>
      <li>
        <button id="accordion-item-2">Onderwerp 2</button>
        <div aria-labelledby="accordion-item-2"><p>Content 2</p></div>
      </li>
    </ul>`);

  return {
    ...result,
    buttons: getAllByRole(result.container, "button"),
  };
}

test("adds a body class on initialization", () => {
  renderHeadingAccordion();

  expect(document.body).toHaveClass("js-accordion-loaded");
});

test("creates a toggle button inside an item heading", () => {
  const { buttons, headings, container } = renderHeadingAccordion();
  const button = buttons[0];
  const heading = headings[0];
  const content = container.querySelector(
    "[aria-labelledby='accordion-item-1']"
  );

  expect(button.parentElement).toBe(heading);
  expect(button).toHaveAttribute("type", "button");
  expect(button).toHaveAccessibleName("Onderwerp 1");
  expect(content.id).toBeTruthy();
  expect(button).toHaveAttribute("aria-controls", content.id);

  // The id stays on the heading, so `aria-labelledby` keeps working without JS.
  expect(heading).toHaveAttribute("id", "accordion-item-1");
  expect(button).not.toHaveAttribute("id");
});

test("uses an existing id on the content <div> for aria-controls", () => {
  const { container } = renderAccordion(`
    <ul class="accordion">
      <li>
        <h3>Onderwerp</h3>
        <div id="accordion-content"><p>Content</p></div>
      </li>
    </ul>`);

  const button = getByRole(container, "button");
  expect(button).toHaveAttribute("aria-controls", "accordion-content");
});

test("expands the first item by default", () => {
  const { buttons } = renderHeadingAccordion();

  expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
  expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
});

test("keeps the first item collapsed when its heading has data-expanded=false", () => {
  const { buttons } = renderHeadingAccordion({
    first: 'data-expanded="false"',
  });

  expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
});

test("expands another item when its heading has data-expanded=true", () => {
  const { buttons } = renderHeadingAccordion({
    second: 'data-expanded="true"',
  });

  expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
});

test("toggles an item when its button is clicked", async () => {
  const { buttons, user } = renderHeadingAccordion();

  await user.click(buttons[1]);
  expect(buttons[1]).toHaveAttribute("aria-expanded", "true");

  await user.click(buttons[1]);
  expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
});

test("toggles the button even when a child element inside it is clicked", async () => {
  const { container, user } = renderAccordion(`
    <ul class="accordion">
      <li>
        <h3>Foo <span>bar</span></h3>
        <div><p>Content</p></div>
      </li>
    </ul>`);

  const button = getByRole(container, "button");
  expect(button).toHaveAttribute("aria-expanded", "true");

  await user.click(button.querySelector("span"));
  expect(button).toHaveAttribute("aria-expanded", "false");
});

test("enhances heading levels other than h3", () => {
  const { container } = renderAccordion(`
    <ul class="accordion">
      <li>
        <h6>Onderwerp</h6>
        <div><p>Content</p></div>
      </li>
    </ul>`);

  const button = getByRole(container, "button");
  expect(button.parentElement.tagName).toBe("H6");
});

test.each([
  [
    "ul",
    `<ul class="accordion">
      <li><h3>Onderwerp</h3><div><p>Content</p></div></li>
    </ul>`,
  ],
  [
    "div",
    `<div class="accordion">
      <div><h3>Onderwerp</h3><div><p>Content</p></div></div>
    </div>`,
  ],
  [
    "section",
    `<section class="accordion">
      <div><h3>Onderwerp</h3><div><p>Content</p></div></div>
    </section>`,
  ],
])("creates a wired toggle button in a %s accordion", (_, markup) => {
  const { container } = renderAccordion(markup);

  const button = getByRole(container, "button");
  expect(button.parentElement.tagName).toBe("H3");
  expect(button).toHaveAttribute("aria-controls");
  expect(button).toHaveAttribute("aria-expanded", "true");
});

test("does not enhance the same heading twice", async () => {
  const { buttons, container, user } = renderHeadingAccordion();

  // Let the MutationObserver react to the enhancement itself, then force
  // another pass.
  await new Promise((resolve) => setTimeout(resolve, 0));
  initAccordions();

  expect(getAllByRole(container, "button")).toHaveLength(2);

  await user.click(buttons[0]);
  expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
});

test("skips a heading without a sibling content <div>", () => {
  const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  const { container } = renderAccordion(`
    <ul class="accordion">
      <li>
        <h3>Zonder content</h3>
      </li>
      <li>
        <h3>Met content</h3>
        <div><p>Content</p></div>
      </li>
    </ul>`);

  expect(errorSpy).toHaveBeenCalledOnce();
  expect(getAllByRole(container, "button")).toHaveLength(1);

  const button = getByRole(container, "button");
  expect(button).toHaveAccessibleName("Met content");
  expect(button).toHaveAttribute("aria-expanded", "true");

  errorSpy.mockRestore();
});

test("keeps supporting legacy markup with a <button> in it", async () => {
  const { buttons, user } = renderLegacyAccordion();
  const content = buttons[0].nextElementSibling;

  expect(buttons[0].parentElement.tagName).toBe("LI");
  expect(content.id).toBeTruthy();
  expect(buttons[0]).toHaveAttribute("aria-controls", content.id);
  expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
  expect(buttons[1]).toHaveAttribute("aria-expanded", "false");

  await user.click(buttons[0]);
  expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
});

test("respects authored aria-expanded on a legacy button", () => {
  const { buttons } = renderLegacyAccordion({ first: 'aria-expanded="false"' });

  expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
});
