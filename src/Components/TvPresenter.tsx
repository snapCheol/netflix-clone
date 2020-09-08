import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import { MediaListType } from '../redux/modules/types';
import Carousel from './Carousel';

type TvPresenterTypes = {
  trendTvWeekLoading: boolean;
  trendTvWeekData: MediaListType[] | null;
  trendTvWeekError: Error | null;
  topRatedTvLoading: boolean;
  topRatedTvData: MediaListType[] | null;
  topRatedTvError: Error | null;
};

const TvPresenter = ({
  trendTvWeekLoading,
  trendTvWeekData,
  trendTvWeekError,
  topRatedTvLoading,
  topRatedTvData,
  topRatedTvError,
}: TvPresenterTypes) => {
  return (
    <>
      <Section title="지금 뜨는 TV프로그램">
        <Carousel>
          {trendTvWeekData?.map((media) => (
            <ListItem
              mediaType={media.title ? 'movie' : 'tv'}
              key={media.id}
              id={media.id}
              data={media}
            />
          ))}
        </Carousel>
      </Section>
      <Section title="평점이 높은 TV프로그램">
        <Carousel>
          {topRatedTvData?.map((media) => (
            <ListItem
              mediaType={media.title ? 'movie' : 'tv'}
              key={media.id}
              id={media.id}
              data={media}
            />
          ))}
        </Carousel>
      </Section>
    </>
  );
};

export default TvPresenter;
