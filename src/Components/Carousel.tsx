import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { breakPoint } from '../styles/BreakPoint';

const SliderWrapper = styled.div`
  padding: 0 4%;
`;

const Carousel: React.FC = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: breakPoint.mobileL,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: breakPoint.tablet,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: breakPoint.laptopL,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <>
      <SliderWrapper>
        <Slider {...settings}>{children}</Slider>
      </SliderWrapper>
    </>
  );
};

export default Carousel;
