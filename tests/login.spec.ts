import { test, expect } from '@playwright/test';

test('user can log in as citizen role', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Email').fill('john@example.com');
  await page.getByLabel('Password').fill('password123');
  await page.getByTestId('cs-login-submit' ).click();

  await expect(page).toHaveURL('/dashboard');
});