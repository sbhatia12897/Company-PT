import { test, expect } from '@playwright/test';

test('Search Cqlsys mohali on Google', async ({ page }) => {
  // 1) Open the url google.com
  await page.goto('https://www.google.com');

  // 2) Search Cqlsys mohali in the search box
  // Locate the search box (usually named 'q') and fill it
  await page.locator('textarea[name="q"], input[name="q"]').fill('Google Office');

  // 3) Press enter
  await page.keyboard.press('Enter');

  // Add a small assertion to make sure navigation occurred, or just wait for results
  await expect(page).toHaveURL(/search/);

  // Give some time to see the result
  await page.waitForTimeout(5000);
});
