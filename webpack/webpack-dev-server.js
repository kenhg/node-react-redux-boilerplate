var path = require('path')
var Express = require('express')
var webpack = require('webpack')

var webpackConfig = require('./dev.config')
var compiler = webpack(webpackConfig)

var host = process.env.IP || 'localhost'
var port = (parseInt(process.env.PORT) + 1) || 3001
var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
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

var app = new Express()

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
