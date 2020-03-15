import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Landing/Auth/PrivateRoute';

import App from './components/App';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Feed from './components/Feed/Feed';
import Search from './components/SearchImage/Search';
import CreateImage from './components/CreateImage/CreateImage';
import OtherUserDashboard from './components/UserDashboard/OtherUserDashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <PrivateRoute path="/user" exact component={UserDashboard} />
        <PrivateRoute path="/feed" exact component={Feed} />
        <PrivateRoute path="/search" exact component={Search} />
        <PrivateRoute path="/create" exact component={CreateImage} />
        <PrivateRoute path="/user/:id" exact component={OtherUserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
