import React from 'react';
import styled from 'styled-components';
import NetfilxLogo from '../aseets/netflix_logo.svg';

const LogoContainer = styled.h1`
  width: 95px;
  height: 25px;
  margin-right: 25px;
  & > a {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${NetfilxLogo});
    background-size: 95px 25px;
    overflow: hidden;
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
