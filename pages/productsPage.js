class ProductsPage {
  constructor(page) {
    this.page = page;
    this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cart_link = page.locator('.shopping_cart_link');

  }

  async addToCart(testName) {
    await this.backpack.click();
    await this.page.screenshot({ path: `screenshots/${testName}-add-to-cart.png` });
  }

  async openCart(testName) {
    await this.cart_link.click();
    await this.page.screenshot({ path: `screenshots/${testName}-open-cart.png` });
  }
}

module.exports = { ProductsPage };
