import React from "react";
import styled from "styled-components";

const BackDrop = ({ click }) => {
  return <Wrapper onClick={() => click(false)}></Wrapper>;
};

export default BackDrop;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
