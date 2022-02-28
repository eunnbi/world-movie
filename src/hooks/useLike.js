import { useState, useContext } from "react";
import { favoritesDispatchContext } from "../contexts/favorites";

export const useLike = (initialState, movie) => {
    const { addFavoriteMovie, removeFavoriteMovie } = useContext(favoritesDispatchContext);
    const [like , setLike] = useState(initialState);

    const onLike = (e) => {
        e.preventDefault();
        setLike(!like);
        if (like) removeFavoriteMovie(movie.id);
        else addFavoriteMovie(movie);
    };
    return { like, setLike, onLike };
};