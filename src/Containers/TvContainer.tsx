import React, { useEffect } from 'react';
import TvPresenter from '../Components/TvPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/modules';
import { fetchTopRatedTv, fetchTrendTvWeek } from '../redux/modules/media';

const TvContainer = () => {
  const {
    loading: trendTvWeekLoading,
    data: trendTvWeekData,
    error: trendTvWeekError,
  } = useSelector((state: RootState) => state.media.tvWeek);

  const {
    loading: topRatedTvLoading,
    data: topRatedTvData,
    error: topRatedTvError,
  } = useSelector((state: RootState) => state.media.topRatedTv);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendTvWeek());
    dispatch(fetchTopRatedTv());
  }, [dispatch]);

  return (
    <TvPresenter
      trendTvWeekLoading={trendTvWeekLoading}
      trendTvWeekData={trendTvWeekData}
      trendTvWeekError={trendTvWeekError}
      topRatedTvLoading={topRatedTvLoading}
      topRatedTvData={topRatedTvData}
      topRatedTvError={topRatedTvError}
    />
  );
};

export default TvContainer;
