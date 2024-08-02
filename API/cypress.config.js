const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require ("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config){
      require('@cypress/grep/src/plugin')(config);
      allureWriter(on, config);
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
