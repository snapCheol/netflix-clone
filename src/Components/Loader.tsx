import React from 'react';
import styled from 'styled-components';
import LogoSpinImg from './../aseets/spinner.png';

const LoaderSpinner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);

  &:after {
    content: '';
    background-image: url(${LogoSpinImg});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
    position: absolute;
    margin: -6px;
    width: inherit;
    height: inherit;
    animation: nfLoader-spin 1.1s linear infinite, 1;
  }

  @keyframes nfLoader-spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return <LoaderSpinner />;
}

export default Loader;
