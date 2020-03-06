import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import yoga from '../../../assets/images/yoga.jpg';
import family from '../../../assets/images/family.jpg';
import hiking from '../../../assets/images/hiking.jpg';
import skiing from '../../../assets/images/skiing.jpg';
import styled from 'styled-components';

const images = [yoga, family, hiking, skiing];

const Image = () => {
  const [popupImage, setPopupImage] = useState(false);
  return (
    <Wrapper>
      {images.map(image => (
        <ImageBox image={image} onClick={e => setPopupImage(true)} />
      ))}

      <Modal
        popupImage={popupImage}
        onClose={e => {
          setPopupImage(false);
        }}
      >
        <ImageCard />
      </Modal>
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

const ImageBox = styled.img`
  width: 30rem;
  height: 30rem;
  background: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-color: linear-gradient(
      rgba(150, 124, 124, 0.1),
      rgba(17, 17, 17, 0.3)
    );
  }
  margin-bottom: 2rem;
`;
