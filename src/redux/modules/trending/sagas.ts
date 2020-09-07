import { all, takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_TREND_ALL_DAY_REQUEST,
  FETCH_TREND_ALL_DAY_SUCCESS,
  FETCH_TREND_ALL_DAY_FAILURE,
} from './actions';
import { trendingApi } from '../../../api/api';

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

export default function* trendingSaga() {
  yield all([takeEvery(FETCH_TREND_ALL_DAY_REQUEST, fetchAllDay)]);
}
