import { createContext, useEffect, useState } from "react";

const FAVORITES_KEY = "favorites";
const favoritesStateContext = createContext([]);
const favoritesDispatchContext = createContext({
    addFavoriteMovie: () => {},
    removeFavoriteMovie: () => {}
});

function FavoritesProvider({children}){
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const addFavoriteMovie = (movie) => {
        setFavoriteMovies(favoriteMovies.concat(movie));
    }

    const removeFavoriteMovie = (id) => {
        setFavoriteMovies(favoriteMovies.filter(favorite => favorite.id !== id));
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(FAVORITES_KEY));
        if (data) setFavoriteMovies(data);
    }, []);
    
    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    const dispatch = { addFavoriteMovie, removeFavoriteMovie };

    return (
        <favoritesStateContext.Provider value={favoriteMovies}>
            <favoritesDispatchContext.Provider value={dispatch}>
                {children}   
            </favoritesDispatchContext.Provider>
        </favoritesStateContext.Provider>
    );
}

export {favoritesStateContext, favoritesDispatchContext, FavoritesProvider};