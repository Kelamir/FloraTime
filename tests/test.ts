import { expect, test } from '@playwright/test';


test('index page has expected h1', async ({ page }) => {
	await page.goto('http://localhost:5173');
	expect(await page.textContent('h1')).toBe('FloraTime');
})

test('button is present', async ({ page }) => {
	await page.goto('http://localhost:5173');
	expect(await page.getByRole('button').isVisible());
})