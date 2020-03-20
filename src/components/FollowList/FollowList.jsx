import React, { useState, useEffect } from 'react';
import NavbarWrapper from '../UserDashboard/NavBar/NavbarWrapper';
import styled from 'styled-components';
import FollowUser from './FollowUser';
import { api } from '../../api';

const FollowList = () => {
  const [fetchResult, setFetchResult] = useState(null);
  const [searchItem, setSearchItem] = useState('followee');

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/api/${searchItem}`);
      setFetchResult(response.data);
    };
    fetchData();
  }, [searchItem]);

  return (
    <NavbarWrapper>
      <Wrapper>
        <ButtonLine>
          <Button onClick={() => setSearchItem('followee')}>Follow</Button>
          <Button onClick={() => setSearchItem('follower')}>Follower</Button>
        </ButtonLine>
        {!fetchResult ? '' : <FollowUser fetchResult={fetchResult} />}
      </Wrapper>
    </NavbarWrapper>
  );
};

export default FollowList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80rem;
  margin: 3rem auto 0 auto;
  padding-top: 5rem;
`;

const ButtonLine = styled.div`
  display: felx;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  display: flex;
  margin: 0 3rem;
  font-size: 3rem;
  border: none;
  outline: none;
  border-bottom: 0.5rem solid #000;
  padding-bottom: 0.5rem;
  background-color: transparent;
  cursor: pointer;
  &: hover, active {
    color: #a4dbf1;
    border-bottom: 0.5rem solid #a4dbf1;
  }
`;
