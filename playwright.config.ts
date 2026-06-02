import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright'],   // ⭐ Allure enabled
  ],

  retries: 0,
  workers: 1,
});
