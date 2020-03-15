import React, { useState } from 'react';
import NavbarWrapper from '../UserDashboard/NavBar/NavbarWrapper';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import SearchImages from './SearchImages';
import SearchUsers from './SearchUsers';

const Search = () => {
  const [fetchResult, setFetchResult] = useState(null);
  const [searchItem, setSearchItem] = useState('user');

  const prepSearch = target => {
    setSearchItem(target);
    setFetchResult(null);
  };
  return (
    <NavbarWrapper>
      <Wrapper>
        <ButtonLine>
          <Button onClick={() => prepSearch('user')}>Search User</Button>
          <Button onClick={() => prepSearch('photos')}>Search Photo</Button>
        </ButtonLine>
        <SearchBar setFetchResult={setFetchResult} searchItem={searchItem} />
        {!fetchResult ? (
          <P>No result</P>
        ) : fetchResult && searchItem === 'photos' ? (
          <SearchImages fetchResult={fetchResult} />
        ) : (
          <SearchUsers fetchResult={fetchResult} />
        )}
      </Wrapper>
    </NavbarWrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 70rem;
  margin: 3rem auto 0 auto;
  padding-top: 5rem;
`;

const ButtonLine = styled.div`
  display: felx;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
`;

const P = styled.p`
  text-align: center;
  font-size: 2rem;
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

const H2 = styled.h2`
  text-align: center;
  font-size: 3rem;
`;
