import styled from 'styled-components';
import { bgImagePropsType } from '../redux/modules/types';

export const CardContainer = styled.div`
  position: relative;
`;
export const StillCut = styled.figure<bgImagePropsType>`
  position: relative;
  width: 100%;
  padding: 70% 0;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px;
  overflow: hidden;
`;

export const Container = styled.a`
  display: block;
  width: 100%;
  position: relative;
  padding: 0 2%;
  outline: none;
  border-radius: 5px;
  &:hover,
  &:focus {
    ${StillCut} {
    }
  }
`;

export const Title = styled.strong`
  display: block;
  margin-top: 3px;
  font-size: 14px;
`;

type PreviewFocusType = {
  hover: boolean;
};

export const PreviewContainer = styled.div<PreviewFocusType>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10%;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.hover ? 1 : 0)};

  transition: 0.3s ease-in-out;
  & > strong {
    display: block;
    width: 100%;
    font-size: 20px;
    word-break: break-all;
  }
`;

export const Overview = styled.p`
  margin-top: 30px;
  font-size: 13px;

  .blank {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
