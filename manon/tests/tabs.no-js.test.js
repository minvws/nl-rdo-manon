import { expect, test } from "vitest";
import { getByRole, getByTestId, getByText } from "@testing-library/dom";
import { render } from "../vitest.setup.js";

// NB: these tests simulate a no-JS scenario by NOT importing tabs.js.

test("renders as plain HTML", () => {
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

  getByRole(container, "link", { name: "Tab A" });
  getByRole(container, "link", { name: "Tab B" });
  getByRole(container, "link", { name: "Tab C" });
  getByText(container, "Panel A content.");
  getByText(container, "Panel B content.");
  getByText(container, "Panel C content.");
});

test("preserves default tab order", async () => {
  const { container, user } = render(`
    <manon-tabs>
      <ul>
        <li><a data-testid="a" href="#panel-a">Tab A</a></li>
        <li><a data-testid="b" href="#panel-b">Tab B</a></li>
        <li><a data-testid="c" href="#panel-c">Tab C</a></li>
      </ul>
      <div id="panel-a">Panel A content.</div>
      <div id="panel-b">Panel B content.</div>
      <div id="panel-c">Panel C content.</div>
    </manon-tabs>`);

  await user.tab();
  expect(getByTestId(container, "a")).toHaveFocus();

  await user.tab();
  expect(getByTestId(container, "b")).toHaveFocus();

  await user.tab();
  expect(getByTestId(container, "c")).toHaveFocus();

  await user.tab();
  expect(document.body).toHaveFocus();
});

test("preserves default link behaviour", async () => {
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

  await user.click(getByRole(container, "link", { name: "Tab A" }));
  expect(window.location.hash).toBe("#panel-a");

  getByRole(container, "link", { name: "Tab B" }).focus();
  await user.keyboard("{Enter}");
  expect(window.location.hash).toBe("#panel-b");
});
