import axios from 'axios';
import { API_HOST, API_KEY } from '../redux/modules/constant';

export const api = axios.create({
  baseURL: API_HOST,
  params: {
    api_key: API_KEY,
    language: 'ko-KR',
  },
});

export const trendingApi = {
  allDay: () => api.get('/trending/all/day'),
  allWeek: () => api.get('/trending/all/week'),
  movieDay: () => api.get('/trending/movie/day'),
  movieWeek: () => api.get('/trending/movie/week'),
  tvDay: () => api.get('/trending/tv/day'),
  tvWeek: () => api.get('/trending/tv/week'),
};

export const moviesApi = {
  nowPlaying: () => api.get('/movie/now_playing'),
  topRated: () => api.get('/movie/top_rated'),
  detail: (id: number) =>
    api.get(`/movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
};

export const tvApi = {
  airingToday: () => api.get('/tv/airing_today'),
  topRated: () => api.get('/tv/top_rated'),
  detail: (id: number) =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
};

export const searchApi = {
  multiSearch: (keyword: string) =>
    api.get('/search/multi', {
      params: {
        query: keyword,
      },
    }),
};
