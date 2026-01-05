class CartPage {
  constructor(page) {
    this.page = page;
    this.inven_item = page.locator('.inventory_item_name');
    this.cartItems = page.locator('.cart_item');
    this.removeButtons = page.locator('button[data-test^="remove-"]');
  }

  async verifyItem(testName) {
    await this.inven_item.locator().waitFor();
    await this.page.screenshot({ path: `screenshots/${testName}-verify-cart.png` });
  }

  async getCartItems() {
    return await this.cartItems.elementHandles();
  }

  async removeAllProducts(testName) {
    const count = await this.removeButtons.count();
    for (let i = 0; i < count; i++) {
      await this.removeButtons.nth(i).click();
    }
    await this.page.screenshot({ path: `screenshots/${testName}-removed-all.png` });
  }
  
}

module.exports = { CartPage };
