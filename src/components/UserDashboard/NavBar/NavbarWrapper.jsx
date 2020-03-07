import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';

const NavbarWrapper = props => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  return (
    <Wrapper>
      <Navbar setSideDrawerOpen={setSideDrawerOpen} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen ? <BackDrop click={setSideDrawerOpen} /> : ''}
      {props.children}
    </Wrapper>
  );
};

export default NavbarWrapper;

const Wrapper = styled.div`
  height: 100%;
`;
