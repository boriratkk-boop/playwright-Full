class CartPage {
  constructor(page) {
    this.page = page;
    this.inven_item = page.locator('.inventory_item_name');
  }

  async verifyItem(testName) {
    await this.inven_item.locator().waitFor();
    await this.page.screenshot({ path: `screenshots/${testName}-verify-cart.png` });
  }
}

module.exports = { CartPage };
