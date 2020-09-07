import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 0 4%;
`;

const Inner: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Inner;
