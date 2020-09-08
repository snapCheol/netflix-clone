import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/modules';
import { fetchTrendAllDay, fetchTrendAllWeek } from '../redux/modules/media';
import HomePresenter from '../Components/HomePresenter';

const HomeContainer = () => {
  const {
    loading: trendAlldayLoading,
    data: trendAlldayData,
    error: trendAlldayError,
  } = useSelector((state: RootState) => state.media.allDay);

  const {
    loading: trendAllWeekLoading,
    data: trendAllWeekData,
    error: trendAllWeekError,
  } = useSelector((state: RootState) => state.media.allWeek);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendAllDay());
    dispatch(fetchTrendAllWeek());
  }, [dispatch]);

  return (
    <HomePresenter
      trendAlldayLoading={trendAlldayLoading}
      trendAlldayError={trendAlldayError}
      trendAlldayData={trendAlldayData}
      trendAllWeekLoading={trendAllWeekLoading}
      trendAllWeekData={trendAllWeekData}
      trendAllWeekError={trendAllWeekError}
    />
  );
};

export default HomeContainer;
