import React from "react";
import Profile from "./Profile/Profile";
import styled from "styled-components";

const UserDashboard = () => {
  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  );
};

export default UserDashboard;

const Wrapper = styled.div`
  background-color: #fafafa;
`;
