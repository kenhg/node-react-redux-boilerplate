const config = {
  ip: process.env.IP || '127.0.0.1',
  port: process.env.PORT || 3000,

  env: process.env.NODE_ENV || 'development',
}

config.url = process.env.URL || `http://${config.ip}:${config.port}`

export default config
