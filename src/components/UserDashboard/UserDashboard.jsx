import React, { useState } from "react";
import Profile from "./Profile/Profile";
import ImageLine from "./ImageLine/ImageLine";
import styled from "styled-components";
import Navbar from "./NavBar/Navbar";
import SideDrawer from "./NavBar/SideDrawer";
import BackDrop from "./NavBar/BackDrop";

const UserDashboard = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  return (
    <Wrapper>
      <Navbar setSideDrawerOpen={setSideDrawerOpen} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen ? <BackDrop click={setSideDrawerOpen} /> : ""}
      <Profile />
      <ImageLine />
    </Wrapper>
  );
};

export default UserDashboard;

const Wrapper = styled.div`
  height: 100%;
`;
