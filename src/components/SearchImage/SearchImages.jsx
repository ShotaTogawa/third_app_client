import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../../api';
import Spinner from '../Common/Spinner';
import Like from '../Like/Like';
import SearchBar from './SearchBar';

const SearchImages = ({ fetchResult }) => {
  return (
    <Wrapper>
      {fetchResult && typeof fetchResult === 'string' ? (
        <P>{fetchResult}</P>
      ) : (
        fetchResult.map(image => (
          <ImageCard key={image.id}>
            <ImageBox
              image={
                process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + image.photo_url
              }
            />
            <ImageDescription>
              <p>{image.description}</p>
            </ImageDescription>
            <ImageInfoBox>
              <Like
                likeCount={image.likeCount}
                isLiked={image.isLiked}
                photoId={image.id}
              />
            </ImageInfoBox>
          </ImageCard>
        ))
      )}
    </Wrapper>
  );
};

export default SearchImages;

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
