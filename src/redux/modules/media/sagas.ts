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
  FETCH_DETAIL_MOVIE_REQUEST,
  FETCH_DETAIL_TV_REQUEST,
  FETCH_DETAIL_MOVIE_FAILURE,
  FETCH_DETAIL_MOVIE_SUCCESS,
  FETCH_DETAIL_TV_SUCCESS,
  FETCH_DETAIL_TV_FAILURE,
} from './actions';
import { trendingApi, moviesApi, tvApi } from '../../../api/api';

function* fetchAllDaySaga() {
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

function* fetchAllWeekSaga() {
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

function* fetchMovieWeekSaga() {
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

function* fetchTvWeekSaga() {
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

function* fetchTopRatedMovieSaga() {
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

function* fetchTopRatedTvSaga() {
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

function* fetchDetailMovieSaga(action: any) {
  try {
    const response = yield call(moviesApi.detail, action.id);
    yield put({
      type: FETCH_DETAIL_MOVIE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_DETAIL_MOVIE_FAILURE,
      payload: error,
    });
  }
}

function* fetchDetailTvSaga(action: any) {
  try {
    const response = yield call(tvApi.detail, action.id);
    yield put({
      type: FETCH_DETAIL_TV_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_DETAIL_TV_FAILURE,
      payload: error,
    });
  }
}

export default function* mediaSaga() {
  yield all([
    takeEvery(FETCH_TREND_ALL_DAY_REQUEST, fetchAllDaySaga),
    takeEvery(FETCH_TREND_ALL_WEEK_REQUEST, fetchAllWeekSaga),
    takeEvery(FETCH_TREND_MOVIE_WEEK_REQUEST, fetchMovieWeekSaga),
    takeEvery(FETCH_TREND_TV_WEEK_REQUEST, fetchTvWeekSaga),
    takeEvery(FETCH_TOP_RATED_MOVIE_REQUEST, fetchTopRatedMovieSaga),
    takeEvery(FETCH_TOP_RATED_TV_REQUEST, fetchTopRatedTvSaga),
    takeEvery(FETCH_DETAIL_MOVIE_REQUEST, fetchDetailMovieSaga),
    takeEvery(FETCH_DETAIL_TV_REQUEST, fetchDetailTvSaga),
  ]);
}
