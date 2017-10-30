import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

export default function serverRenderer() {
  return function app(req, res) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>node-react-redux boilerplate</title>
        </head>

        <body>
          <div id="react-view">
            <h1>Welcome to the node-react-redux boilerplate.</h1>
          </div>
        </body>
      </html>
    `
    res.send(html)
  }
}
