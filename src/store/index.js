import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import news from '../news/NewsMiddleware'
import rootReducer from '../reducers'

var middlewares = []

export default (initialState) => {
  middlewares.push(thunk)
  middlewares.push(logger)
    middlewares.push(news)
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
