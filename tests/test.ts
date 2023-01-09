import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
  await page.goto("http://localhost:5173");
  expect(await page.textContent("h1")).toBe("FloraTime");
});

test("button is present", async ({ page }) => {
  await page.goto("http://localhost:5173");
  expect(await page.getByRole("button").isVisible());
});

test("button is called Start", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page.getByRole("button", { name: "Start" })).toContainText("Start");
});

test("button is called Stop after pressing it", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page.getByRole("button")).toContainText("Stop");
});

test("pomodoro has been started message is visible", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByRole("button", { name: "Start" }).click();
  expect(await page.textContent("p")).toBe("Pomodoro has been started.");
});

test("adjusts time", async ({ page }) => {
  await page.goto("http://localhost:5173");
  const locator = page.locator('input[type=number]');
  await expect(locator).toHaveValue(/[0-240]/);

});
