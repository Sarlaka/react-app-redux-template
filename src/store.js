/*
 * @Author: duchengdong
 * @Date: 2020-08-17 10:21:32
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-17 15:08:05
 * @Description: 
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import * as History from 'history'
import createRootReducer from './modules'

export const history = History.createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
)