import React from "react";
import styled from "styled-components";
import DrawerToggleButton from "./DrawerToggleButton";
import { withRouter } from "react-router-dom";
import { signout } from "../../Landing/Auth";

const Navbar = ({ setSideDrawerOpen, history }) => {
  return (
    <Header>
      <Nav>
        <ToggleButton>
          <DrawerToggleButton click={setSideDrawerOpen} />
        </ToggleButton>
        <Logo></Logo>
        <Spacer></Spacer>
        <NavigationItems>
          <ul>
            <li>Home</li>
            <li>Post</li>
            <li onClick={() => signout(history)}>Signuout</li>
          </ul>
        </NavigationItems>
      </Nav>
    </Header>
  );
};

export default withRouter(Navbar);

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 6rem;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;

const ToggleButton = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Logo = styled.div`
  margin-left: 0.5rem;
  @media (min-width: 769px) {
    margin-left: 0;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const NavigationItems = styled.div`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  & li {
    padding: 0 1rem;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
