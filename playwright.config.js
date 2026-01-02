const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [['html'], ['list']],
  use: {
    headless: true,
    video: 'on',
    screenshot: 'on',
    trace: 'on-first-retry'
  }
});
