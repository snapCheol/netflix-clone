import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  padding: 0 4%;
`;

const Carousel: React.FC = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
