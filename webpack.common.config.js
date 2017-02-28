/**
 * Webpack common config
 */

const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  plugins: [
    new HTMLPlugin({
      template: './src/index.tpl.html',
      filename: 'index.html',
      favicon: './src/favicon-32x32.png'
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer]
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(sc|c)ss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: './images/[hash].[ext]',
        }
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font-woff',
          name: './fonts/[hash].[ext]',
        }
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  }
};
