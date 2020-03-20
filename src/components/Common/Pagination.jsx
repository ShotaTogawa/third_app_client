import React, { useState } from 'react';
import styled from 'styled-components';

const Pagination = ({ limit, offset, setOffset, posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const offsetPlusOneIsMoreThanEqualPosts = posts <= offset + 1;
  const limitIsMoreThanPosts = posts < limit;
  const addPage = () => {
    if (offsetPlusOneIsMoreThanEqualPosts || limitIsMoreThanPosts) {
      return '';
    }

    setOffset(offset + limit);
    setCurrentPage(currentPage + 1);
  };

  const minusPage = () => {
    if (offset === 0) {
      return '';
    }
    setOffset(offset - limit);
    setCurrentPage(currentPage - 1);
  };

  const renderPagination = () => {
    return (
      <PaginationWrapper>
        <PaginationBlock>
          <Arrows onClick={minusPage}>❮</Arrows>
          <CurrentPage>{currentPage} Page</CurrentPage>
          <Arrows onClick={addPage}>❯</Arrows>
        </PaginationBlock>
      </PaginationWrapper>
    );
  };

  return posts > limit ? renderPagination() : '';
};

export default Pagination;

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const PaginationBlock = styled.div`
  display: inline-block;
  text-align: center;
`;

const CurrentPage = styled.span`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border-bottom: 0.1rem solid #000;
`;

const Arrows = styled.span`
  color: black;
  float: left;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    color: #a7d7ee;
  }
`;
