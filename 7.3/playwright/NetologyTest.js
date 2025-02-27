const { chromium } = require("playwright");
const { timeout } = require("./playwright.config");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru", { timeout: 60000 });
  await page.click("text=Каталог курсов");
  await page.pause();

  //assertion
  await browser.close();
})();
