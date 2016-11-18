/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import webpack from 'webpack';
import merge from 'lodash.merge';
import AssetsPlugin from 'assets-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};


var args = process.argv;
var envArg = args.find(function(arg) {
    return arg.indexOf('--env') >= 0; 
});

const ENV = (envArg && envArg.split('=')[1]) || 'www';
const BUILD = 'build';
const PUBLICPATH = (ENV ==="empty" ? '' : '');

//
// Common configuration chunk to be used for both
// client-side (index.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------

const config = {
  output: {
    publicPath: DEBUG ? '/' : PUBLICPATH,
    sourcePrefix: '  ',
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../node_modules/react-routing/src'),
          path.resolve(__dirname, '../src'),
        ],
        loader: 'babel-loader',
      },
      DEBUG ?
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader?' + (DEBUG ? 'sourceMap&' : 'minimize&') +
          'localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader',
          'less-loader',
        ],
      } : {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', [
          'css-loader?' + (DEBUG ? 'sourceMap&' : 'minimize&') +
          'localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader',
          'less-loader?compress=false',
        ].join('!')),
      },
      {
        test: /\.scss$/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?' + (DEBUG ? 'sourceMap&' : 'minimize&') +
          'modules&localIdentName=[name]_[local]_[hash:base64:3]',
          'postcss-loader',
        ],
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.txt$/,
        loader: 'raw-loader',
      }, {
        /**
         * BUG解决方案留存：
         * 
         * test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
         * 是无法匹配 .woff?v=1.3 
         * 
         * 所以改成
         * test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)/,
         * 
         */
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)/,
        loader: 'url-loader?limit=200000',
      }, {
        test: /\.(eot|ttf|wav|mp3)/,
        loader: 'file-loader',
      },
    ],
  },

  postcss: function plugins(bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    ];
  },
};


//
// Configuration for the client-side bundle (index.js)
// -----------------------------------------------------------------------------

const clientConfig = merge({}, config, {
  entry: {
    search: ['./src/search.js'],
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: DEBUG ? '[name].js?[hash]' : '[name].[hash].js',
  },

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  plugins: [
    new ExtractTextPlugin(DEBUG ? '[name].css?[contenthash]' : '[name].[contenthash].css'),

    new HtmlWebpackPlugin({
      title: '公众号管理平台',
      template: 'entries/search.html',
      inject: 'body',
      filename: 'index.html',
      files: {
        adaptiveScrtipt: [(DEBUG ? '' : PUBLICPATH) + 'adaptor.js'],
      },
      chunks: ['search'],
    }),

    new webpack.DefinePlugin(GLOBALS),

    ...(!DEBUG ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          screw_ie8: true,
          warnings: VERBOSE
        },
        output: {
          comments: false
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ] : [
      new AssetsPlugin({
        path: path.join(__dirname, '../build/public'),
        filename: 'assets.js',
        processOutput: x => `module.exports = ${JSON.stringify(x)};`,
      }),
    ]),
  ],
});

//
// Configuration for the server-side bundle (server.js)
// -----------------------------------------------------------------------------

const serverConfig = merge({}, config, {
  entry: './src/server.js',
  output: {
    path: './build/public',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: [
    /^\.\/assets$/,
    function filter(context, request, cb) {
      const isExternal =
        request.match(/^[@a-z][a-z\/\.\-0-9]*$/i) &&
        !request.match(/^react-routing/) &&
        !context.match(/[\\/]react-routing/);
      cb(null, Boolean(isExternal));
    },
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false }),
  ],
});

export default [clientConfig, serverConfig];
