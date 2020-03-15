import React, { useState } from 'react';
import styled from 'styled-components';
import { api } from '../../api';

const SearchBar = ({ setFetchResult, searchItem }) => {
  const [searchValue, setSearchValue] = useState('');
  const fetchData = async () => {
    if (!searchValue) return '';
    if (searchValue && searchItem === 'photos') {
      const response = await api.get(`/api/photo-search/?term=${searchValue}`);
      return setFetchResult(response.data);
    } else {
      const response = await api.get(`/api/user-search/?term=${searchValue}`);
      return setFetchResult(response.data);
    }
  };

  return (
    <Wrapper>
      <Search
        type="text"
        placeholder={`Search ${searchItem}`}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <SearchButton onClick={fetchData}>
        <Icon className="fas fa-search" />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  margin: 0 auto 3rem auto;
  max-width: 50rem;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
`;

const Search = styled.input`
  width: 85%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.8rem;
`;

const SearchButton = styled.div`
  background: #1da1f2;
  width: 10%;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
`;

const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  color: #fff;
`;
