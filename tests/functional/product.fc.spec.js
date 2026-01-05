const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@functional Adding all available products to the cart and then removing them, verifying that the cart updates correctly', async ({ loginPage, productsPage, cartPage, page }) => {
  await loginPage.goto();

  // login
  await loginPage.login(users.validUser.username, users.validUser.password,'fucntional-login-TC007');

  // add all products
  await productsPage.addAllProducts('addAll');

  // open cart
  await productsPage.openCart('afterAddAll');

  // verify all added
  const allItems = await cartPage.getCartItems();
  await expect(allItems.length).toBeGreaterThan(0);

  // remove all products
  await cartPage.removeAllProducts('afterRemoveAll');

  // verify cart is empty
  const finalItems = await cartPage.getCartItems();
  await expect(finalItems.length).toBe(0);
});
