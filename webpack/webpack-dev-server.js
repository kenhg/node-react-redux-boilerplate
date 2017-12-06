const path = require('path')
const Express = require('express')
const webpack = require('webpack')

const webpackConfig = require('./dev.config')
// if (process.env.DLL) {
//   webpackConfig.plugins.push(new webpack.DllReferencePlugin({
//     context: '.',
//     manifest: require(path.join(__dirname, '../public/dll/vendor-manifest.json'))
//   }))
// }

const compiler = webpack(webpackConfig)

const host = process.env.IP || 'localhost'
const port = (parseInt(process.env.PORT) + 1) || 3001
const serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    hash: false,
		version: false,
		assets: false,
		chunkModules: false,
		reasons: false,
    colors: true,
  },
}

const app = new Express()

app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler, { log: function() { return null } }))

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err)
  }
  else {
    console.info('==> 🚧  Webpack development server listening on port %s', port)
  }
})
