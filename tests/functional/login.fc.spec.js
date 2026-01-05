const { test, expect } = require('../../fixtures/testFixtures');
const users = require('../../data/users');

test('@functional Input fields', async ({page}) => {
  await loginPage.goto();
  await loginPage.check_fields(
    users.validUser.username,
    users.validUser.password,
    'fucntional-login'
  );
});
