import { all, takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
} from './actions';
import { searchApi } from '../../../api/api';

function* fetchSearchSaga(action: any) {
  try {
    const response = yield call(searchApi.multiSearch, action.payload);
    yield put({
      type: FETCH_SEARCH_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({
      type: FETCH_SEARCH_FAILURE,
      payload: error,
    });
  }
}

export default function* searchSaga() {
  yield all([takeEvery(FETCH_SEARCH_REQUEST, fetchSearchSaga)]);
}
