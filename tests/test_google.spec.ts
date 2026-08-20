import { test, expect } from '@playwright/test';

test('Search Cqlsys mohali on Google', async ({ page }) => {
  // 1) Open the url google.com
  await page.goto('https://www.google.com');

  // 2) Search Cqlsys mohali in the search box
  // Locate the search box (usually named 'q') and fill it
  await page.locator('textarea[name="q"], input[name="q"]').fill('Cqlsys mohali');

  // 3) Press enter
  await page.keyboard.press('Enter');

  // Add a small assertion to make sure navigation occurred, or just wait for results
  await expect(page).toHaveURL(/search/);

  // 4) Open youtube.com
  await page.goto('https://www.youtube.com');

  // 5) Open gmail.com
  await page.goto('https://www.gmail.com');

});
