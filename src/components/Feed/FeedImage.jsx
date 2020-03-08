import React, { useState } from 'react';
import yoga from '../../assets/images/yoga.jpg';
import family from '../../assets/images/family.jpg';
import hiking from '../../assets/images/hiking.jpg';
import skiing from '../../assets/images/skiing.jpg';
import styled from 'styled-components';

const images = [yoga, family, hiking, skiing];

const Image = () => {
  return (
    <Wrapper>
      {images.map(image => (
        <ImageCard>
          <ImageBox image={image} />
          <ImageInfoBox>
            <Heart className="fas fa-heart"></Heart>
            <Name>Name</Name>
          </ImageInfoBox>
        </ImageCard>
      ))}
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ImageCard = styled.div`
  position: relative;
  width: 25rem;
  height: 25rem;
  margin: 1rem;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
    background-color: linear-gradient(
      rgba(150, 124, 124, 0.1),
      rgba(17, 17, 17, 0.3)
    );
  }
`;

const ImageBox = styled.img`
  width: 25rem;
  height: 25rem;
  background: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const ImageInfoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 25rem;
  height: 4rem;
  top: 21rem;
  left: 0;
`;

const Heart = styled.i`
  margin-left: 1.5rem;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-right: 1.5rem;
`;
