/*
 * @Author: duchengdong
 * @Date: 2020-08-17 10:21:32
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-17 15:17:52
 * @Description: 
 */
import { combineReducers } from 'redux'
import counter from './counter'
import { connectRouter } from 'connected-react-router'


const createRootReducer = (history)=> combineReducers({
  counter,
  router: connectRouter(history)})

export default createRootReducer