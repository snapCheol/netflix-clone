import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import { MediaListType } from '../redux/modules/types';
import Carousel from './Carousel';

type MoviePresenterTypes = {
  trendMovieWeekLoading: boolean;
  trendMovieWeekData: MediaListType[] | null;
  trendMovieWeekError: Error | null;
  topRatedMovieLoading: boolean;
  topRatedMovieData: MediaListType[] | null;
  topRatedMovieError: Error | null;
};

const MoviePresenter = ({
  trendMovieWeekLoading,
  trendMovieWeekData,
  trendMovieWeekError,
  topRatedMovieLoading,
  topRatedMovieData,
  topRatedMovieError,
}: MoviePresenterTypes) => {
  return (
    <>
      <Section title="지금 뜨는 영화">
        <Carousel>
          {trendMovieWeekData?.map((media) => (
            <ListItem
              mediaType={media.title ? 'movie' : 'tv'}
              key={media.id}
              id={media.id}
              data={media}
            />
          ))}
        </Carousel>
      </Section>
      <Section title="평점이 높은 영화">
        <Carousel>
          {topRatedMovieData?.map((media) => (
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

export default MoviePresenter;
