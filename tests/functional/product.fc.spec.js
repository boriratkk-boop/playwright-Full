const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@functional Adding all available products to the cart and then removing them, verifying that the cart updates correctly', async ({ loginPage, productsPage, cartPage, page }) => {
  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password);
  const expectedCount = await productsPage.addAllProducts('TC007-addAll');
  await productsPage.openCart('TC007-afterAddAll');
  const allItems = await cartPage.getCartItems();
  await expect(allItems.length).toBe(expectedCount);
  await cartPage.removeAllProducts('TC007-afterRemoveAll');
  const finalItems = await cartPage.getCartItems();
  await expect(finalItems.length).toBe(0);
});


test('@functional Product should correctly sorts items from A to Z', async ({ loginPage, productsPage, page }) => {
    await loginPage.goto();
    await loginPage.login(users.validUser.username,users.validUser.password);
    const productNamesFromUI = await productsPage.getAllProductNames();
    const sortedNames = [...productNamesFromUI].sort((a, b) => a.localeCompare(b));
    await expect(productNamesFromUI).toEqual(sortedNames);

    await page.screenshot({
      path: 'screenshots/functional/product/TC008-Select A-Z.png',
      fullPage: true
    });
  });

  test('@functional Product should correctly sorts items from Z to A', async ({ loginPage, productsPage, page }) => {
    await loginPage.goto();
    await loginPage.login( users.validUser.username,users.validUser.password);
    await productsPage.sortByNameZToA();
    const productNamesFromUI = await productsPage.getAllProductNames();
    const sortedNames = [...productNamesFromUI].sort((a, b) =>b.localeCompare(a));
    await expect(productNamesFromUI).toEqual(sortedNames);

    await page.screenshot({
      path: 'screenshots/functional/product/TC009-Select Z-A.png',
      fullPage: true
    });
  });


  test('@functional Product should correctly sort items from Low to High price', async ({ loginPage, productsPage, page }) => {
    await loginPage.goto();
    await loginPage.login( users.validUser.username,users.validUser.password);
    await productsPage.sortByPriceLowToHigh();
    const pricesFromUI = await productsPage.getAllProductPrices();
    const sortedPrices = [...pricesFromUI].sort((a, b) => a - b);
    await expect(pricesFromUI).toEqual(sortedPrices);

    await page.screenshot({
      path: 'screenshots/functional/product/TC010_sort_price_low_to_high.png',
      fullPage: true
    });
  });

  test('@functional Product should correctly sort items from High to Low price', async ({ loginPage, productsPage, page }) => {
    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
    await productsPage.sortByPriceHighToLow();
    const pricesFromUI = await productsPage.getAllProductPrices();
    const sortedPrices = [...pricesFromUI].sort((a, b) => b - a);
    await expect(pricesFromUI).toEqual(sortedPrices);

    await page.screenshot({
      path: 'screenshots/functional/product/TC011_sort_price_high_to_low.png',
      fullPage: true
    });
  });


  test('@functional Should navigate to the cart page when clicking the cart icon', async ({loginPage, productsPage ,cartPage ,page}) => {
    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password,);

    await productsPage.openCart();
    await expect(cartPage.cartitle).toHaveText('Your Cart');

    await page.screenshot({
      path: 'screenshots/functional/product/TC011_when_clicking_the_cart_icon.png',
      fullPage: true
    });
  
  });
