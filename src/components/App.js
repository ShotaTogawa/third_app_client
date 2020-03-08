import React from 'react';
import Landing from './Landing/Landing';
import { isAuthenticated } from './Landing/Auth';
import { Redirect } from 'react-router-dom';
const { accessToken } = isAuthenticated();

const redirectUser = () => {
  if (accessToken) return <Redirect to="/user" />;

  if (!accessToken) return <Redirect to="/" />;
};

const App = () => {
  return (
    <>
      <Landing />
      {redirectUser()}
    </>
  );
};

export default App;
