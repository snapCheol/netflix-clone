import React from 'react';
import styled from 'styled-components';
import Inner from './Inner';
import Logo from './Logo';
import Navigation from './Navigation';
import FuncMenu from './FuncMenu';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #000;
  z-index: 999;
  & > div {
    position: relative;
    height: 100%;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <Container>
      <Inner>
        <Logo />
        <Navigation />
        <FuncMenu />
      </Inner>
    </Container>
  );
};

export default Header;
