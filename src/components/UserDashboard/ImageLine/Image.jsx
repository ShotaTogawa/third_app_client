import React, { useState, useEffect, Fragment } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import styled from 'styled-components';
import { api } from '../../../api';
import Spinner from '../../Common/Spinner';

const Image = () => {
  const [popupImage, setPopupImage] = useState(false);
  const [myPhotos, setMyPhotos] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      const response = await api.get('/api/my-photos/?limit=10&offset=0');
      setMyPhotos(response.data);
    };
    fetchImageData();
  }, []);
  return (
    <Wrapper>
      {!myPhotos ? (
        <Spinner />
      ) : myPhotos && typeof myPhotos === 'string' ? (
        <p>{myPhotos}</p>
      ) : (
        myPhotos.map(image => (
          <Fragment key={image.id}>
            <ImageBox
              key={image.id}
              image={
                process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + image.photo_url
              }
              onClick={e => setPopupImage(true)}
            />
            <Modal
              popupImage={popupImage}
              onClose={e => {
                setPopupImage(false);
              }}
            >
              <ImageCard myPhoto={image} />
            </Modal>
          </Fragment>
        ))
      )}
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
  opacity: 0.8;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
    background-color: linear-gradient(
      rgba(150, 124, 124, 0.1),
      rgba(17, 17, 17, 0.3)
    );
    opacity: 1;
  }
  margin-bottom: 2rem;
`;
