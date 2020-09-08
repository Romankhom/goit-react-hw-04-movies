import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '?api_key=cff0af22b80c776aec1c17ab43adb9ad';

const fetchMoviesTrending = (
  category = 'trending',
  type = 'movie',
  time = 'day',
) => {
  const url = `${category}/${type}/${time}${KEY}`;
  return axios.get(url).then(response => response.data.results);
};

const fetchMovieWithId = id => {
  return axios.get(`/movie/${id}${KEY}`).then(response => response.data);
};

const fetchMovieSearch = search => {
  return axios
    .get(`/search/movie${KEY}&query=${search}`)
    .then(response => response.data);
};

const fetchMovieCast = id => {
  return axios
    .get(`/movie/${id}/credits${KEY}`)
    .then(response => response.data);
};

const fetchMovieReviews = id => {
  return axios
    .get(`/movie/${id}/reviews${KEY}`)
    .then(response => response.data);
};

export {
  fetchMoviesTrending,
  fetchMovieWithId,
  fetchMovieSearch,
  fetchMovieCast,
  fetchMovieReviews,
};
