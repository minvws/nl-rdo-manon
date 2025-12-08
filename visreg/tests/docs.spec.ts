import { test, expect } from '@playwright/test';

const endpoints = [
  '/',
  '/getting-started',
  '/library',
  '/utility',
  '/examples',
];

for (const endpoint of endpoints) {
  // Sanitize the endpoint to create a valid filename for the screenshot
  const sanitizedEndpoint = endpoint.replace(/^\/|\/$/g, '') || 'homepage';

  test(`Visual regression for: ${endpoint}`, async ({ page }) => {
    await page.goto(endpoint);

    // Give the page a second to settle
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot(`${sanitizedEndpoint}.png`, { fullPage: true });
  });
}
