/**
 * Webpack dev config
 */

const path = require('path');
const COMMON = require('./webpack.common.config');

module.exports = Object.assign(COMMON, {
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST,
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    port: process.env.PORT,
    stats: 'errors-only',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  entry: {
    app: './src/index.ts'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dev'),
    publicPath: '/'
  }
});
