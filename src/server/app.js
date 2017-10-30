import path from 'path'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from './config'

const app = express()

const env = config.env

app.use(morgan('dev'))
app.use(cors())

// populate req.body with json data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// reserve /public to static files
app.use('/public', express.static(path.join(__dirname, '../../public')))

export default app
