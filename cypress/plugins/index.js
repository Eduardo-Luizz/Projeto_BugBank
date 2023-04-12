const cucumber = require('cypress-cucumber-preprocessor').default

//
const { merge } = require('mochawesome-merge');
const { create } = require('mochawesome-report-generator');
const path = require('path');
const fs = require('fs-extra');
//

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

const webpack = require('@cypress/webpack-preprocessor')
const webpackOptions = {
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-webpack-preprocessor'
          }
        ]
      }
    ]
  }
}

module.exports = (on) => {
  on('file:preprocessor', webpack(webpackOptions))
}

module.exports = (on, config) => {
  on('after:run', (results) => {
    const outputDir = path.join(process.cwd(), 'mochawesome-report');

    // Create the report directory if it does not exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const reportFiles = fs.readdirSync(outputDir).filter((f) => f.endsWith('.json'));

    merge({
      files: reportFiles.map((file) => path.join(outputDir, file)),
    }).then((report) =>
      create({
        reportDir: outputDir,
        reportFilename: 'index.html',
        reportTitle: 'Relatório de Testes',
        reportPageTitle: 'Relatório de Testes',
        reportJsonFilename: 'report.json',
        charts: true,
        overwrite: true,
        timestamp: new Date().toISOString(),
      }).then(() => console.log('Relatório de testes gerado com sucesso!'))
    );
  });
};
