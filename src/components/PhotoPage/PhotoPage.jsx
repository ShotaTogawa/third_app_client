import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavbarWrapper from '../UserDashboard/NavBar/NavbarWrapper';
import Comment from '../Comment/Comment';
import styled from 'styled-components';
import { api } from '../../api';
import userImage from '../../assets/images/user.svg';
import Spinner from '../Common/Spinner';

const PhotoPage = ({ location }) => {
  const photoId = location.pathname.substring(7);

  const [user, setUser] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState();

  useEffect(() => {
    const fetchPhotoData = async () => {
      setLoading(true);
      const response = await api.get(`/api/photo/${photoId}`);
      setPhoto(response.data);
      setUser(response.data.User);
      setLoading(false);
    };
    const fetchComment = async () => {
      setLoading(true);
      const response = await api.get(`/api/comment/${photoId}`);
      setComments(response.data);
      setLoading(false);
    };
    fetchPhotoData();
    fetchComment();
  }, []);

  const { id, photo_url, description, User } = photo;
  const { name, image } = user;
  return loading ? (
    <Spinner />
  ) : (
    <NavbarWrapper>
      <Wrapper>
        <ImageBox>
          <Image
            image={
              !photo_url
                ? ''
                : process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + photo_url
            }
          />
        </ImageBox>
        <CommentBox>
          <UserInfo>
            <UserImage
              image={
                image
                  ? process.env.REACT_APP_S3_AVATAR_ACCESS_POINT + image
                  : userImage
              }
            />
            <Name>{name ? name : ''}</Name>
          </UserInfo>
          <Discription>{description}</Discription>
          <Comment
            id={id}
            setComment={setComment}
            comment={comment}
            comments={comments}
          />
        </CommentBox>
      </Wrapper>
    </NavbarWrapper>
  );
};

export default withRouter(PhotoPage);

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 10rem auto -10rem auto;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 40rem;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 40rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 5rem;
  margin: 1rem auto;
`;

const UserImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 1rem 1rem 0;
  background: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  border: 0.2rem solid rgba(109, 213, 250, 0.5);
`;

const Name = styled.h2`
  font-size: 4rem;
`;

const Discription = styled.p`
  font-size: 2rem;
  padding-left: 1.8rem;
`;
