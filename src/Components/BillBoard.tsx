import React from 'react';
import styled from 'styled-components';
import { MediaListType, bgImagePropsType } from '../redux/modules/types';
import Loader from './Loader';
import { IMAGE_PATH_PREFIX } from '../redux/modules/constant';
import { device } from '../styles/BreakPoint';

type BillBoardType = {
  loading: boolean;
  data: MediaListType | null;
};

const Container = styled.section`
  width: 100%;
  height: 60vh;
`;

const BillBoardBackground = styled.div<bgImagePropsType>`
  position: relative;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: 50% 50%;
  height: 100%;
`;

const BillBoardGradient = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
`;

const BillBoardContent = styled.div`
  position: absolute;
  bottom: 50px;
  padding: 5%;
  & h2 {
    margin-bottom: 30px;
    font-size: 20px;
  }
  & p {
    font-size: 13px;
  }

  @media ${device.tablet} {
    width: 50%;

    & h2 {
      margin-bottom: 40px;
      font-size: 30px;
    }
    & p {
      font-size: 18px;
    }
  }
`;

const BillBoard = ({ loading, data }: BillBoardType) => {
  console.log('data', data);
  if (loading) return <Loader />;
  if (!data) return null;
  return (
    <Container>
      <h2 className="a11yHidden">주요 컨텐츠 소개</h2>
      <BillBoardBackground
        bgImage={`${IMAGE_PATH_PREFIX}/original/${
          data.backdrop_path || data.poster_path
        }`}>
        <BillBoardGradient>
          <BillBoardContent>
            <h2>{data.title || data.name}</h2>
            <p>
              {data.overview.length > 140
                ? `${data.overview.substring(0, 140)}...`
                : data.overview}
            </p>
          </BillBoardContent>
        </BillBoardGradient>
      </BillBoardBackground>
    </Container>
  );
};

export default BillBoard;
