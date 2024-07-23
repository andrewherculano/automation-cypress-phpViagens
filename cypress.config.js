const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://phptravels.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {},
  },
});
