const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const webpack = require('webpack')
const assetsPath = path.resolve(__dirname, '../public')
const host = (process.env.IP || 'localhost')
const port = parseInt(process.env.PORT) + 1 || 3001

module.exports = {
  devtool: 'eval',

  entry: './src/client/index.js',

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../public/dist'),
    publicPath: 'http://' + host + ':' + port + '/public/'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new AssetsPlugin({
      prettyPrint: true,
      update: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
