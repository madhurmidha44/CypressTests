const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:6000,
  pageLoadTimeout: 60000,
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1
    },

  env:{
        baseUrl : "https://www.stagingworkyardwebsite.com"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
