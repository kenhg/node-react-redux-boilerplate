import _ from 'lodash'
import React from 'react'
import {render} from 'react-dom'

import BrowserRouter from 'react-router-dom/BrowserRouter'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import store from '../shared/store'
import getRoutes from '../shared/routes'

export default (getRoutes) => {
  const initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__

  const toRender = (
    <Provider store={store} key="provider">
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )

  render(toRender, document.getElementById('react-view'))
}
