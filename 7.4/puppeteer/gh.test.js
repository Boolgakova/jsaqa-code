let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toContain("Build like the best teams on the planet");
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 15000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with");
  }, 15000);
});

test("The main GH page content", async () => {
  await page.goto("https://github.com/");
  await page.waitForSelector("h1");
  const title = await page.title();
  expect(title).toContain("Let’s build from here");
}, 15000);

test("Sigh In page content", async () => {
  await page.goto("https://github.com/signup");
  const enterSelector = "#email-container > div:nth-child(1) > label";
  await page.waitForSelector(enterSelector, {
    visible: true,
  });
  const actual = await page.$eval(enterSelector, (link) => link.textContent);
  expect(actual).toContain("Enter your email");
}, 15000);

test("Features link attributr", async () => {
  await page.goto("https://github.com/features/security");
  const actual = await page.$eval("a", (link) => link.getAttribute("href"));
  expect(actual).toEqual("#start-of-content");
}, 15000);
