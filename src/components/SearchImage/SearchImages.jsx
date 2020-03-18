import React from 'react';
import styled from 'styled-components';
import Like from '../Like/Like';
import userImage from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';

const SearchImages = ({ fetchResult }) => {
  return (
    <Wrapper>
      {fetchResult && typeof fetchResult === 'string' ? (
        <P>{fetchResult}</P>
      ) : (
        fetchResult.map(image => {
          const {
            id,
            photo_url,
            description,
            likeCount,
            isLiked,
            user_id,
            User
          } = image;
          console.log(image);
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
              </Link>
              <ImageInfoBox>
                <Like likeCount={likeCount} isLiked={isLiked} photoId={id} />
                <Link to={`/user/${user_id}`}>
                  {User.image ? (
                    <UserImage
                      image={
                        process.env.REACT_APP_S3_AVATAR_ACCESS_POINT +
                        User.image
                      }
                    />
                  ) : (
                    <DefaultUserImage src={userImage} />
                  )}
                </Link>
              </ImageInfoBox>
            </ImageCard>
          );
        })
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
  width: 30rem;
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
const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  background: url(${props => props.image});
  margin-right: 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;

const DefaultUserImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;

const P = styled.p`
  font-size: 2rem;
`;
