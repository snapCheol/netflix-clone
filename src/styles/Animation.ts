import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
 from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const scaleDown = keyframes`
  from{
    transform: scale(1)
  }
  to{
    transform: scale(0)
  }
`;

export const scaleUp = keyframes`
  from{
    transform: scale(0.6)
  }
  to{
    transform: scale(1)
  }
`;
