import { test, expect } from "@playwright/test";
import endpoints from "./endpoints.js";

for (const endpoint of endpoints) {
  // Sanitize the endpoint to create a valid filename for the screenshot
  const sanitizedEndpoint = endpoint.replace(/^\/|\/$/g, "") || "homepage";

  test(`Visual regression for: ${endpoint}`, async ({ page }) => {
    // Go to the specified endpoint, and wait for all the resources (images,
    // stylesheets, scripts, iframes, and fonts) to load
    await page.goto(endpoint, { waitUntil: "load" });

    await expect(page).toHaveScreenshot(`${sanitizedEndpoint}.png`, {
      fullPage: true,
      stylePath: "./tests/overrides.css",
    });
  });
}
