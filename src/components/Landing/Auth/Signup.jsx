import React, { useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage } from '../../Common/ErrorMessage';
import { authenticate, setAuthorizedHeader } from '.';
import { api } from '../../../api';
import Spinner from '../../Common/Spinner';
import { withRouter } from 'react-router-dom';

const Signup = ({ history }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { name, email, password } = values;

  const isFormEmpty = ({ name, email, password }, confirmPassword) => {
    return (
      !name.length ||
      !email.length ||
      !password.length ||
      !confirmPassword.length
    );
  };

  const checkPassword = ({ password }, confirmPassword) => {
    if (password && password === confirmPassword) return true;
    return false;
  };

  const isFormValid = () => {
    if (isFormEmpty(values, confirmPassword)) {
      setError('Please fill in all Fields');
      return false;
    }
    if (!checkPassword(values, confirmPassword)) {
      setError('Password was wrong');
    }

    return true;
  };

  const handleChange = name => event => {
    setError('');
    setValues({ ...values, [name]: event.target.value });
  };

  const signup = async formValue => {
    try {
      if (isFormValid()) {
        const response = await api.post('/api/signup', formValue);
        if (typeof response.data === 'string') {
          return setError(response.data);
        }

        authenticate(response.data);
        setAuthorizedHeader();
        history.push('/user');
      }
    } catch (e) {
      setError('Failed to sign up');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    signup(values);
    setLoading(false);
  };
  return (
    <>
      {loading ? <Spinner /> : ''}
      <H2>Signup</H2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="NAME"
          value={name}
          onChange={handleChange('name')}
          data-cy="name"
        />
        <Input
          type="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={handleChange('email')}
          data-cy="email"
        />
        <Input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={handleChange('password')}
          data-cy="password"
        />
        <Input
          type="password"
          placeholder="PASSWORD COMFIRMATION"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          data-cy="passwordConfirmation"
        />
        <SigninButton type="submit">Sign Up Here</SigninButton>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ''}
      </Form>
    </>
  );
};

export default withRouter(Signup);

const H2 = styled.h2`
  font-size: 3rem;
  color: #eee;
  margin-top: 2rem;
`;

const Form = styled.form`
  width: 100%;
  padding: 30px 50px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 350px;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  letter-spacing: 1px;
  color: #eee;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  margin-bottom: 30px;
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
