import React from "react";
import styled from "styled-components";

const Signup = () => {
  return (
    <>
      <H2>Signup</H2>
      <Form className="sign-up-form">
        <Input type="text" placeholder="NAME" />
        <Input type="email" placeholder="EMAIL ADDRESS" />
        <Input type="password" placeholder="PASSWORD" />
        <Input type="password" placeholder="PASSWORD COMFIRMATION" />
        <SigninButton type="button">Sign Up Here</SigninButton>
      </Form>
    </>
  );
};

export default Signup;

const H2 = styled.h2`
  font-size: 3rem;
  color: #eee;
  margin-top: 2rem;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 30px 50px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 350px;
  font-family: "Oswald", sans-serif;
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
  font-family: "Roboto Condensed", sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;
