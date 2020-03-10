import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../../../api';
import Spinner from '../../Common/Spinner';
import Comment from '../../Comment/Comment';

const OthersImages = ({ userId }) => {
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [photos, setPhotos] = useState(null);
  const [openComment, setOpenComment] = useState(false);

  useEffect(() => {
    const fetchImageData = async () => {
      const response = await api.get(
        `/api/photos/${userId}?limit=${limit}&offset=${offset}`
      );
      setPhotos(response.data);
    };
    fetchImageData();
  }, [userId]);

  return (
    <Wrapper>
      {!photos ? (
        <Spinner />
      ) : photos && typeof photos === 'string' ? (
        <P>{photos}</P>
      ) : (
        photos.map(image => (
          <ImageCard key={image.id}>
            <ImageBox
              image={
                process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + image.photo_url
              }
            />
            <ImageDescription>
              <p>{image.description}</p>
              {!openComment ? (
                <CommentButton onClick={() => setOpenComment(true)}>
                  comment
                </CommentButton>
              ) : (
                ''
              )}
            </ImageDescription>
            {openComment ? (
              <Comment image_id={image.id} setOpenComment={setOpenComment} />
            ) : (
              ''
            )}
          </ImageCard>
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

const CommentButton = styled.button`
  width: 10rem;
  height: 3rem;
  font-size: 1.5rem;
  padding: 0 1.5rem;
  margin-top: 3rem;
  cursor: pointer;
  border-radius: 5rem;
  background-color: #009aff;
  color: #fff;
  :hover {
    background: linear-gradient(
      rgba(41, 128, 185, 0.3),
      rgba(109, 213, 250, 0.8)
    );
  }
`;
