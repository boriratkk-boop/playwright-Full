class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password, testName) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
    await this.page.screenshot({ path: `screenshots/${testName}-login.png` });
  }
}

module.exports = { LoginPage };
