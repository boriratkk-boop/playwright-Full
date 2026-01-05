const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@functional Adding all available products to the cart and then removing them, verifying that the cart updates correctly', async ({ loginPage, productsPage, cartPage, page }) => {
  await loginPage.goto();

  // login
  await loginPage.login(users.validUser.username, users.validUser.password);

  // addAll
  const expectedCount = await productsPage.addAllProducts('TC007-addAll');

  // OpenCart
  await productsPage.openCart('TC007-afterAddAll');
  
  // Get item
  const allItems = await cartPage.getCartItems();
  
  // Check item
  await expect(allItems.length).toBe(expectedCount);

  // remove all products
  await cartPage.removeAllProducts('TC007-afterRemoveAll');

  // verify cart is empty
  const finalItems = await cartPage.getCartItems();
  await expect(finalItems.length).toBe(0);
});

test('@functional Product should correctly sorts items from A to Z', async ({ loginPage, productsPage, page }) => {
    //  Login
    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
  
    // เลือก sort A → Z
    await productsPage.sortByNameAToZ();
  
    // ดึงชื่อสินค้าทั้งหมดจากหน้า UI
    const productNamesFromUI = await productsPage.getAllProductNames();
  
    // สร้าง list ที่ควรจะเป็น (เรียง A → Z)
    const sortedNames = [...productNamesFromUI].sort((a, b) =>
      a.localeCompare(b)
    );
  
    // Assert ว่า UI เรียงถูกต้อง
    await expect(productNamesFromUI).toEqual(sortedNames);
  
    // Screenshot เป็น evidence
    await page.screenshot({
      path: 'screenshots/functioncal/product/TC008-Select A-Z.png',
      fullPage: true
    });
  });

  test('@functional Product should correctly sorts items from Z to A', async ({ loginPage, productsPage, page }) => {
    //  Login
    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
  
    // เลือก sort Z → A
    await productsPage.sortByNameZToA();
  
    // ดึงชื่อสินค้าทั้งหมดจากหน้า UI
    const productNamesFromUI = await productsPage.getAllProductNames();
  
    // สร้าง list ที่ควรจะเป็น (เรียง Z → A)
    const sortedNames = [...productNamesFromUI].sort((a, b) =>
      b.localeCompare(a)
    );
  
    // Assert ว่า UI เรียงถูกต้อง
    await expect(productNamesFromUI).toEqual(sortedNames);
  
    // Screenshot เป็น evidence
    await page.screenshot({
      path: 'screenshots/functional/product/TC009-Select Z-A.png',
      fullPage: true
    });
  });


  test('@functional Product should correctly sort items from Low to High price', async ({ loginPage, productsPage, page }) => {
    // Login
    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
  
    // เลือก sort Price Low → High
    await productsPage.sortByPriceLowToHigh();
  
    // ดึงราคาสินค้าจากหน้า UI
    const pricesFromUI = await productsPage.getAllProductPrices();
  
    // สร้าง expected result (เรียงราคาจากต่ำ → สูง)
    const sortedPrices = [...pricesFromUI].sort((a, b) => a - b);
  
    // Assert ว่า UI เรียงราคาถูกต้อง
    await expect(pricesFromUI).toEqual(sortedPrices);
  
    // Screenshot เป็น evidence
    await page.screenshot({
      path: 'screenshots/functional/product/TC010_sort_price_low_to_high.png',
      fullPage: true
    });
  });

  test('@functional Product should correctly sort items from High to Low price', async ({ loginPage, productsPage, page }) => {
    // Login
    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
  
    // เลือก sort Price High → Low
    await productsPage.sortByPriceHighToLow();
  
    // ดึงราคาสินค้าจากหน้า UI
    const pricesFromUI = await productsPage.getAllProductPrices();
  
    // สร้าง expected result (เรียงราคาจากสูง → ต่ำ)
    const sortedPrices = [...pricesFromUI].sort((a, b) => b - a);
  
    // Assert ว่า UI เรียงราคาถูกต้อง
    await expect(pricesFromUI).toEqual(sortedPrices);
  
    // Screenshot เป็น evidence
    await page.screenshot({
      path: 'screenshots/functional/product/TC011_sort_price_high_to_low.png',
      fullPage: true
    });
  });
