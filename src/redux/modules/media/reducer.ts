import produce from 'immer';
import {
  FETCH_TREND_ALL_DAY_REQUEST,
  FETCH_TREND_ALL_DAY_SUCCESS,
  FETCH_TREND_ALL_DAY_FAILURE,
  FETCH_TREND_ALL_WEEK_REQUEST,
  FETCH_TREND_ALL_WEEK_SUCCESS,
  FETCH_TREND_ALL_WEEK_FAILURE,
  FETCH_TREND_MOVIE_WEEK_REQUEST,
  FETCH_TREND_MOVIE_WEEK_SUCCESS,
  FETCH_TREND_MOVIE_WEEK_FAILURE,
  FETCH_TOP_RATED_MOVIE_REQUEST,
  FETCH_TOP_RATED_MOVIE_SUCCESS,
  FETCH_TOP_RATED_MOVIE_FAILURE,
  FETCH_TOP_RATED_TV_REQUEST,
  FETCH_TOP_RATED_TV_SUCCESS,
  FETCH_TOP_RATED_TV_FAILURE,
  FETCH_TREND_TV_WEEK_REQUEST,
  FETCH_TREND_TV_WEEK_SUCCESS,
  FETCH_TREND_TV_WEEK_FAILURE,
  FETCH_DETAIL_MOVIE_REQUEST,
  FETCH_DETAIL_MOVIE_SUCCESS,
  FETCH_DETAIL_MOVIE_FAILURE,
  FETCH_DETAIL_TV_REQUEST,
  FETCH_DETAIL_TV_SUCCESS,
  FETCH_DETAIL_TV_FAILURE,
  OPEN_DETAIL_MODAL,
  CLOSE_DETAIL_MODAL,
} from './actions';
import { MediaListType, MediaDetail } from '../types';

export interface AsyncListState {
  loading: boolean;
  data: MediaListType[] | null;
  error: Error | null;
}

export interface AsyncDetailState {
  loading: boolean;
  data: MediaDetail | null;
  error: Error | null;
}

export interface MediaState {
  isDetailModalOpen: boolean;
  allDay: AsyncListState;
  allWeek: AsyncListState;
  movieDay: AsyncListState;
  movieWeek: AsyncListState;
  tvDay: AsyncListState;
  tvWeek: AsyncListState;
  topRatedMovie: AsyncListState;
  topRatedTv: AsyncListState;
  detailMedia: AsyncDetailState;
}

const initialState: MediaState = {
  isDetailModalOpen: false,
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
  topRatedMovie: {
    loading: false,
    data: null,
    error: null,
  },
  topRatedTv: {
    loading: false,
    data: null,
    error: null,
  },
  detailMedia: {
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
      case FETCH_TREND_MOVIE_WEEK_REQUEST:
        draft.movieWeek.loading = true;
        draft.movieWeek.data = null;
        draft.movieWeek.error = null;
        break;
      case FETCH_TREND_MOVIE_WEEK_SUCCESS:
        draft.movieWeek.loading = false;
        draft.movieWeek.data = action.payload;
        draft.movieWeek.error = null;
        break;
      case FETCH_TREND_MOVIE_WEEK_FAILURE:
        draft.movieWeek.loading = false;
        draft.movieWeek.data = null;
        draft.movieWeek.error = action.payload;
        break;
      case FETCH_TREND_TV_WEEK_REQUEST:
        draft.tvWeek.loading = true;
        draft.tvWeek.data = null;
        draft.tvWeek.error = null;
        break;
      case FETCH_TREND_TV_WEEK_SUCCESS:
        draft.tvWeek.loading = false;
        draft.tvWeek.data = action.payload;
        draft.tvWeek.error = null;
        break;
      case FETCH_TREND_TV_WEEK_FAILURE:
        draft.tvWeek.loading = false;
        draft.tvWeek.data = null;
        draft.tvWeek.error = action.payload;
        break;
      case FETCH_TOP_RATED_MOVIE_REQUEST:
        draft.topRatedMovie.loading = true;
        draft.topRatedMovie.data = null;
        draft.topRatedMovie.error = null;
        break;
      case FETCH_TOP_RATED_MOVIE_SUCCESS:
        draft.topRatedMovie.loading = false;
        draft.topRatedMovie.data = action.payload;
        draft.topRatedMovie.error = null;
        break;
      case FETCH_TOP_RATED_MOVIE_FAILURE:
        draft.topRatedMovie.loading = false;
        draft.topRatedMovie.data = null;
        draft.topRatedMovie.error = action.payload;
        break;
      case FETCH_TOP_RATED_TV_REQUEST:
        draft.topRatedTv.loading = true;
        draft.topRatedTv.data = null;
        draft.topRatedTv.error = null;
        break;
      case FETCH_TOP_RATED_TV_SUCCESS:
        draft.topRatedTv.loading = false;
        draft.topRatedTv.data = action.payload;
        draft.topRatedTv.error = null;
        break;
      case FETCH_TOP_RATED_TV_FAILURE:
        draft.topRatedTv.loading = false;
        draft.topRatedTv.data = null;
        draft.topRatedTv.error = action.payload;
        break;
      case FETCH_DETAIL_MOVIE_REQUEST:
        draft.detailMedia.loading = true;
        draft.detailMedia.data = null;
        draft.detailMedia.error = null;
        break;
      case FETCH_DETAIL_MOVIE_SUCCESS:
        draft.detailMedia.loading = false;
        draft.detailMedia.data = action.payload;
        draft.detailMedia.error = null;
        break;
      case FETCH_DETAIL_MOVIE_FAILURE:
        draft.detailMedia.loading = false;
        draft.detailMedia.data = null;
        draft.detailMedia.error = action.payload;
        break;
      case FETCH_DETAIL_TV_REQUEST:
        draft.detailMedia.loading = true;
        draft.detailMedia.data = null;
        draft.detailMedia.error = null;
        break;
      case FETCH_DETAIL_TV_SUCCESS:
        draft.detailMedia.loading = false;
        draft.detailMedia.data = action.payload;
        draft.detailMedia.error = null;
        break;
      case FETCH_DETAIL_TV_FAILURE:
        draft.detailMedia.loading = false;
        draft.detailMedia.data = null;
        draft.detailMedia.error = action.payload;
        break;
      case OPEN_DETAIL_MODAL:
        draft.isDetailModalOpen = true;
        break;
      case CLOSE_DETAIL_MODAL:
        draft.isDetailModalOpen = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
