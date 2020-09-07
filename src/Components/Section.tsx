import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 30px;
  & > h2 {
    font-size: 15px;
    font-weight: 700;
    margin: 0 4% 20px 4%;
  }
`;

interface SectionTypes {
  title: string;
}

const Section: React.FC<SectionTypes> = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default Section;
