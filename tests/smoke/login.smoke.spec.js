const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@smoke Login success', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password,
    'smoke-login'
  );

  await expect(page.locator('.title')).toHaveText('Products');
});
