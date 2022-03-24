const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const modules = [
  'content-types',
  'form-elements',
  'cards',
  'headers-footers',
  'landing-page',
  'search-room',
  'room-details',
  'room-details',
  'registration',
  'sign-in',
  'index',
];

const webpackConfig = {
  context: path.resolve(__dirname, './src'),
  entry: () => {
    const moduleObject = {};
    modules.forEach((module) => {
      moduleObject[module] = `./pages/${module}/${module}.js`;
    });
    return moduleObject;
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/img'),
      '@blocks': path.resolve(__dirname, './src/blocks'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/index.html'),
    },
    compress: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.ProvidePlugin({
      autoBind: 'auto-bind',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'window.autoBind': 'auto-bind',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          publicPath: '../',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: '../',
        },
      },
    ],
  },
};

modules.forEach((module) => {
  webpackConfig.plugins.push(new HTMLWebpackPlugin({
    template: `./pages/${module}/${module}.pug`,
    filename: module === 'index' ? `./${module}.html` : `./pages/${module}.html`,
    chunks: [module],
  }));
});

module.exports = webpackConfig;
