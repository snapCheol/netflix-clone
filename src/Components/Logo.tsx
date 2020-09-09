import React from 'react';
import styled from 'styled-components';
import NetfilxLogo from '../aseets/netflix_logo.svg';
import { device } from '../styles/BreakPoint';

const LogoContainer = styled.h1`
  width: 95px;
  height: 25px;
  margin-left: -20px;

  transform: scale(0.6);
  & > a {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${NetfilxLogo});
    background-size: 95px 25px;
    overflow: hidden;
  }
  @media ${device.tablet} {
    transform: scale(1);
    margin-left: 0;
    margin-right: 25px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <a href="/">
        <span className="a11yHidden"> NETFILX</span>
      </a>
    </LogoContainer>
  );
};

export default Logo;
