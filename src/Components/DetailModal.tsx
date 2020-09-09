import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import {
  MediaDetail,
  bgImagePropsType,
  ModalAnimationType,
} from '../redux/modules/types';
import { IMAGE_PATH_PREFIX } from '../redux/modules/constant';
import { fadeIn, scaleUp, scaleDown, fadeOut } from '../styles/Animation';
import { device } from '../styles/BreakPoint';
import Loader from './Loader';

const Dimm = styled.div<ModalAnimationType>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  overflow-y: auto;
  transition: all 1s ease;

  animation-duration: 0.25s;
  animation-timing-function: ease-in;
  animation-name: ${fadeIn};

  ${(props) =>
    props.modalAnimation &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const ModalContainer = styled.div<ModalAnimationType>`
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  width: 850px;
  max-width: 90%;
  background-color: #181818;
  border-radius: 5px;
  overflow-y: auto;

  animation-duration: 0.25s;
  animation-timing-function: ease-in;
  animation-name: ${scaleUp};
  animation-fill-mode: forwards;
  ${(props) =>
    props.modalAnimation &&
    css`
      animation-name: ${scaleDown};
    `}
`;

const DetailStillCut = styled.div<bgImagePropsType>`
  position: relative;
  padding: 20% 0;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: 50% 20%;
`;
const DetailStillCutBg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(to top, #181818, transparent 50%);
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 25px;
  color: #fff;
  background: #000;
  transform: scale(0.7);
  @media ${device.tablet} {
    transform: scale(1);
  }
`;

const DetailContent = styled.div`
  padding: 5%;

  & h3 {
    font-size: 16px;
    @media ${device.tablet} {
      font-size: 20px;
    }
    @media ${device.laptop} {
      font-size: 25px;
    }
  }
  & p {
    margin-top: 10px;
    font-size: 14px;
    @media ${device.tablet} {
      margin-top: 30px;
      font-size: 17px;
    }
    @media ${device.laptop} {
      margin-top: 50px;
    }
  }
`;

type DetailModalType = {
  isDetailModalOpen: boolean;
  loading: boolean;
  data: MediaDetail | null;
  closeModal: () => void;
};

const DetailModal = ({
  isDetailModalOpen,
  loading,
  data,
  closeModal,
}: DetailModalType) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(isDetailModalOpen);

  useEffect(() => {
    if (localVisible && !isDetailModalOpen) {
      setAnimate(true);
      window.setTimeout(() => {
        setAnimate(false);
      }, 250);
    }
    setLocalVisible(isDetailModalOpen);
  }, [animate, localVisible, isDetailModalOpen]);

  if (!data || (!localVisible && !animate)) return null;
  return (
    <Dimm onClick={closeModal} modalAnimation={!isDetailModalOpen}>
      <ModalContainer modalAnimation={!isDetailModalOpen}>
        {loading && !data && <Loader />}
        <DetailStillCut
          bgImage={`${IMAGE_PATH_PREFIX}/w500/${
            data.backdrop_path || data.poster_path
          }`}>
          <DetailStillCutBg />
        </DetailStillCut>

        <DetailContent>
          <h3>{data?.title || data?.name}</h3>
          <p>{data?.overview}</p>
        </DetailContent>
        <CloseButton type="button" onClick={closeModal}>
          <CloseOutlined />
        </CloseButton>
      </ModalContainer>
    </Dimm>
  );
};

export default DetailModal;
