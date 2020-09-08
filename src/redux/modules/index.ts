import { combineReducers } from 'redux';
import media from './media';
import search from './search';
import { all } from 'redux-saga/effects';
import mediaSaga from './media/sagas';
import searchSaga from './search/sagas';

const rootReducer = combineReducers({
  media,
  search,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([mediaSaga(), searchSaga()]);
}
