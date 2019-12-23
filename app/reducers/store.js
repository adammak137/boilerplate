import allReducers from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const store = createStore(allReducers, applyMiddleware(thunkMiddleware, createLogger()))

export default store
