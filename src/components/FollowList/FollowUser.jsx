import React from 'react';
import styled from 'styled-components';
import UserCard from '../SearchImage/UserCard';

const FollowUser = ({ fetchResult }) => {
  return (
    <Wrapper>
      {fetchResult.length === 0 ? (
        <P>No Result</P>
      ) : (
        fetchResult.map(user => <UserCard user={user} key={user.id} />)
      )}
    </Wrapper>
  );
};

export default FollowUser;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const P = styled.p`
  font-size: 2rem;
`;
