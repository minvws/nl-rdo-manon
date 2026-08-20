import { expect, test } from "vitest";
import { getByRole } from "@testing-library/dom";
import { render } from "../vitest.setup.js";

import { initLanguageSelector } from "../js/language-selector.js";

function renderLanguageSelector() {
  const result = render(`
    <div class="language-selector">
      <p id="language-selector-description">Kies een taal:</p>
      <div class="language-selector-options">
        <button
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls="language-selector-list"
          aria-describedby="language-selector-description"
        >
          Papiamentu
        </button>
        <ul id="language-selector-list" role="listbox">
          <li role="option" aria-selected="false">
            <a hreflang="nl" href="#" lang="nl">Nederlands</a>
          </li>
          <li role="option" aria-selected="false">
            <a hreflang="en" href="#" lang="en">English</a>
          </li>
          <li role="option" aria-selected="true" aria-current="true">
            <a hreflang="pap-CW" href="#" lang="pap-CW">Papiamentu</a>
          </li>
        </ul>
      </div>
    </div>`);

  initLanguageSelector();

  return {
    ...result,
    button: getByRole(result.container, "button"),
    wrapper: result.container.querySelector(".language-selector-options"),
    languages: /** @type {HTMLAnchorElement[]} */ (
      Array.from(result.container.querySelectorAll("li a"))
    ),
  };
}

test("adds a body class on initialization", () => {
  renderLanguageSelector();

  expect(document.body).toHaveClass("js-language-selector-loaded");
});

test("reports the collapsed state on the button, not on the wrapper", () => {
  const { button, wrapper } = renderLanguageSelector();

  expect(button).toHaveAttribute("aria-expanded", "false");
  expect(button).toHaveAttribute("aria-controls", "language-selector-list");
  expect(wrapper).not.toHaveAttribute("aria-expanded");
});

test("toggles the list when the button is clicked", async () => {
  const { button, user } = renderLanguageSelector();

  await user.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");

  await user.click(button);
  expect(button).toHaveAttribute("aria-expanded", "false");
});

test.each([["{Enter}"], ["{ }"]])(
  "toggles the list when %s is pressed on the button",
  async (key) => {
    const { button, user } = renderLanguageSelector();

    button.focus();
    await user.keyboard(key);
    expect(button).toHaveAttribute("aria-expanded", "true");

    await user.keyboard(key);
    expect(button).toHaveAttribute("aria-expanded", "false");
  }
);

test("adds aria-expanded to a button without it on initialization", async () => {
  const { container, user } = render(`
    <div class="language-selector">
      <div class="language-selector-options">
        <button aria-haspopup="listbox">Papiamentu</button>
        <ul role="listbox">
          <li role="option"><a hreflang="nl" href="#" lang="nl">Nederlands</a></li>
        </ul>
      </div>
    </div>`);

  initLanguageSelector();

  const button = getByRole(container, "button");
  expect(button).toHaveAttribute("aria-expanded", "false");

  await user.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");
});

test("opens downwards to the first language and stops at the top", async () => {
  const { button, languages, user } = renderLanguageSelector();
  const [dutch, english] = languages;

  button.focus();
  await user.keyboard("{ArrowDown}");
  expect(button).toHaveAttribute("aria-expanded", "true");
  expect(dutch).toHaveFocus();

  await user.keyboard("{ArrowDown}");
  expect(english).toHaveFocus();

  await user.keyboard("{ArrowUp}");
  expect(dutch).toHaveFocus();

  // Top of the list, so focus stays put
  await user.keyboard("{ArrowUp}");
  expect(dutch).toHaveFocus();
});

test("opens upwards to the last language and stops at the bottom", async () => {
  const { button, languages, user } = renderLanguageSelector();
  const papiamentu = languages[languages.length - 1];

  button.focus();
  await user.keyboard("{ArrowUp}");
  expect(button).toHaveAttribute("aria-expanded", "true");
  expect(papiamentu).toHaveFocus();

  await user.keyboard("{ArrowDown}");
  expect(papiamentu).toHaveFocus();
});

test("selects the focused language when Space is pressed", async () => {
  const { languages, user } = renderLanguageSelector();
  const [dutch] = languages;
  let followed = 0;
  dutch.addEventListener("click", (event) => {
    followed++;
    event.preventDefault();
  });

  dutch.focus();
  await user.keyboard("{ }");

  expect(followed).toBe(1);
});

test("collapses and returns focus to the button when Escape is pressed", async () => {
  const { button, languages, user } = renderLanguageSelector();

  languages[0].focus();
  await user.keyboard("{Escape}");

  expect(button).toHaveAttribute("aria-expanded", "false");
  expect(button).toHaveFocus();
});

test("collapses the list when focus moves out of the language selector", async () => {
  const { button, user } = renderLanguageSelector();

  button.focus();
  await user.keyboard("{ArrowUp}");
  expect(button).toHaveAttribute("aria-expanded", "true");

  // Tab from the last language to outside the language selector.
  await user.tab();

  expect(button).toHaveAttribute("aria-expanded", "false");
});

test("collapses the list when clicking outside the language selector", async () => {
  const { button, user } = renderLanguageSelector();

  await user.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");

  await user.click(document.body);

  expect(button).toHaveAttribute("aria-expanded", "false");
});

test("moves aria-selected and the button label to a language selected without a page load", async () => {
  const { button, languages, user } = renderLanguageSelector();
  const [dutch] = languages;
  const papiamentu = languages[languages.length - 1];

  dutch.addEventListener("click", (event) => event.preventDefault());

  await user.click(button);
  await user.click(dutch);

  expect(dutch.closest("li")).toHaveAttribute("aria-selected", "true");
  expect(dutch.closest("li")).toHaveAttribute("aria-current", "true");
  expect(papiamentu.closest("li")).toHaveAttribute("aria-selected", "false");
  expect(papiamentu.closest("li")).toHaveAttribute("aria-current", "false");
  expect(button).toHaveTextContent("Nederlands");
  expect(button).toHaveAttribute("aria-expanded", "false");
});

test("collapses on Escape even when focus is outside the language selector", async () => {
  const { button, user } = renderLanguageSelector();
  button.setAttribute("aria-expanded", "true");

  await user.keyboard("{Escape}");

  expect(button).toHaveAttribute("aria-expanded", "false");
});
