class ProductsPage {
  constructor(page) {
    this.page = page;
    this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cart_link = page.locator('.shopping_cart_link');
    this.addButtons = page.locator('button[data-test^="add-to-cart-"]');
    this.inven_item = page.locator('.inventory_item_name');
    this.sortDropdown = page.locator('.product_sort_container');


  }

  async addToCart(testName) {
    await this.backpack.click();
    await this.page.screenshot({ path: `screenshots/${testName}-add-to-cart.png`,
    fullPage: true 
  });
  }

  async openCart(testName) {
    await this.cart_link.click();
    await this.page.screenshot({ path: `screenshots/functioncal/product/${testName}-open-cart.png` ,
    fullPage: true
  });
  }

  async addAllProducts(testName) {
    const totalProducts = await this.inven_item.count();

  while (await this.addButtons.count() > 0) {
    await this.addButtons.first().click();
  }
  
    await this.page.screenshot({
      path: `screenshots/functioncal/product/${testName}-added-all.png`,
      fullPage: true
    });

    return totalProducts;

  }
  
  async sortByNameAToZ() {
    await this.sortDropdown.selectOption('az');
  }

  async getAllProductNames() {
    return await this.inven_item.allTextContents();
  }
}



module.exports = { ProductsPage };
