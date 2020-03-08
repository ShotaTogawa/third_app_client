import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Landing/Auth/PrivateRoute';

import App from './components/App';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Feed from './components/Feed/Feed';
import SearchImage from './components/SearchImage/SearchImage';
import CreateImage from './components/CreateImage/CreateImage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <PrivateRoute path="/user" exact component={UserDashboard} />
        <PrivateRoute path="/feed" exact component={Feed} />
        <PrivateRoute path="/search" exact component={SearchImage} />
        <PrivateRoute path="/create" exact component={CreateImage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
