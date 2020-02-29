import React from "react";
import Profile from "./Profile/Profile";
import ImageLine from "./ImageLine/ImageLine";
import styled from "styled-components";

const UserDashboard = () => {
  return (
    <Wrapper>
      <Profile />
      <ImageLine />
    </Wrapper>
  );
};

export default UserDashboard;

const Wrapper = styled.div``;
