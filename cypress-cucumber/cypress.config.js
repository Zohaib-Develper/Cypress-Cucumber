const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/integration/*/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    fixturesFolder: "cypress/fixtures",
  },
});
