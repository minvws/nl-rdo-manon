import { expect, test } from "vitest";
import { getByRole } from "@testing-library/dom";
import { render } from "../vitest.setup.js";

import { initExpandoRows } from "../js/expando-rows.js";

/**
 * Render a table with expando rows. Each row is described by its row header
 * @param {Array<string | null>} rowHeaders
 */
function renderTable(rowHeaders) {
  const rows = rowHeaders
    .map(function (rowHeader, i) {
      const firstCell =
        rowHeader === null
          ? "<td>Zonder rijkop</td>"
          : '<th scope="row">' + rowHeader + "</th>";

      return `
        <tr>
          ${firstCell}
          <td>Audit</td>
          <td>
            <button
              class="expando-button"
              data-close-label="Sluit details"
              type="button"
            >
              Open details
            </button>
          </td>
        </tr>
        <tr class="expando-row">
          <td colspan="3">Details van rij ${i + 1}.</td>
        </tr>`;
    })
    .join("");

  const result = render(`
    <table>
      <caption>Rapportage-overzicht:</caption>
      <thead>
        <tr>
          <th scope="col">Naam</th>
          <th scope="col">Type</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`);

  initExpandoRows();

  return result;
}

test("collapses the expando row and points the button at it", () => {
  const { container } = renderTable(["Security overzicht Maart"]);

  const button = getByRole(container, "button");
  const expandoRow = container.querySelector(".expando-row");

  expect(button).toHaveAttribute("aria-expanded", "false");
  expect(expandoRow).toHaveAttribute("hidden");
  expect(expandoRow?.id).toBeTruthy();
  expect(button).toHaveAttribute("aria-controls", expandoRow?.id);
});

test("includes the row header in the button's accessible name", () => {
  const { container } = renderTable(["Security overzicht Maart"]);

  const button = getByRole(container, "button", {
    name: "Open details Security overzicht Maart",
  });

  expect(button).toHaveAttribute("aria-labelledby");
});

test("gives each row's button a distinguishable accessible name", () => {
  const { container } = renderTable([
    "Security overzicht Maart",
    "Toegankelijkheidsrapport",
  ]);

  const firstButton = getByRole(container, "button", {
    name: "Open details Security overzicht Maart",
  });
  const secondButton = getByRole(container, "button", {
    name: "Open details Toegankelijkheidsrapport",
  });

  expect(firstButton).not.toBe(secondButton);
});

test("keeps the row header in the accessible name after expanding", async () => {
  const { container, user } = renderTable(["Security overzicht Maart"]);

  const button = getByRole(container, "button");
  await user.click(button);

  expect(button).toHaveAttribute("aria-expanded", "true");
  expect(container.querySelector(".expando-row")).not.toHaveAttribute("hidden");
  expect(
    getByRole(container, "button", {
      name: "Sluit details Security overzicht Maart",
    })
  ).toBe(button);
});

test("falls back to the label alone when the row has no header cell", () => {
  const { container } = renderTable([null]);

  const button = getByRole(container, "button", { name: "Open details" });

  expect(button).not.toHaveAttribute("aria-labelledby");
});
