import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DetailContainer from '../Containers/DetailModalContainer';
import { RootState } from '../redux/modules';

const Container = styled.main`
  padding-top: 70px;
`;

const Main: React.FC = ({ children }) => {
  const { isDetailModalOpen } = useSelector((state: RootState) => state.media);
  useEffect(() => {
    const body = document.querySelector('body');
    if (body && isDetailModalOpen) {
      body.style.overflow = 'hidden';
    }
  }, [isDetailModalOpen]);

  return (
    <Container>
      {children}
      <DetailContainer />
    </Container>
  );
};

export default Main;
