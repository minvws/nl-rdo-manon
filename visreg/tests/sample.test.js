import { test, expect } from "@playwright/test";

const endpoints = [
  "/snippets/accordion/div.html",
  "/snippets/breadcrumb-bar",
  "/snippets/footer",
  "/snippets/sidemenu/page-navigation/collapsible",
];

for (const endpoint of endpoints) {
  // Sanitize the endpoint to create a valid filename for the screenshot
  const sanitizedEndpoint = endpoint.replace(/^\/|\/$/g, "") || "homepage";

  test(`Visual regression for: ${endpoint}`, async ({ page }) => {
    // Go to the specified endpoint, and wait for the page to load
    await page.goto(endpoint);
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot(`${sanitizedEndpoint}.png`, {
      fullPage: true,
      stylePath: "./tests/overrides.css",
    });
  });
}
