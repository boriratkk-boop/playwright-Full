class CartPage {
  constructor(page) {
    this.page = page;
  }

  async verifyItem(testName) {
    await this.page.locator('.inventory_item_name').waitFor();
    await this.page.screenshot({ path: `screenshots/${testName}-verify-cart.png` });
  }
}

module.exports = { CartPage };
