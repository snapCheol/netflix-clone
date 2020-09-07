export const FETCH_TREND_ALL_DAY_REQUEST = 'trending/FETCH_TREND_ALL_DAY_REQUEST' as const;
export const FETCH_TREND_ALL_DAY_SUCCESS = 'trending/FETCH_TREND_ALL_DAY_SUCCESS' as const;
export const FETCH_TREND_ALL_DAY_FAILURE = 'trending/FETCH_TREND_ALL_DAY_FAILURE' as const;

export const FETCH_TREND_ALL_WEEK_REQUEST = 'trending/FETCH_TREND_ALL_WEEK_REQUEST' as const;
export const FETCH_TREND_ALL_WEEK_SUCCESS = 'trending/FETCH_TREND_ALL_WEEK_SUCCESS' as const;
export const FETCH_TREND_ALL_WEEK_FAILURE = 'trending/FETCH_TREND_ALL_WEEK_FAILURE' as const;

export const FETCH_TREND_MOVIE_DAY_REQUEST = 'trending/FETCH_TREND_MOVIE_DAY_REQUEST' as const;
export const FETCH_TREND_MOVIE_DAY_SUCCESS = 'trending/FETCH_TREND_MOVIE_DAY_SUCCESS' as const;
export const FETCH_TREND_MOVIE_DAY_FAILURE = 'trending/FETCH_TREND_MOVIE_DAY_FAILURE' as const;

export const FETCH_TREND_MOVIE_WEEK_REQUEST = 'trending/FETCH_TREND_MOVIE_WEEK_REQUEST' as const;
export const FETCH_TREND_MOVIE_WEEK_SUCCESS = 'trending/FETCH_TREND_MOVIE_WEEK_SUCCESS' as const;
export const FETCH_TREND_MOVIE_WEEK_FAILURE = 'trending/FETCH_TREND_MOVIE_WEEK_FAILURE' as const;

export const FETCH_TREND_TV_DAY_REQUEST = 'trending/FETCH_TREND_TV_DAY_REQUEST' as const;
export const FETCH_TREND_TV_DAY_SUCCESS = 'trending/FETCH_TREND_TV_DAY_SUCCESS' as const;
export const FETCH_TREND_TV_DAY_FAILURE = 'trending/FETCH_TREND_TV_DAY_FAILURE' as const;

export const FETCH_TREND_TV_WEEK_REQUEST = 'trending/FETCH_TREND_TV_WEEK_REQUEST' as const;
export const FETCH_TREND_TV_WEEK_SUCCESS = 'trending/FETCH_TREND_TV_WEEK_SUCCESS' as const;
export const FETCH_TREND_TV_WEEK_FAILURE = 'trending/FETCH_TREND_TV_WEEK_FAILURE' as const;

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
  type: FETCH_TREND_MOVIE_DAY_REQUEST,
});
export const fetchTrendTvDay = () => ({
  type: FETCH_TREND_TV_DAY_REQUEST,
});
export const fetchTrendTvWeek = () => ({
  type: FETCH_TREND_TV_WEEK_REQUEST,
});
