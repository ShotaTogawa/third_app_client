import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Landing/Auth/PrivateRoute';

import App from './components/App';
import UserDashboard from './components/UserDashboard/UserDashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <PrivateRoute path="/user" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
