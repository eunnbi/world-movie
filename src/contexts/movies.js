import { createContext, useEffect, useState } from "react";
import { getMovies } from "../lib/api";

const MOVIE_TYPE = ["now_playing", "popular", "top_rated"];

export const moviesContext = createContext({
  loading: false,
  popular: [],
  top_rated: [],
  now_playing: [],
});

const MoviesProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({
    now_playing: [],
    top_rated: [],
    popular: [],
  });
  const value = {
    loading,
    movies,
  };

  useEffect(() => {
    setLoading(true);
    MOVIE_TYPE.forEach((type) => {
      for (let page = 1; page <= 10; page++) {
        getMovies(type, page).then((data) => {
          setMovies((prevMovies) => ({
            ...prevMovies,
            [type]: prevMovies[type].concat(data),
          }));
        });
      }
    });
    setLoading(false);
  }, []);

  return (
    <moviesContext.Provider value={value}>{children}</moviesContext.Provider>
  );
};

export default MoviesProvider;
