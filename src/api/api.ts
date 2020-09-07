import axios from 'axios';

const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9a520f9c7db1b6f3818d5ae46bd7c57e',
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
