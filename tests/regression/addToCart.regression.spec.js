const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@regression Add product to cart', async ({ loginPage, productsPage, cartPage, page }) => {
  await loginPage.goto();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password,
    'regression-login'
  );

  await productsPage.addToCart('regression');
  await productsPage.openCart('regression');
  await cartPage.verifyItem('regression');

  await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');
});
