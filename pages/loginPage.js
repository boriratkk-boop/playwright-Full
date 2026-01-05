class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async check_fields(username, password, testName) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.page.screenshot({ path: `screenshots/${testName}-login.png` });
  }



  async login(username, password, testName) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
    await this.page.screenshot({ path: `screenshots/${testName}-login.png` });
  }
}

module.exports = { LoginPage };
