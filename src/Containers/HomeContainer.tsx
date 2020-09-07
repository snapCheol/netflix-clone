import React from 'react';
import Section from '../Components/Section';
import CarouselList from '../Components/CarouselList';

const HomeContainer = () => {
  return (
    <>
      <Section title="오늘 뜨는 콘텐츠">
        <CarouselList />
      </Section>
    </>
  );
};

export default HomeContainer;
