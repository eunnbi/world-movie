import { createContext, useEffect, useReducer } from "react";

const FAVORITES_KEY = "favorites";
export const favoritesStateContext = createContext([]);
export const favoritesDispatchContext = createContext({
  addFavoriteMovie: (movie) => {},
  removeFavoriteMovie: (id) => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.data;
    case "ADD":
      return state.concat(action.movie);
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
  }
};

function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(reducer, [], () => {
    const data = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    return data ? data : [];
  });

  const addFavoriteMovie = (movie) => {
    dispatch({
      type: "ADD",
      movie,
    });
  };

  const removeFavoriteMovie = (id) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const value = { addFavoriteMovie, removeFavoriteMovie };

  return (
    <favoritesStateContext.Provider value={favorites}>
      <favoritesDispatchContext.Provider value={value}>
        {children}
      </favoritesDispatchContext.Provider>
    </favoritesStateContext.Provider>
  );
}

export default FavoritesProvider;
