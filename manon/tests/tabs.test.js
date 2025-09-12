import { expect, test } from "vitest";
import { getByRole, getByTestId, getByText } from "@testing-library/dom";
import { render } from "../vitest.setup.js";

import "../js/tabs.js";

// This component should follow the WAI ARIA APG's "Tabs Pattern".
// See: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/

test('assigns the "tablist", "tab" and "tabpanel" roles', () => {
  const { container } = render(`
    <manon-tabs>
      <ul data-testid="tablist">
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  expect(getByRole(container, "tablist")).toBe(
    getByTestId(container, "tablist")
  );
  getByRole(container, "tab", { name: "Tab B" });
  getByRole(container, "tab", { name: "Tab B" });
  getByRole(container, "tab", { name: "Tab C" });
  expect(document.getElementById("panel-a")).toHaveRole("tabpanel");
  expect(document.getElementById("panel-b")).toHaveRole("tabpanel");
  expect(document.getElementById("panel-c")).toHaveRole("tabpanel");
});

test("adds ARIA attributes to tabs", () => {
  const { container } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabB = getByRole(container, "tab", { name: "Tab B" });
  const tabC = getByRole(container, "tab", { name: "Tab C" });

  expect(tabA).toHaveAttribute("aria-selected", "true");
  expect(tabB).toHaveAttribute("aria-selected", "false");
  expect(tabC).toHaveAttribute("aria-selected", "false");

  expect(tabA).toHaveAttribute("aria-controls", "panel-a");
  expect(tabB).toHaveAttribute("aria-controls", "panel-b");
  expect(tabC).toHaveAttribute("aria-controls", "panel-c");
});

test("adds ARIA label to tabpanels", () => {
  const { container } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabB = getByRole(container, "tab", { name: "Tab B" });
  const tabC = getByRole(container, "tab", { name: "Tab C" });

  const panelA = document.getElementById("panel-a");
  const panelB = document.getElementById("panel-b");
  const panelC = document.getElementById("panel-c");

  expect(tabA.id).toBeTruthy();
  expect(tabB.id).toBeTruthy();
  expect(tabC.id).toBeTruthy();

  expect(panelA).toHaveAttribute("aria-labelledby", tabA.id);
  expect(panelB).toHaveAttribute("aria-labelledby", tabB.id);
  expect(panelC).toHaveAttribute("aria-labelledby", tabC.id);
});

test("hides all but selected tabpanel", () => {
  const { container } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabB = getByRole(container, "tab", { name: "Tab B" });
  const tabC = getByRole(container, "tab", { name: "Tab C" });
  const panelA = document.getElementById("panel-a");
  const panelB = document.getElementById("panel-b");
  const panelC = document.getElementById("panel-c");

  expect(tabA).toHaveAttribute("aria-selected", "true");
  expect(tabB).toHaveAttribute("aria-selected", "false");
  expect(tabC).toHaveAttribute("aria-selected", "false");
  expect(panelA).toBeVisible();
  expect(panelB).not.toBeVisible();
  expect(panelC).not.toBeVisible();
});

test("handles mouse navigation", async () => {
  const { container, user } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabB = getByRole(container, "tab", { name: "Tab B" });
  const tabC = getByRole(container, "tab", { name: "Tab C" });

  await user.click(tabB);

  expect(tabB).toHaveFocus();
  expect(tabA).toHaveAttribute("aria-selected", "false");
  expect(tabB).toHaveAttribute("aria-selected", "true");
  expect(tabC).toHaveAttribute("aria-selected", "false");

  await user.click(tabC);

  expect(tabC).toHaveFocus();
  expect(tabA).toHaveAttribute("aria-selected", "false");
  expect(tabB).toHaveAttribute("aria-selected", "false");
  expect(tabC).toHaveAttribute("aria-selected", "true");
});

test("handles mouse with inner element", async () => {
  const { container, user } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b"><span data-testid="target">Tab B</span></a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const target = getByTestId(container, "target");
  const tabB = getByRole(container, "tab", { name: "Tab B" });

  await user.click(target);

  expect(tabB).toHaveFocus();
  expect(tabB).toHaveAttribute("aria-selected", "true");
});

test("handles keyboard navigation (arrow keys)", async () => {
  const { container, user } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabB = getByRole(container, "tab", { name: "Tab B" });
  const tabC = getByRole(container, "tab", { name: "Tab C" });

  tabA.focus();

  await user.keyboard("{ArrowRight}");

  expect(tabB).toHaveFocus();
  expect(tabA).toHaveAttribute("aria-selected", "false");
  expect(tabB).toHaveAttribute("aria-selected", "true");
  expect(tabC).toHaveAttribute("aria-selected", "false");

  await user.keyboard("{ArrowRight}");

  expect(tabC).toHaveFocus();
  expect(tabA).toHaveAttribute("aria-selected", "false");
  expect(tabB).toHaveAttribute("aria-selected", "false");
  expect(tabC).toHaveAttribute("aria-selected", "true");

  await user.keyboard("{ArrowLeft}");

  expect(tabB).toHaveFocus();
  expect(tabA).toHaveAttribute("aria-selected", "false");
  expect(tabB).toHaveAttribute("aria-selected", "true");
  expect(tabC).toHaveAttribute("aria-selected", "false");
});

test("handles keyboard navigation (arrow keys, wrap around)", async () => {
  const { container, user } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabC = getByRole(container, "tab", { name: "Tab C" });

  tabA.focus();

  await user.keyboard("{ArrowLeft}");
  expect(tabC).toHaveFocus();

  await user.keyboard("{ArrowRight}");
  expect(tabA).toHaveFocus();
});

test("handles keyboard navigation (home / end)", async () => {
  const { container, user } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabB = getByRole(container, "tab", { name: "Tab B" });
  const tabC = getByRole(container, "tab", { name: "Tab C" });

  tabB.focus();

  await user.keyboard("{End}");
  expect(tabC).toHaveFocus();

  await user.keyboard("{Home}");
  expect(tabA).toHaveFocus();
});

test("correctly manages tab order", async () => {
  const { container, user } = render(`
    <manon-tabs>
      <ul>
        <li><a href="#panel-a">Tab A</a></li>
        <li><a href="#panel-b">Tab B</a></li>
        <li><a href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  const tabA = getByRole(container, "tab", { name: "Tab A" });
  const tabB = getByRole(container, "tab", { name: "Tab B" });
  const panelB = document.getElementById("panel-b");

  await user.tab();
  expect(tabA).toHaveFocus();

  await user.keyboard("{ArrowRight}");
  expect(tabB).toHaveFocus();

  await user.tab();
  expect(panelB).toHaveFocus();

  await user.tab({ shift: true });
  expect(tabB).toHaveFocus();
});
