import { test, expect } from '@playwright/test';

if (process.env.GRUIMURL){
  var GRUIMURL=process.env.GRUIMURL;
} else {
  var GRUIMURL="http://localhost:8080";
}

test.describe('gruim tests', () => {
    test('gruim loaded', async ({ page }) => {
    await page.goto(GRUIMURL);
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  });
});
