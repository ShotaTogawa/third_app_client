import React from 'react';
import styled from 'styled-components';
import Like from '../Like/Like';
import UserCard from './UserCard';

const SearchImages = ({ fetchResult }) => {
  return (
    <Wrapper>
      {fetchResult && typeof fetchResult === 'string' ? (
        <P>{fetchResult}</P>
      ) : (
        fetchResult.map(user => <UserCard user={user} key={user.id} />)
      )}
    </Wrapper>
  );
};

export default SearchImages;

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
