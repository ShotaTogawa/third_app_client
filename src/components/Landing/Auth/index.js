import { api } from '../../../api';

export const authenticate = data => {
  localStorage.setItem('jwt', JSON.stringify(data));
};

export const isAuthenticated = () => {
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export const signout = history => {
  localStorage.removeItem('jwt');
  history.push('/');
};
