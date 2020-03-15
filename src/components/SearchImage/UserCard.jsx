import React from 'react';
import styled from 'styled-components';
import userImage from '../../assets/images/user.svg';

const UserCard = () => {
  return (
    <Card>
      {/* <img src="images/img-top1.jpeg" class="image-top" /> */}
      <Back></Back>
      <ProfileImage src={userImage} />
      <H1>Jane Smith</H1>
      <AboutMe>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
        illum expedita, at distinctio nesciunt.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed natus illum expedita, at distinctio
        nesciunt."
      </AboutMe>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  width: 250px;
  height: 33rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Back = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(
    rgba(41, 128, 185, 0.3),
    rgba(109, 213, 250, 0.8)
  );
  object-fit: cover;
  margin-bottom: -1.5rem;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -120px;
  z-index: 10;
  border: 10px solid #eee;
`;

const H1 = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  color: #555;
  margin: 3rem 1rem 0 1rem;
`;

const AboutMe = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  width: 90%;
  margin: 15px 0;
  font-style: italic;
  color: #444;
  text-align: center;
`;
