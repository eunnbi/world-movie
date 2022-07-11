import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const getMovies = async (type, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return data.results;
};

export const getDetails = async ({ queryKey }) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${queryKey[1]}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  );
  return data;
};

export const getReviews = async ({ queryKey }) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${queryKey[1]}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const searchMovies = async ({ queryKey }) => {
  const query = queryKey[1];
  if (query === "") return [];
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${queryKey[1]}&page=1&include_adult=false`
  );
  return data.results;
};
