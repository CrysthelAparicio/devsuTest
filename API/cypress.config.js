const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require ("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    retries: 1,
    reporterOptions: {
        charts: true,
        json: true,
        reportsDir: 'reports/mochawesome',
        reportFilename: 'my-report',
        overwrite: false
    },
  e2e: {
    async setupNodeEvents(on, config){
      require('@cypress/grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);
     // allureWriter(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;

    },
 
   specPattern: "cypress/e2e/features/**/*.feature",
  
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    viewportHeight:1000,
    viewportWidth:1600,
    headless:true,
    
  },
  
  env: {
    URL_BASE:'https://petstore.swagger.io/v2',
    allureReuseAfterSpec: true,
    allure: true
  }

});
