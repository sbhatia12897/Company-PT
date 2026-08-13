import { Page, test } from '@playwright/test';

export async function loginAsBusiness(page: Page) {
  // Step 1: Open the URL
  await page.goto('https://devweb.crewup.net.au');
  await page.waitForLoadState('networkidle');
  await test.info().attach('1_after_open_url', { body: await page.screenshot({ path: 'report/screenshots/1_after_open_url.png', fullPage: true }), contentType: 'image/png' });

  // Step 2: Click on Login link
  const loginLink = page.getByRole('link', { name: 'Login', exact: true }).first();
  await loginLink.click();
  await page.waitForLoadState('networkidle');
  await test.info().attach('2_after_click_login', { body: await page.screenshot({ path: 'report/screenshots/2_after_click_login.png', fullPage: true }), contentType: 'image/png' });

  // Step 3: Click on "Log in as Business"
  const businessLoginLink = page.getByRole('link', { name: /Log in as Business/i });
  if (await businessLoginLink.count() > 0) {
    await businessLoginLink.first().click();
    await page.waitForLoadState('networkidle');
    await test.info().attach('3_after_click_business_login', { body: await page.screenshot({ path: 'report/screenshots/3_after_click_business_login.png', fullPage: true }), contentType: 'image/png' });
  }

  // Enter credentials
  const emailInput = page.getByRole('textbox', { name: /email or username/i }).or(page.getByPlaceholder(/enter your credentials/i));
  await emailInput.first().fill('messy@yopmail.com');

  const passwordInput = page.getByPlaceholder(/password/i).or(page.locator('input[type="password"]'));
  await passwordInput.first().fill('123456');

  await test.info().attach('4_after_fill_credentials', { body: await page.screenshot({ path: 'report/screenshots/4_after_fill_credentials.png', fullPage: true }), contentType: 'image/png' });

  // Click final submit button
  const submitButton = page.getByRole('button', { name: 'Login to Portal' });
  await submitButton.click();
  
  // As a fallback for some SPA forms, press Enter
  await page.keyboard.press('Enter');
  
  await page.waitForLoadState('networkidle');
  
  // Step 4: Open the dashboard
  // Wait a bit for potential redirects
  await page.waitForTimeout(3000); 
  await test.info().attach('5_after_login_dashboard', { body: await page.screenshot({ path: 'report/screenshots/5_after_login_dashboard.png', fullPage: true }), contentType: 'image/png' });
}
