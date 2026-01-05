const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@functional Adding all available products to the cart and then removing them, verifying that the cart updates correctly', async ({ loginPage, productsPage, cartPage, page }) => {
  await loginPage.goto();

  // login
  await loginPage.login(users.validUser.username, users.validUser.password);

  // addAll
  const expectedCount = await productsPage.addAllProducts('addAll-TC007');

  // OpenCart
  await productsPage.openCart('afterAddAll-TC007');
  
  // Get item
  const allItems = await cartPage.getCartItems();
  
  // Check item
  await expect(allItems.length).toBe(expectedCount);

  // remove all products
  await cartPage.removeAllProducts('afterRemoveAll-TC007');

  // verify cart is empty
  const finalItems = await cartPage.getCartItems();
  await expect(finalItems.length).toBe(0);
});
