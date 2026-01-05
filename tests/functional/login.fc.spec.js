const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@functional Input fields', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.check_fields(
    users.validUser.username,
    users.validUser.password,
    'fucntional-login'
  );
  await expect(loginPage.username).toHaveValue(users.validUser.username);
  await expect(loginPage.password).toHaveValue(users.validUser.password);
});

test('@functional Should show an error message if log in without a username', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.check_fields(
    '',
    users.validUser.password,
    'fucntional-login'
  );
  await loginPage.loginBtn.click();
  await expect(loginPage.errmessage).toHaveText('Epic sadface: Username is required');
});
