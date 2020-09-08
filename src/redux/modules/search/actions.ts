export const FETCH_SEARCH_REQUEST = 'search/FETCH_SEARCH_REQUEST' as const;
export const FETCH_SEARCH_SUCCESS = 'search/FETCH_SEARCH_SUCCESS' as const;
export const FETCH_SEARCH_FAILURE = 'search/FETCH_SEARCH_FAILURE' as const;

export const fetchSearch = (keyword: string) => ({
  type: FETCH_SEARCH_REQUEST,
  payload: keyword,
});
