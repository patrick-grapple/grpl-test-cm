import { test, expect } from '@playwright/test';

if (process.env.GRAPPURL){
  var GRAPIURL=process.env.GRAPPURL;
} else {
  var GRAPPURL="http://localhost:4000";
}

test.describe('grapp (application) tests', () => {
  test('grapp (application) loaded', async ({ page }) => {
    await page.goto(GRAPPURL);
    await expect(page).toHaveTitle(/client/);
  });
});
