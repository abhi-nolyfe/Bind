import { test, expect } from "@playwright/test";

const credentials = {
  username: process.env.USERNAMEE ?? "",
  password: process.env.PASSWORDD ?? "",
};
console.log(process.env.USERNAMEE);
test("auth", async ({ page }) => {
  await page.goto("http://localhost:3000/sign-in");
  await page.getByLabel("Email address or username").click();
  await page
    .getByLabel("Email address or username")
    .fill(credentials.username);
  await page
    .getByRole("button", { name: "Continue", exact: true })
    .click();
  await page.getByLabel("Password", { exact: true }).click();
  await page
    .getByLabel("Password", { exact: true })
    .fill(credentials.password);
  await page.getByRole("button", { name: "Continue" }).click();
  await page.goto("http://localhost:3000/");
  await page.getByText("Logout").click();
});
