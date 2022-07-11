import { useState, useContext, useEffect } from "react";
import {
  favoritesDispatchContext,
  favoritesStateContext,
} from "../contexts/favorites";

export const useLike = (movie) => {
  const favoriteMovies = useContext(favoritesStateContext);
  const { addFavoriteMovie, removeFavoriteMovie } = useContext(
    favoritesDispatchContext
  );
  const [like, setLike] = useState(false);

  const onLike = (e) => {
    e.preventDefault();
    setLike(!like);
    if (like) removeFavoriteMovie(movie.id);
    else addFavoriteMovie(movie);
  };

  useEffect(() => {
    favoriteMovies.forEach(
      (favorite) => favorite.id === movie.id && setLike(true)
    );
  }, []);

  return { like, onLike };
};
