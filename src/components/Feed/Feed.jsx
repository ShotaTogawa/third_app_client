import React from 'react';
import NavbarWrapper from '../UserDashboard/NavBar/NavbarWrapper';
import styled from 'styled-components';
import FeedImage from './FeedImage';

const Feed = () => {
  return (
    <NavbarWrapper>
      <Wrapper>
        <FeedImage />
      </Wrapper>
    </NavbarWrapper>
  );
};

export default Feed;

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 10rem auto 2rem auto;
`;
