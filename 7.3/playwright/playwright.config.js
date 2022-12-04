const config = {
  testDir: "tests",

  timeout: 60000,

  use: {
    headless: false,
    screenshot: "off",
    launchOptions: {
      slowMo: 60000,
    },
  },
};

module.exports = config;
