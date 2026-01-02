const { test, expect } = require('@playwright/test');

test.skip('API login test', async ({ request }) => {
  const response = await request.post(
    'https://www.saucedemo.com/',
    {
      data: {
        username: 'standard_user',
        password: 'secret_sauce'
      }
    }
  );

  expect(response.status()).toBe(200);
});

