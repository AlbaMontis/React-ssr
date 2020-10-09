import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../client/reducers'

const composeEnhancers = 
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const enhancer =  composeEnhancers(
  applyMiddleware(thunk)
)

export default (initialState = {}) => createStore(reducers, initialState, enhancer)
