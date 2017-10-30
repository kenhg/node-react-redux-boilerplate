import http from 'http'
import app from './app'
import config from './config'

http.createServer(app).listen(config.port, config.ip, () => {
    console.log(`${config.env} listening on port ${config.port} and url: ${config.url}`)
})
process.on('SIGTERM', () => {
  console.log(`${config.env} stopping on port ${config.port}`)
  process.exit(0)
})
