import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { MediaDetail, bgImagePropsType } from '../redux/modules/types';
import { IMAGE_PATH_PREFIX } from '../redux/modules/constant';

const Dimm = styled.div`
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
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  width: 850px;
  background-color: #181818;
  border-radius: 5px;
  overflow-y: auto;
`;

const DetailStillCut = styled.div<bgImagePropsType>`
  padding: 20% 0;
  background-color: orange;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: 50% 20%;
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
`;

const DetailContent = styled.div`
  padding: 5%;

  & h3 {
    font-size: 30px;
  }
  & p {
    margin-top: 50px;
    font-size: 20px;
  }
`;

type DetailModalType = {
  isDetailModalOpen: boolean;
  data: MediaDetail | null;
  closeModal: () => void;
};

const DetailModal = ({
  isDetailModalOpen,
  data,
  closeModal,
}: DetailModalType) => {
  if (!isDetailModalOpen) return null;
  return (
    <Dimm onClick={closeModal}>
      <ModalContainer>
        <DetailStillCut
          bgImage={`${IMAGE_PATH_PREFIX}/original${
            data?.backdrop_path || data?.poster_path
          }`}
        />
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
