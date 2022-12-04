import { test, expect } from "@playwright/test";
import { userName, password } from "../user.js";

test("Successful login", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(userName);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByRole("heading")).toHaveText("Мои курсы и профессии");
});
