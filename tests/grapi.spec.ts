import { test, expect } from '@playwright/test';

if (process.env.GRAPIURL){
  var GRAPIURL=process.env.GRAPIURL;
} else {
  var GRAPIURL="http://localhost:3000";
}

test.describe('grapi tests', () => {
  test('grapi loaded', async ({ page }) => {
    await page.goto(GRAPIURL);
    await expect(page).toHaveTitle(/grpl/);
  });
});
