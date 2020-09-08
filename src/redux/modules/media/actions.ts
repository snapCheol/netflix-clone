export const FETCH_TREND_ALL_DAY_REQUEST = 'media/FETCH_TREND_ALL_DAY_REQUEST' as const;
export const FETCH_TREND_ALL_DAY_SUCCESS = 'media/FETCH_TREND_ALL_DAY_SUCCESS' as const;
export const FETCH_TREND_ALL_DAY_FAILURE = 'media/FETCH_TREND_ALL_DAY_FAILURE' as const;

export const FETCH_TREND_ALL_WEEK_REQUEST = 'media/FETCH_TREND_ALL_WEEK_REQUEST' as const;
export const FETCH_TREND_ALL_WEEK_SUCCESS = 'media/FETCH_TREND_ALL_WEEK_SUCCESS' as const;
export const FETCH_TREND_ALL_WEEK_FAILURE = 'media/FETCH_TREND_ALL_WEEK_FAILURE' as const;

export const FETCH_TREND_MOVIE_DAY_REQUEST = 'media/FETCH_TREND_MOVIE_DAY_REQUEST' as const;
export const FETCH_TREND_MOVIE_DAY_SUCCESS = 'media/FETCH_TREND_MOVIE_DAY_SUCCESS' as const;
export const FETCH_TREND_MOVIE_DAY_FAILURE = 'media/FETCH_TREND_MOVIE_DAY_FAILURE' as const;

export const FETCH_TREND_MOVIE_WEEK_REQUEST = 'media/FETCH_TREND_MOVIE_WEEK_REQUEST' as const;
export const FETCH_TREND_MOVIE_WEEK_SUCCESS = 'media/FETCH_TREND_MOVIE_WEEK_SUCCESS' as const;
export const FETCH_TREND_MOVIE_WEEK_FAILURE = 'media/FETCH_TREND_MOVIE_WEEK_FAILURE' as const;

export const FETCH_TREND_TV_DAY_REQUEST = 'media/FETCH_TREND_TV_DAY_REQUEST' as const;
export const FETCH_TREND_TV_DAY_SUCCESS = 'media/FETCH_TREND_TV_DAY_SUCCESS' as const;
export const FETCH_TREND_TV_DAY_FAILURE = 'media/FETCH_TREND_TV_DAY_FAILURE' as const;

export const FETCH_TREND_TV_WEEK_REQUEST = 'media/FETCH_TREND_TV_WEEK_REQUEST' as const;
export const FETCH_TREND_TV_WEEK_SUCCESS = 'media/FETCH_TREND_TV_WEEK_SUCCESS' as const;
export const FETCH_TREND_TV_WEEK_FAILURE = 'media/FETCH_TREND_TV_WEEK_FAILURE' as const;

export const FETCH_TOP_RATED_MOVIE_REQUEST = 'media/FETCH_TOP_RATED_MOVIE_REQUEST' as const;
export const FETCH_TOP_RATED_MOVIE_SUCCESS = 'media/FETCH_TOP_RATED_MOVIE_SUCCESS' as const;
export const FETCH_TOP_RATED_MOVIE_FAILURE = 'media/FETCH_TOP_RATED_MOVIE_FAILURE' as const;

export const FETCH_TOP_RATED_TV_REQUEST = 'media/FETCH_TOP_RATED_TV_REQUEST' as const;
export const FETCH_TOP_RATED_TV_SUCCESS = 'media/FETCH_TOP_RATED_TV_SUCCESS' as const;
export const FETCH_TOP_RATED_TV_FAILURE = 'media/FETCH_TOP_RATED_TV_FAILURE' as const;

export const FETCH_DETAIL_REQUEST = 'media/FETCH_DETAIL_REQUEST';
export const FETCH_DETAIL_SUCCESS = 'media/FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILURE = 'media/FETCH_DETAIL_FAILURE';

export const fetchTrendAllDay = () => ({
  type: FETCH_TREND_ALL_DAY_REQUEST,
});
export const fetchTrendAllWeek = () => ({
  type: FETCH_TREND_ALL_WEEK_REQUEST,
});
export const fetchTrendMovieDay = () => ({
  type: FETCH_TREND_MOVIE_DAY_REQUEST,
});
export const fetchTrendMovieWeek = () => ({
  type: FETCH_TREND_MOVIE_WEEK_REQUEST,
});
export const fetchTrendTvDay = () => ({
  type: FETCH_TREND_TV_DAY_REQUEST,
});
export const fetchTrendTvWeek = () => ({
  type: FETCH_TREND_TV_WEEK_REQUEST,
});
export const fetchTopRatedMovie = () => ({
  type: FETCH_TOP_RATED_MOVIE_REQUEST,
});
export const fetchTopRatedTv = () => ({
  type: FETCH_TOP_RATED_TV_REQUEST,
});
export const fetchDetail = () => ({
  type: FETCH_DETAIL_REQUEST,
});
