class ProductsPage {
  constructor(page) {
    this.page = page;
    this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cart_link = page.locator('.shopping_cart_link');
    this.addButtons = page.locator('button[data-test^="add-to-cart-"]');

  }

  async addToCart(testName) {
    await this.backpack.click();
    await this.page.screenshot({ path: `screenshots/${testName}-add-to-cart.png` });
  }

  async openCart(testName) {
    await this.cart_link.click();
    await this.page.screenshot({ path: `screenshots/${testName}-open-cart.png` });
  }

  async addAllProducts(testName) {
    while (await this.addButtons.count() > 0) {
      await this.addButtons.first().click();
    }
  
    await this.page.screenshot({
      path: `screenshots/${testName}-added-all.png`
    });
  }

  async openCart(testName) {
    await this.cart_link.click();
    await this.page.screenshot({ path: `screenshots/${testName}-open-cart.png` });
  }
}



module.exports = { ProductsPage };
