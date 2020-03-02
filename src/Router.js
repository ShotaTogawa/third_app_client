import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App'
import UserDashboard from './components/UserDashboard/UserDashboard'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/user" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
