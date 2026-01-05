const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@functional Input fields', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.check_fields(
    users.validUser.username,
    users.validUser.password,
    'fucntional-login-TC001'
  );
  await expect(loginPage.username).toHaveValue(users.validUser.username);
  await expect(loginPage.password).toHaveValue(users.validUser.password);
});

test('@functional Should show an error message if log in without a username', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.login(
    '',
    users.validUser.password,
    'fucntional-login-TC002'
  );
  await expect(loginPage.errmessage).toHaveText('Epic sadface: Username is required');
});

test('@functional Should show an error message if log in without a password', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.login(
    users.validUser.username,
    '',
    'fucntional-login-TC003'
  );
  await expect(loginPage.errmessage).toHaveText('Epic sadface: Password is required');
});

test('@functional Should show an error message if log in with both fields blank', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.login(
    '',
    '',
    'fucntional-login-TC004'
  );
  await expect(loginPage.errmessage).toHaveText('Epic sadface: Username is required');
});

test('@functional Should logged in successfully with valid credentials', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password,
    'fucntional-login-TC005'
  );
});

test('@functional Should logged in fails with an error message when using invalid credentials', async ({loginPage, page}) => {
  await loginPage.goto();
  await loginPage.login(
    users.validUser.username,
    'test_sauce',
    'fucntional-login-TC006'
  );
  await expect(loginPage.errmessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

});
