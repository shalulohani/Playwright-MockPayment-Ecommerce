import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: true,            // ✅ Required for GitHub Actions (no X server)
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['html', { open: 'never' }]   // ✅ Generates HTML report for CI
  ],

  retries: 0,
  workers: 1,                     // Stable for CI
});
