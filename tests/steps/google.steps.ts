import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I open the Google homepage', async ({ page }) => {
  await page.goto('https://www.google.com');
});

When('I type {string} in the search box', async ({ page }, searchText: string) => {
  await page.locator('textarea[name="q"], input[name="q"]').fill(searchText);
});

When('I press Enter', async ({ page }) => {
  await page.keyboard.press('Enter');
});

Then('I should be redirected to the search results page', async ({ page }) => {
  await expect(page).toHaveURL(/search/);
});
