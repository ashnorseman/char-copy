/**
 * Webpack build config
 */

const path = require('path');
const COMMON = require('./webpack.common.config');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = Object.assign(COMMON, {
  entry: {
    app: './src/index.ts'
  },

  plugins: COMMON.plugins.concat([
    new CleanPlugin(path.join(__dirname, 'build'))
  ]),

  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, 'build'),
  }
});
