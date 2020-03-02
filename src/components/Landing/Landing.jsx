import React, { useState } from "react";
import styled from "styled-components";
import Slideview from "./SlideView/SlideView";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Modal from "./Auth/Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState("");

  const openModal = form => {
    setIsOpen(true);
    setForm(form);
  };

  return (
    <Container>
      <Slideview />
      <SideMenu>
        <H2>
          Take Pictures And <br />
          Share Your Moments
        </H2>
        <P>Join now!</P>
        <SigninButton onClick={e => openModal("signin")}>Signin</SigninButton>
        <SignupButton onClick={e => openModal("signout")}>Signup</SignupButton>
      </SideMenu>
      <Modal
        isOpen={isOpen}
        onClose={e => {
          setIsOpen(false);
        }}
      >
        {form && form === "signin" ? <Login /> : <Signup />}
      </Modal>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100vh;
  background-color: #f8f9fa;
`;

const P = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 40%;
  margin-bottom: 3rem;
  font-size: 3rem;
`;

const SigninButton = styled.button`
  margin: 0 auto 2rem auto;
  width: 40%;
  padding: 5px 0;
  font-size: 2rem;
  border-radius: 1.8rem;
  background-color: #ff8d8e;
  border: 0.1rem solid #ff8d8e;
  color: #fff;
  cursor: pointer;
`;

const SignupButton = styled.button`
  margin: 0 auto;
  width: 40%;
  padding: 5px 0;
  font-size: 2rem;
  border-radius: 1.8rem;
  border: 0.1rem solid #ff8d8e;
  color: #ff8d8e;
  cursor: pointer;
`;
