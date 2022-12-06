const config = {
  testDir: "tests",

  timeout: 180000,

  use: {
    headless: false,
    screenshot: "on",
    launchOptions: {
      slowMo: 500,
    },
  },
};

module.exports = config;
