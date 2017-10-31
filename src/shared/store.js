import { createStore, applyMiddleware, compose } from 'redux'

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' &&
      devtool ? window.devToolsExtension() : f => f,
  )
)

export default store
