import React from "react";
import styled from "styled-components";
import yoga from "../../../assets/images/yoga.jpg";

const WorkCard = () => {
  return (
    <Card>
      <div>
        <Image src={yoga} alt="yoga" />
      </div>
      <ImageDetail>
        <H1>Yoga</H1>
        <AboutApp>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </AboutApp>
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

const H1 = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 2.5rem;
  color: #555;
  margin-top: 5rem;
`;

const Image = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
`;

const AboutApp = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-style: italic;
  color: #444;
  text-align: left;
`;
