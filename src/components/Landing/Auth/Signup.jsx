import React, { useState } from "react";
import styled from "styled-components";
import { ErrorMessage } from "../../Common/ErrorMessage";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    loading: "",
    error: ""
  });

  const { name, email, password, confirmPassword, loading, error } = values;

  const isFormEmpty = ({ name, email, password, confirmPassword }) => {
    return (
      !name.length ||
      !email.length ||
      !password.length ||
      !confirmPassword.length
    );
  };

  const checkPassword = ({ password, confirmPassword }) => {
    if (password && password === confirmPassword) return true;
    return false;
  };

  const isFormValid = () => {
    if (isFormEmpty(values)) {
      setValues({ ...values, error: "Please fill in all Fields" });
      console.log(error);
      return false;
    }
    if (!checkPassword(values))
      setValues({ ...values, error: "Password was wrong" });

    return true;
  };

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signup = async formValue => {
    isFormValid();
    try {
      return formValue;
      // const response = await api.post("/api/signin", formValue);
      // return response;
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup();
  };
  return (
    <>
      <H2>Signup</H2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="NAME"
          value={name}
          onChange={handleChange("name")}
        />
        <Input
          type="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={handleChange("email")}
        />
        <Input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={handleChange("password")}
        />
        <Input
          type="password"
          placeholder="PASSWORD COMFIRMATION"
          value={confirmPassword}
          onChange={handleChange("confirmPassword")}
        />
        <SigninButton type="submit">Sign Up Here</SigninButton>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
      </Form>
    </>
  );
};

export default Signup;

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
  :hover {
    background: linear-gradient(
      rgba(41, 128, 185, 0.3),
      rgba(109, 213, 250, 0.8)
    );
  }
`;
