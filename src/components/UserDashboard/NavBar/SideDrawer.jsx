import React from "react";
import styled from "styled-components";

const SideDrawer = ({ show }) => {
  console.log(show);
  return (
    <Nav open={show}>
      <ul>
        <li>Home</li>
        <li>Post</li>
        <li>Signout</li>
      </ul>
    </Nav>
  );
};

export default SideDrawer;

const Nav = styled.nav`
  height: 100%;
  background: #fff;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 30rem;
  z-index: 200;
  transform: ${props => (props.open ? `translateX(0)` : `translateX(-100%)`)};
  transition: transform 0.3s ease-out;
  background-color: #eee;
  & ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & li {
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    &:hover,
    &:active {
      color: rgba(109, 213, 250, 0.5);
    }
  }
  @media (min-width: 760px) {
    dispaly: none;
  }
`;
