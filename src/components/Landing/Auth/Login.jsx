import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Spinner from '../../Common/Spinner';
import { ErrorMessage } from '../../Common/ErrorMessage';
import { setAuthToken, authenticate } from '.';
import { api } from '../../../api';

const Login = ({ history }) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { email, password } = values;

  const isFormEmpty = ({ email, password }) => {
    return !email.length || !password.length;
  };

  const isFormValid = () => {
    if (isFormEmpty(values)) {
      setError('Please fill in all Fields');
      return false;
    }
    return true;
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const signin = async formValue => {
    try {
      const response = await api.post('/api/signin', formValue);
      setAuthToken(response.data.token);
      authenticate(response.data);
      history.push('/user');
    } catch (e) {
      values.email = '';
      values.password = '';
      setError('Login failed');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    isFormValid();
    setLoading(true);
    signin(values);
    setLoading(false);
  };

  return (
    <>
      {loading ? <Spinner /> : ''}
      <H2>Login</H2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={handleChange('email')}
        />
        <Input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={handleChange('password')}
        />
        <SigninButton type="submit">Sign In Here</SigninButton>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ''}
      </Form>
    </>
  );
};

export default withRouter(Login);

const H2 = styled.h2`
  font-size: 3rem;
  color: #eee;
  margin-top: 2rem;
  padding-left: 4.7rem;
`;

const Form = styled.form`
  width: 100%;
  padding: 50px 50px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 350px;
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: #eee;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  margin-bottom: 50px;
  padding: 10px 0;
  transition: border-bottom-color 0.8s;
  &::placeholder {
    color: #eee;
  }
`;

const SigninButton = styled.button`
  display: block;
  width: 150px;
  padding: 8px 5px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      rgba(41, 128, 185, 0.3),
      rgba(109, 213, 250, 0.8)
    );
  }
`;
