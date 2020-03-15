import React from 'react';
import OtherUserProfile from './OtherUserDashboard/OtherUserProfile';
import OthersImages from './OtherUserDashboard/OthersImages';
import NavbarWrapper from './NavBar/NavbarWrapper';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const OtherUserDashboard = ({ location }) => {
  const userId = location.pathname.substring(6);
  return (
    <NavbarWrapper>
      <OtherUserProfile userId={userId} />
      <Wrapper>
        <OthersImages userId={userId} />
      </Wrapper>
    </NavbarWrapper>
  );
};

export default withRouter(OtherUserDashboard);

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 10rem auto 2rem auto;
`;
