import React from 'react';
import styled from 'styled-components';
import userImage from '../../assets/images/user.svg';

const UserCard = ({ user }) => {
  const { image, name, introduction } = user;
  return (
    <Card>
      <Back />
      {image ? (
        <ProfileImage
          src={process.env.REACT_APP_S3_AVATAR_ACCESS_POINT + image}
        />
      ) : (
        <ProfileImage src={userImage} />
      )}
      <H1>{name}</H1>
      <AboutMe>{introduction}</AboutMe>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  width: 230px;
  height: 28rem;
  margin: 1.5rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back = styled.div`
  width: 100%;
  height: 18rem;
  background: linear-gradient(
    rgba(41, 128, 185, 0.3),
    rgba(109, 213, 250, 0.8)
  );
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -155px;
  //   z-index: 10;
  border: 3px solid #eee;
`;

const H1 = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  color: #555;
  margin: 3rem 1rem 0 1rem;
  margin-bottom: 1.5rem;
`;

const AboutMe = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  width: 90%;
  //   margin: 15px 0;
  font-style: italic;
  color: #444;
  text-align: center;
`;
