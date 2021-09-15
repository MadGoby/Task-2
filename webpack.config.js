const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
    entry: {
      'content-types': './pages/content-types/content-types.js',
      'form-elements': './pages/form-elements/form-elements.js',
      'cards': './pages/cards/cards.js',
      'headers-footers': './pages/headers-footers/headers-footers.js',
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
      template: './pages/content-types/content-types.pug',
      filename: 'content-types.html',
      excludeChunks: ['landing-page', 'search-room', 'registration', 'sign-in', 'room-details', 'form-elements', 'headers-footers', 'cards'], 
    }),
    new HTMLWebpackPlugin({
      template: './pages/form-elements/form-elements.pug',
      filename: 'form-elements.html',
      excludeChunks: ['landing-page', 'search-room', 'registration', 'sign-in', 'room-details', 'content-types', 'headers-footers', 'cards'], 
    }),
    new HTMLWebpackPlugin({
      template: './pages/cards/cards.pug',
      filename: 'cards.html',
      excludeChunks: ['landing-page', 'search-room', 'registration', 'sign-in', 'room-details', 'content-types', 'headers-footers', "form-elements"], 
    }),
    new HTMLWebpackPlugin({
      template: './pages/headers-footers/headers-footers.pug',
      filename: 'headers-footers.html',
      excludeChunks: ['landing-page', 'search-room', 'registration', 'sign-in', 'room-details', 'content-types', 'form-elements', 'cards'], 
    }),
    new HTMLWebpackPlugin({
      template: './pages/landing-page/landing-page.pug',
      filename: 'landing-page.html',
      excludeChunks: ['content-types', 'search-room', 'registration', 'sign-in', 'room-details', 'form-elements', 'headers-footers', 'cards'],
    }),
    new HTMLWebpackPlugin({
      template: './pages/search-room/search-room.pug',
      filename: 'search-room.html',
      excludeChunks: ['content-types', 'landing-page', 'registration', 'sign-in', 'room-details', 'form-elements', 'headers-footers', 'cards'], 
    }),
    new HTMLWebpackPlugin({
      template: './pages/room-details/room-details.pug',
      filename: 'room-details.html',
      excludeChunks: ['content-types', 'landing-page', 'registration', 'sign-in', 'search-room', 'form-elements', 'headers-footers', 'cards'],
    }),
    new HTMLWebpackPlugin({
      template: './pages/registration/registration.pug',
      filename: 'registration.html',
      excludeChunks: ['content-types', 'landing-page', 'search-room', 'sign-in', 'room-details', 'form-elements', 'headers-footers', 'cards'],
    }),
    new HTMLWebpackPlugin({
      template: './pages/sign-in/sign-in.pug',
      filename: 'sign-in.html',
      excludeChunks: ['content-types', 'landing-page', 'search-room', 'registration', 'room-details', 'form-elements', 'headers-footers', 'cards'],
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