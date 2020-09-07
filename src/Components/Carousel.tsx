import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  padding: 0 4%;
`;

const CarouselList: React.FC = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <>
      <SliderWrapper>
        <Slider {...settings}>{children}</Slider>
      </SliderWrapper>
    </>
  );
};

export default CarouselList;
