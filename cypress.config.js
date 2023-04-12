const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { merge } = require('mochawesome-merge');
const { create } = require('mochawesome-report-generator');
const fs = require('fs-extra');
const path = require('path');

async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    setupNodeEvents,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    reportFilename: 'index.html',
    overwrite: false,
    html: true,
    json: true
  },
  after(runResults, args) {
    return merge(runResults)
      .then((report) => {
        const reportDir = path.join(process.cwd(), 'cypress/reports/mochawesome');
        fs.mkdirpSync(reportDir);
        const reportFilename = path.join(reportDir, 'report.json');
        fs.writeFileSync(reportFilename, JSON.stringify(report));
        return create({
          reportDir: reportDir,
          reportFilename: 'index.html',
          reportTitle: 'Relatório de Testes',
          reportPageTitle: 'Relatório de Testes',
          reportJsonFilename: 'report.json',
          charts: true,
          overwrite: false,
          timestamp: new Date().toISOString(),
          inline: true,
          assetsFolder: 'assets',
        });
      });
  }
});
