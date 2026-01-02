class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async addToCart(testName) {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
    await this.page.screenshot({ path: `screenshots/${testName}-add-to-cart.png` });
  }

  async openCart(testName) {
    await this.page.click('.shopping_cart_link');
    await this.page.screenshot({ path: `screenshots/${testName}-open-cart.png` });
  }
}

module.exports = { ProductsPage };
