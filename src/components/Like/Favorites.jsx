import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../../api';
import Spinner from '../Common/Spinner';
import Like from './Like';
import { Link } from 'react-router-dom';
import Pagination from '../Common/Pagination';
import NavbarWrapper from '../UserDashboard/NavBar/NavbarWrapper';

const OthersImages = () => {
  const [offset, setOffset] = useState(0);
  const [photos, setPhotos] = useState(null);
  const [countPhotos, setCountPhotos] = useState(0);
  const limit = 5;

  useEffect(() => {
    const fetchImageData = async () => {
      const response = await api.get(
        `/api/favorites/?limit=${limit}&offset=${offset}`
      );
      setPhotos(response.data[0]);
      setCountPhotos(response.data[1].count);
    };
    fetchImageData();
  }, [offset]);

  return (
    <NavbarWrapper>
      <ImageLineWrapper>
        <Wrapper>
          {!photos ? (
            <Spinner />
          ) : photos && typeof photos === 'string' ? (
            <P>{photos}</P>
          ) : (
            photos.map(image => {
              const { id, photo_url, description, likeCount, isLiked } = image;
              return (
                <ImageCard key={id}>
                  <Link to={`/photo/${id}`}>
                    <ImageBox
                      image={
                        process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + photo_url
                      }
                    />
                    <ImageDescription>
                      <p>{description}</p>
                    </ImageDescription>
                    <ImageInfoBox>
                      <Like
                        likeCount={likeCount}
                        isLiked={isLiked}
                        photoId={id}
                      />
                    </ImageInfoBox>
                  </Link>
                </ImageCard>
              );
            })
          )}
        </Wrapper>
        <Pagination
          limit={limit}
          offset={offset}
          setOffset={setOffset}
          posts={countPhotos}
        />
      </ImageLineWrapper>
    </NavbarWrapper>
  );
};

export default OthersImages;

const ImageLineWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 10rem auto 2rem auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ImageCard = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  margin: 1rem;
  z-index: 500;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.03);
    background-color: linear-gradient(
      rgba(150, 124, 124, 0.1),
      rgba(17, 17, 17, 0.3)
    );
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
  top: 25rem;
  left: 0;
`;

const ImageBox = styled.img`
  position: relative;
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

const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const P = styled.p`
  font-size: 2rem;
`;
