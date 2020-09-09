import React from 'react';
import Section from './Section';
import ListItem from './ListItem';
import { MediaListType } from '../redux/modules/types';
import Carousel from './Carousel';
import Loader from './Loader';
import BillBoard from './BillBoard';

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
  if (trendMovieWeekLoading && topRatedMovieLoading) return <Loader />;
  if (trendMovieWeekError || topRatedMovieError) return <p>에러 발생!...</p>;
  return (
    <>
      <BillBoard
        loading={trendMovieWeekLoading}
        data={
          trendMovieWeekData &&
          trendMovieWeekData[Math.floor(Math.random() * 2)]
        }
      />
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
