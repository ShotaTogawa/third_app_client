import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <H2>Login</H2>
      <Form className="sign-up-form">
        <Input type="email" placeholder="EMAIL ADDRESS" />
        <Input type="password" placeholder="PASSWORD" />
        <SigninButton type="button">Sign In Here</SigninButton>
      </Form>
    </>
  );
};

export default Login;

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
  font-family: "Oswald", sans-serif;
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
  font-family: "Roboto Condensed", sans-serif;
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
