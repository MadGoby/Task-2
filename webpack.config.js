const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
    entry: {
    'ui-index': './ui-index.js',
    'landing-page': './landing-page.js',
    'search-room': './search-room.js',
    'room-details': './room-details.js',
    },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/img/'),
    },
  },
  devServer: {
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './ui-index.pug',
      filename: 'ui-index.html',
      excludeChunks: ['search-room', 'landing-page', 'room-details'], 
    }),
    new HTMLWebpackPlugin({
      template: './landing-page.pug',
      filename: 'landing-page.html',
      excludeChunks: ['search-room', 'ui-index', 'room-details'],
    }),
    new HTMLWebpackPlugin({
      template: './search-room.pug',
      filename: 'search-room.html',
      excludeChunks: ['ui-index', 'landing-page', 'room-details'], 
    }),
    new HTMLWebpackPlugin({
      template: './room-details.pug',
      filename: 'room-details.html',
      excludeChunks: ['ui-index', 'landing-page', 'search-room'], 
    }),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          publicPath: '../'
        },
      },
      {
        test:/\.(ttf|woff|woff2|eot)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: '../'
        },
      },
    ],
  },
};