import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { api } from '../../../api';
import Spinner from '../../Common/Spinner';

const OthersImages = ({ userId }) => {
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      const response = await api.get(
        `/api/photos/${userId}?limit=${limit}&offset=${offset}`
      );
      setPhotos(response.data);
    };
    fetchImageData();
  }, []);

  return (
    <Wrapper>
      {!photos ? (
        <Spinner />
      ) : photos && typeof photos === 'string' ? (
        <P>{photos}</P>
      ) : (
        photos.map(image => (
          <ImageBox
            key={image.id}
            image={
              process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + image.photo_url
            }
          />
        ))
      )}
    </Wrapper>
  );
};

export default OthersImages;

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

const P = styled.p`
  font-size: 2rem;
`;
