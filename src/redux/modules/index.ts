import { combineReducers } from 'redux';
import trending from './trending';
import { all } from 'redux-saga/effects';
import trendingSaga from './trending/sagas';

const rootReducer = combineReducers({
  trending,
});

export default rootReducer;

export function* rootSaga() {
  yield all([trendingSaga()]);
}
