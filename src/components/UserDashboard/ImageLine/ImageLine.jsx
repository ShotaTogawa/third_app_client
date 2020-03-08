import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const ImageLine = () => {
  return (
    <Wrapper>
      <Image />
    </Wrapper>
  );
};

export default ImageLine;

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 10rem auto 2rem auto;
`;
