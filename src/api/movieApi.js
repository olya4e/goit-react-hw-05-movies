import axios from 'axios';
import { API_KEY, MEDIA_TYPE, TIME_WINDOW } from '../constants/constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovie = async () => {
  const response = await axios.get(`trending/${MEDIA_TYPE}/${TIME_WINDOW}`, {
    params: { api_key: API_KEY },
  });
  return response;
};

export const fetchMovieByQuery = async searchQuery => {
  const response = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
    },
  });
  return response;
};

export const searchMovieById = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};
export const fetchCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
};
