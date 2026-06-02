import { test, expect, chromium } from '@playwright/test';

test('basic test', async () => {
  const browser = await chromium.launch({ headless: true }); // ✅ run headless
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  await browser.close();
});
