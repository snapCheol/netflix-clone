import { all, takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_TREND_ALL_DAY_REQUEST,
  FETCH_TREND_ALL_DAY_SUCCESS,
  FETCH_TREND_ALL_DAY_FAILURE,
  FETCH_TREND_ALL_WEEK_SUCCESS,
  FETCH_TREND_ALL_WEEK_FAILURE,
  FETCH_TREND_ALL_WEEK_REQUEST,
  FETCH_TREND_MOVIE_WEEK_SUCCESS,
  FETCH_TREND_MOVIE_WEEK_FAILURE,
  FETCH_TREND_MOVIE_WEEK_REQUEST,
  FETCH_TOP_RATED_MOVIE_SUCCESS,
  FETCH_TOP_RATED_MOVIE_FAILURE,
  FETCH_TOP_RATED_MOVIE_REQUEST,
  FETCH_TOP_RATED_TV_SUCCESS,
  FETCH_TOP_RATED_TV_FAILURE,
  FETCH_TOP_RATED_TV_REQUEST,
  FETCH_TREND_TV_WEEK_SUCCESS,
  FETCH_TREND_TV_WEEK_FAILURE,
  FETCH_TREND_TV_WEEK_REQUEST,
} from './actions';
import { trendingApi, moviesApi, tvApi } from '../../../api/api';

function* fetchAllDay() {
  try {
    const response = yield call(trendingApi.allDay);
    yield put({
      type: FETCH_TREND_ALL_DAY_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_TREND_ALL_DAY_FAILURE,
      payload: error,
    });
  }
}

function* fetchAllWeek() {
  try {
    const response = yield call(trendingApi.allWeek);
    yield put({
      type: FETCH_TREND_ALL_WEEK_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_TREND_ALL_WEEK_FAILURE,
      payload: error,
    });
  }
}

function* fetchMovieWeek() {
  try {
    const response = yield call(trendingApi.movieWeek);
    yield put({
      type: FETCH_TREND_MOVIE_WEEK_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_TREND_MOVIE_WEEK_FAILURE,
      payload: error,
    });
  }
}

function* fetchTvWeek() {
  try {
    const response = yield call(trendingApi.tvWeek);
    yield put({
      type: FETCH_TREND_TV_WEEK_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_TREND_TV_WEEK_FAILURE,
      payload: error,
    });
  }
}

function* fetchTopRatedMovie() {
  try {
    const response = yield call(moviesApi.topRated);
    yield put({
      type: FETCH_TOP_RATED_MOVIE_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_TOP_RATED_MOVIE_FAILURE,
      payload: error,
    });
  }
}

function* fetchTopRatedTv() {
  try {
    const response = yield call(tvApi.topRated);
    yield put({
      type: FETCH_TOP_RATED_TV_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_TOP_RATED_TV_FAILURE,
      payload: error,
    });
  }
}

export default function* mediaSaga() {
  yield all([
    takeEvery(FETCH_TREND_ALL_DAY_REQUEST, fetchAllDay),
    takeEvery(FETCH_TREND_ALL_WEEK_REQUEST, fetchAllWeek),
    takeEvery(FETCH_TREND_MOVIE_WEEK_REQUEST, fetchMovieWeek),
    takeEvery(FETCH_TREND_TV_WEEK_REQUEST, fetchTvWeek),
    takeEvery(FETCH_TOP_RATED_MOVIE_REQUEST, fetchTopRatedMovie),
    takeEvery(FETCH_TOP_RATED_TV_REQUEST, fetchTopRatedTv),
  ]);
}
