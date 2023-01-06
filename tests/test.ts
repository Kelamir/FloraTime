import { expect, test } from '@playwright/test';


test('index page has expected h1', async ({ page }) => {
	await page.goto('http://localhost:5173');
	expect(await page.textContent('h1')).toBe('FloraTime');
})

test('button is present', async ({ page }) => {
	await page.goto('http://localhost:5173');
	expect(await page.getByRole('button').isVisible());
})

test('button is called Start', async ({ page }) => {
	await page.goto('http://localhost:5173');
	await expect(page.getByRole("button")).toContainText("Start");
})
test('button is called Stop after pressing it', async ({ page }) => {
	await page.goto('http://localhost:5173');
	await page.getByRole("button").click();
	await expect(page.getByRole("button")).toContainText("Stop");
})



// test('button on toggle changes text from Start to Stop',
// 	async ({ page }) => {
// 	await page.goto('http://localhost:5173');
//
// 	const button = page.locator('Start');
// 	await button.click();
//
// 	const toggledButton = page.locator('Stop');
// 	expect(await toggledButton).toHaveText("");
// })