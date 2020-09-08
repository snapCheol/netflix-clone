import { combineReducers } from 'redux';
import media from './media';
import { all } from 'redux-saga/effects';
import mediaSaga from './media/sagas';

const rootReducer = combineReducers({
  media,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([mediaSaga()]);
}
