import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import skiingImage from "../../../assets/images/skiing.jpg";
import travelImage from "../../../assets/images/travel.jpg";
import yogaImage from "../../../assets/images/yoga.jpg";
import familyImage from "../../../assets/images/family.jpg";
import hikingImage from "../../../assets/images/hiking.jpg";

const Wrapper = styled.div`
  width: 50%;
`;

const Images = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(150, 124, 124, 0.1), rgba(17, 17, 17, 0.3)),
    url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SlideView = () => {
  return (
    <Wrapper>
      <Slider
        speed={1500}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        cssEase="linear"
        autoplay={true}
        autoplaySpeed={3000}
      >
        <Images image={familyImage}></Images>
        <Images image={hikingImage}></Images>
        <Images image={travelImage}></Images>
        <Images image={skiingImage}></Images>
        <Images image={yogaImage}></Images>
      </Slider>
    </Wrapper>
  );
};

export default SlideView;
