import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/modules';
import {
  fetchTrendMovieWeek,
  fetchTopRatedMovie,
} from '../redux/modules/media';
import MoviePresenter from '../Components/MoviePresenter';

const MovieContainer = () => {
  const {
    loading: trendMovieWeekLoading,
    data: trendMovieWeekData,
    error: trendMovieWeekError,
  } = useSelector((state: RootState) => state.media.movieWeek);

  const {
    loading: topRatedMovieLoading,
    data: topRatedMovieData,
    error: topRatedMovieError,
  } = useSelector((state: RootState) => state.media.topRatedMovie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendMovieWeek());
    dispatch(fetchTopRatedMovie());
  }, [dispatch]);

  return (
    <MoviePresenter
      trendMovieWeekLoading={trendMovieWeekLoading}
      trendMovieWeekData={trendMovieWeekData}
      trendMovieWeekError={trendMovieWeekError}
      topRatedMovieLoading={topRatedMovieLoading}
      topRatedMovieData={topRatedMovieData}
      topRatedMovieError={topRatedMovieError}
    />
  );
};

export default MovieContainer;
