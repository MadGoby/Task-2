const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
    entry: {
      'ui-kit': './ui-kit/main/ui-kit.js',
      'landing-page': './pages/landing-page/landing-page.js',
      'search-room': './pages/search-room/search-room.js',
      'room-details': './pages/room-details/room-details.js',
      'registration': './pages/registration/registration.js',
      'sign-in': './pages/sign-in/sign-in.js',
    },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, './src/img'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './ui-kit/main/ui-kit.pug',
      filename: 'ui-kit.html',
      excludeChunks: ['landing-page', 'search-room', 'registration', 'sign-in', 'room-details'], 
    }),
    new HTMLWebpackPlugin({
      template: './pages/landing-page/landing-page.pug',
      filename: 'landing-page.html',
      excludeChunks: ['ui-kit', 'search-room', 'registration', 'sign-in', 'room-details'],
    }),
    new HTMLWebpackPlugin({
      template: './pages/search-room/search-room.pug',
      filename: 'search-room.html',
      excludeChunks: ['ui-kit', 'landing-page', 'registration', 'sign-in', 'room-details'], 
    }),
    new HTMLWebpackPlugin({
      template: './pages/room-details/room-details.pug',
      filename: 'room-details.html',
      excludeChunks: ['ui-kit', 'landing-page', 'registration', 'sign-in', 'search-room'],
    }),
    new HTMLWebpackPlugin({
      template: './pages/registration/registration.pug',
      filename: 'registration.html',
      excludeChunks: ['ui-kit', 'landing-page', 'search-room', 'sign-in', 'room-details'],
    }),
    new HTMLWebpackPlugin({
      template: './pages/sign-in/sign-in.pug',
      filename: 'sign-in.html',
      excludeChunks: ['ui-kit', 'landing-page', 'search-room', 'registration', 'room-details'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    })
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