import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../../api';
import Spinner from '../Common/Spinner';
import userImage from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';

const Image = () => {
  const [images, setImages] = useState(null);
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(
        `/api/photos/?limit=${limit}&offset=${offset}`
      );
      setImages(response.data);
    };
    fetchData();
  }, []);

  console.log(images);

  return (
    <Wrapper>
      {!images ? (
        <Spinner />
      ) : images.length > 0 ? (
        images.map(image => (
          <ImageCard key={image.id}>
            <ImageBox
              image={
                process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + image.photo_url
              }
            />
            <ImageInfoBox>
              <Heart className="fas fa-heart"></Heart>
              <Link to={`/user/${image.user_id}`}>
                {image.User.image ? (
                  <UserImage
                    image={
                      process.env.REACT_APP_S3_AVATAR_ACCESS_POINT +
                      image.User.image
                    }
                  />
                ) : (
                  <DefaultUserImage src={userImage} />
                )}
              </Link>
            </ImageInfoBox>
          </ImageCard>
        ))
      ) : (
        <P>You have not posted photos yet</P>
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

const ImageCard = styled.div`
  position: relative;
  width: 25rem;
  height: 25rem;
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

const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0 1rem 1rem 0;
  background: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;

const P = styled.p`
  font-size: 2rem;
  margin-top: 10rem;
`;

const DefaultUserImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0 1rem 1rem 0;
  border-radius: 50%;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;
