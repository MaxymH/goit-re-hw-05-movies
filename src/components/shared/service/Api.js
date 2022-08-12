import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '48e59f58a9185405f58e5b1089c8261f',
  },
});

export const popularMovies = async () => {
  const { data } = await instance.get('/trending/movie/week');
  return data;
};

export const getMovieInfo = async id => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: {
      language: 'en - US',
    },
  });
  return data;
};

export const searchFilmByName = async (query, page = 1) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      page,
      language: 'en - US',
      include_adult: false,
      query,
    },
  });
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
