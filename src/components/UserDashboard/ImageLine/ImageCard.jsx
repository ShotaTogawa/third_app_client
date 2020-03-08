import React from 'react';
import styled from 'styled-components';

const WorkCard = ({ myPhoto }) => {
  return (
    <Card>
      <div>
        <Image
          src={process.env.REACT_APP_S3_IMAGE_ACCESS_POINT + myPhoto.photo_url}
          alt={myPhoto.description}
        />
      </div>
      <ImageDetail>
        <AboutApp>{myPhoto.description}</AboutApp>
      </ImageDetail>
    </Card>
  );
};

export default WorkCard;

const Card = styled.div`
  width: 60rem;
  height: 30rem;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageDetail = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
`;

const AboutApp = styled.p`
  display: flex;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  width: 90%;
  margin: auto 2rem;
  font-style: italic;
  color: #444;
  text-align: left;
`;
