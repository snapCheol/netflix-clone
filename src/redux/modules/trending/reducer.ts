import produce from 'immer';
import {
  FETCH_TREND_ALL_DAY_REQUEST,
  FETCH_TREND_ALL_DAY_SUCCESS,
  FETCH_TREND_ALL_DAY_FAILURE,
  FETCH_TREND_ALL_WEEK_REQUEST,
  FETCH_TREND_ALL_WEEK_SUCCESS,
  FETCH_TREND_ALL_WEEK_FAILURE,
} from './actions';
import { TrendingListType } from '../../../api/types';

export interface TrendingAsyncState {
  loading: boolean;
  data: TrendingListType[] | null;
  error: Error | null;
}

export interface TrendingState {
  allDay: TrendingAsyncState;
  allWeek: TrendingAsyncState;
  movieDay: TrendingAsyncState;
  movieWeek: TrendingAsyncState;
  tvDay: TrendingAsyncState;
  tvWeek: TrendingAsyncState;
}

const initialState: TrendingState = {
  allDay: {
    loading: false,
    data: null,
    error: null,
  },
  allWeek: {
    loading: false,
    data: null,
    error: null,
  },
  movieDay: {
    loading: false,
    data: null,
    error: null,
  },
  movieWeek: {
    loading: false,
    data: null,
    error: null,
  },
  tvDay: {
    loading: false,
    data: null,
    error: null,
  },
  tvWeek: {
    loading: false,
    data: null,
    error: null,
  },
};

const reducer = (state = initialState, action: any) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_TREND_ALL_DAY_REQUEST:
        draft.allDay.loading = true;
        draft.allDay.data = null;
        draft.allDay.error = null;
        break;
      case FETCH_TREND_ALL_DAY_SUCCESS:
        draft.allDay.loading = false;
        draft.allDay.data = action.payload;
        draft.allDay.error = null;
        break;
      case FETCH_TREND_ALL_DAY_FAILURE:
        draft.allDay.loading = false;
        draft.allDay.data = null;
        draft.allDay.error = action.payload;
        break;
      case FETCH_TREND_ALL_WEEK_REQUEST:
        draft.allWeek.loading = true;
        draft.allWeek.data = null;
        draft.allWeek.error = null;
        break;
      case FETCH_TREND_ALL_WEEK_SUCCESS:
        draft.allWeek.loading = false;
        draft.allWeek.data = action.payload;
        draft.allWeek.error = null;
        break;
      case FETCH_TREND_ALL_WEEK_FAILURE:
        draft.allWeek.loading = false;
        draft.allWeek.data = null;
        draft.allWeek.error = action.payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
