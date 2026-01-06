class CartPage {
  constructor(page) {
    this.page = page;
    this.inven_item = page.locator('.inventory_item_name');
    this.cartItems = page.locator('.cart_item');
    this.removeButtons = page.locator('button[data-test^="remove-"]');
    this.cartitle = page.locator('.title');

  }


  async verifyItem(testName) {
    await this.inven_item.waitFor();
    await this.page.screenshot({ path: `screenshots/${testName}-verify-cart.png` });
  }

  async getCartItems() {
    return await this.cartItems.elementHandles();
  }

  async removeAllProducts(testName) {
    while (await this.removeButtons.count() > 0) {
      await this.removeButtons.first().click();
    }
  
    await this.page.screenshot({
      path: `screenshots/functional/product/${testName}-removed-all.png`,
      fullPage: true
    });
  }
  

}

module.exports = { CartPage };
