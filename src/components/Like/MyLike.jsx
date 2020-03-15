import React, { useState } from 'react';
import styled from 'styled-components';

const Like = ({ count }) => {
  return (
    <LikeWrapper>
      <Heart className="fas fa-heart" />
      <Count>{count}</Count>
    </LikeWrapper>
  );
};

export default Like;

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Count = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  margin-left: 0.5rem;
`;

const Heart = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 1.5rem;
  font-size: 2rem;
  color: red;
`;
