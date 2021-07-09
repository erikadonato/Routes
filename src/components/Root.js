import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { history } from '../history'

import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Public from '../pages/Public'
const Root = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/' component={Home} />
      <Route exact path='/public' component={Public} />
      <Route component={NotFound} />

    </Switch>
  </Router>
)
export default Root; 