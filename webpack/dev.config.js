const path = require('path')
const webpack = require('webpack')
const AssetsWebpackPlugin = require('assets-webpack-plugin')

const assetsPath = path.resolve(__dirname, '../public')
const host = process.env.IP || 'localhost'
const port = parseInt(process.env.PORT, 10) || 3000

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, '..'),
  entry: [
    `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`,
    './src/client/app',
  ],
  output: {
    path: assetsPath,
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: 'http://' + host + ':' + port + '/public/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'babel-loader'],
      },

      { test: /\.(png|jpg|gif|wav|mp3)$/, loader: 'file-loader' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'octet-stream' } },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'image/svg+xml' } },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
  },
  plugins: [
    new AssetsWebpackPlugin({
      prettyPrint: true,
      update: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { CLIENT: true, SERVER: false },
    }),
  ],
}
