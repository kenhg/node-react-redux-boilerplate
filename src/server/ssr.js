import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

import createStore from '../shared/store'
import createHistory from 'history/createMemoryHistory'

export default function serverRenderer() {
  return function app(req, res) {

    const history = createHistory()
    const store = createStore()

    const initialState = store.getState()

    const component = renderToString(
      <Provider store={store} key="provider">
        <StaticRouter location={req.url}>
          <Component history={history} />
        </StaticRouter>
      </Provider>
    )

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Just Another Boilerplate</title>
        </head>

        <body>
          <div id="react-view">${component}</div>
        </body>
      </html>
    `
    res.send(html)
  }
}
