import React from 'react';
import styled from 'styled-components';

const DrawerToggleButton = ({ click }) => {
  return (
    <Button onClick={() => click(prevSideDrawerOpen => !prevSideDrawerOpen)}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Button>
  );
};

export default DrawerToggleButton;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.5rem;
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const Line = styled.div`
  width: 3rem;
  height: 0.2rem;
  background-color: rgba(109, 213, 250, 0.5);
`;
