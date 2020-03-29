import React from 'react';
import Landing from './Landing/Landing';
import { Redirect } from 'react-router-dom';

const redirectUser = () => {
  const authState = localStorage.getItem('jwt');
  if (authState) return <Redirect to="/user" />;

  if (!authState) return <Redirect to="/" />;
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
