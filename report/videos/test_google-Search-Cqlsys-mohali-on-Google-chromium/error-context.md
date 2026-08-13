# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_google.spec.ts >> Search Cqlsys mohali on Google
- Location: tests/test_google.spec.ts:3:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Search Cqlsys mohali on Google', async ({ page }) => {
  4  |   // 1) Open the url google.com
  5  |   await page.goto('https://www.google.com');
  6  | 
  7  |   // 2) Search Cqlsys mohali in the search box
  8  |   // Locate the search box (usually named 'q') and fill it
  9  |   await page.locator('textarea[name="q"], input[name="q"]').fill('Cqlsys mohali');
  10 | 
  11 |   // 3) Press enter
  12 |   await page.keyboard.press('Enter');
  13 | 
  14 |   // Add a small assertion to make sure navigation occurred, or just wait for results
  15 |   await expect(page).toHaveURL(/search/);
  16 | 
  17 |   // Give some time to see the result
> 18 |   await page.waitForTimeout(5000);
     |              ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  19 | });
  20 | 
```