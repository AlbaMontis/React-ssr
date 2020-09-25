import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home.jsx'
import UsersList from './components/UsersList.jsx'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UsersList} />
  </div>
)
