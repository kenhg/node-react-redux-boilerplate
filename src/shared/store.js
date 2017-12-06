import { createStore, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

export default (history) => {

  const middleware = routerMiddleware(history)

  const store = createStore(
    combineReducers(
      ...reducers,
      router: routerReducer,
    ),
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' &&
      devtool ? window.devToolsExtension() : f => f,
  )
}
