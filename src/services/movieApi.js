import axios from 'axios';
import { BASE_URL, API_KEY } from '../links';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = 'bc3d1b0213f5ed383599707ca231cb4d';

const moviePopApi = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const movieSearchApi = query => {
  return axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&&query=${query}`)
    .then(response => response.data);
};

const movieDetail = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const movieCredits = movieId => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(response => response.data);
};

const movieReviews = movieId => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
    )
    .then(response => response.data);
};

export { moviePopApi, movieSearchApi, movieDetail, movieCredits, movieReviews };
