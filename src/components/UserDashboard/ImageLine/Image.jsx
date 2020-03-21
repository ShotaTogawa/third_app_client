import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import styled from 'styled-components';
import { api } from '../../../api';
import Spinner from '../../Common/Spinner';
import MyLike from '../../Like/MyLike';
import { setAuthorizedHeader } from '../../Landing/Auth';
import Pagination from '../../Common/Pagination';

const Image = ({ posts }) => {
  const [popupImage, setPopupImage] = useState(false);
  const [offset, setOffset] = useState(0);
  const [myPhotos, setMyPhotos] = useState(null);
  const [showImage, setShowImage] = useState([]);
  const limit = 3;

  useEffect(() => {
    setAuthorizedHeader();
    const fetchImageData = async () => {
      const response = await api.get(
        `/api/my-photos/?limit=${limit}&offset=${offset}`
      );
      setMyPhotos(response.data);
    };
    fetchImageData();
  }, [offset]);

  const handleDelete = async image_id => {
    await api.delete(`api/photo/${image_id}`);
    const response = await api.get(
      `/api/my-photos/?limit=${limit}&offset=${offset}`
    );
    setMyPhotos(response.data);
    setPopupImage(false);
  };

  const openModal = idx => {
    setPopupImage(true);
    setShowImage(myPhotos[idx]);
  };
  return (
    <ImageLineWrapper>
      <Wrapper>
        {!myPhotos ? (
          <Spinner />
        ) : myPhotos && typeof myPhotos === 'string' ? (
          <P>{myPhotos}</P>
        ) : (
          <>
            {myPhotos.map((image, idx) => {
              const { id, photo_url, likeCount } = image;
              return (
                <ImageCardWrapper key={id}>
                  <ImageBox
                    image={
                      process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + photo_url
                    }
                    onClick={() => openModal(idx)}
                  />
                  <ImageInfoBox>
                    <MyLike count={likeCount} />
                  </ImageInfoBox>
                </ImageCardWrapper>
              );
            })}
            <Modal
              popupImage={popupImage}
              onClose={() => setPopupImage(false)}
              handleDelete={() => handleDelete(showImage.id)}
            >
              <ImageCard modalInfo={showImage} />
            </Modal>
          </>
        )}
      </Wrapper>
      <Pagination
        limit={limit}
        offset={offset}
        setOffset={setOffset}
        posts={posts}
      />
    </ImageLineWrapper>
  );
};

export default Image;

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

const ImageCardWrapper = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  margin: 1rem;
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
  width: 30rem;
  height: 30rem;
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
  width: 30rem;
  height: 4rem;
  top: 25rem;
  left: 0;
`;

const P = styled.p`
  font-size: 2rem;
  margin-top: 10rem;
`;
