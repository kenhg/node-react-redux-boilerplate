import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import createHistory from 'history/createBrowserHistory'
import createStore from '../shared/store'
import getRoutes from '../shared/routes'

import App from './components/App'
// import '../theme/index.scss'

const history = createHistory()
const store = createStore()

const toRender = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key="provider">
        <BrowserRouter>
          <Component history={history} />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getELementById('react-view'),
  )
}

toRender(App)

if (module.hot) {
  module.hot.accept(App, () => {
    const NextContainer = require('./components/App')
    toRender(NextContainer)
  })
}
