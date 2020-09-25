import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import reducers from './reducers'
import Routes from './Routes'

import createStore from '../helpers/createStore'

const store = createStore()

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
