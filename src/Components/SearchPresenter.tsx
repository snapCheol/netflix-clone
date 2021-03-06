import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Section from './Section';
import { AsyncListState } from '../redux/modules/media/reducer';
import Loader from './Loader';
import { device } from '../styles/BreakPoint';

const SearchSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5%;
  & > div {
    width: 50%;
    margin-bottom: 20px;
    @media ${device.mobileM} {
      width: 33.3333%;
    }
    @media ${device.tablet} {
      width: 25%;
    }
    @media ${device.laptop} {
      width: 20%;
    }
  }
`;

const SearchPresenter = ({ loading, data, error }: AsyncListState) => {
  if (loading || !data) return <Loader />;
  if (error) return <p>에러 발생!</p>;
  return (
    <Section title="검색 결과">
      <SearchSection>
        {data?.map((media) => (
          <div>
            <ListItem
              mediaType={media.title ? 'movie' : 'tv'}
              key={media.id}
              id={media.id}
              data={media}
            />
          </div>
        ))}
      </SearchSection>
    </Section>
  );
};

export default SearchPresenter;
