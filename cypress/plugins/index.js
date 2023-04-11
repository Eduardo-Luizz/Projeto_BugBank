const cucumber = require('cypress-cucumber-preprocessor').default

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
