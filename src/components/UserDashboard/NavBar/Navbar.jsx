import React from 'react';
import styled from 'styled-components';
import DrawerToggleButton from './DrawerToggleButton';
import { withRouter } from 'react-router-dom';
import { signout } from '../../Landing/Auth';
import { Link } from 'react-router-dom';

const Navbar = ({ setSideDrawerOpen, history }) => {
  const LinkStyle = { color: 'inherit', textDecoration: 'inherit' };
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
            <Li>
              <Link to="/user" style={LinkStyle}>
                <i className="fas fa-home"></i>
              </Link>
            </Li>
            <Li>
              <Link to="/create" style={LinkStyle}>
                <i className="fas fa-plus"></i>
              </Link>
            </Li>
            <Li>
              <Link to="/feed" style={LinkStyle}>
                <i className="fas fa-stream"></i>
              </Link>
            </Li>
            <Li>
              <Link to="/favorites" style={LinkStyle}>
                <i className="far fa-star"></i>
              </Link>
            </Li>
            <Li>
              <Link to="/friends" style={LinkStyle}>
                <i className="fas fa-users"></i>
              </Link>
            </Li>
            <Li>
              <Link to="/search" style={LinkStyle}>
                <i className="fas fa-search-plus"></i>
              </Link>
            </Li>
            <Li onClick={() => signout(history)}>Logout</Li>
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
  margin-bottom: 3rem;
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

const Li = styled.li`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  &:hover,
  &:active {
    color: #009aff;
  }
`;
