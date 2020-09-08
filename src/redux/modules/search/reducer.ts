import produce from 'immer';
import { MediaListType } from '../types';
import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
} from './actions';

export interface SearchState {
  loading: boolean;
  data: MediaListType[] | null;
  error: Error | null;
}

const initialState: SearchState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action: any) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_SEARCH_REQUEST:
        draft.loading = true;
        draft.data = null;
        draft.error = null;
        break;
      case FETCH_SEARCH_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        draft.error = null;
        break;
      case FETCH_SEARCH_FAILURE:
        draft.loading = false;
        draft.data = null;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
