import { test, expect } from "@playwright/test";
import endpoints from "./endpoints.js";

for (const endpoint of endpoints) {
  // Sanitize the endpoint to create a valid filename for the screenshot
  const sanitizedEndpoint = endpoint.replace(/^\/|\/$/g, "") || "homepage";

  test(`Visual regression for: ${endpoint}`, async ({ page }) => {
    // Go to the specified endpoint, using network idle to ensure all resources
    // are loaded.
    await page.goto(endpoint, { waitUntil: "networkidle" });

    // If the endpoint is an accordion, wait for the accordion JS to load
    if (endpoint.includes("accordion")) {
      await page.locator("body.js-accordion-loaded").waitFor();
    }

    await expect(page).toHaveScreenshot(`${sanitizedEndpoint}.png`, {
      fullPage: true,
      stylePath: "./tests/overrides.css",
    });
  });
}
