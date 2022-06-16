import { createContext, useEffect, useReducer } from "react";

const FAVORITES_KEY = "favorites";
const favoritesStateContext = createContext([]);
const favoritesDispatchContext = createContext({
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
  const [favorites, dispatch] = useReducer(reducer, []);

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
    const data = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    if (data)
      dispatch({
        type: "SET",
        data,
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const func = { addFavoriteMovie, removeFavoriteMovie };

  return (
    <favoritesStateContext.Provider value={favorites}>
      <favoritesDispatchContext.Provider value={func}>
        {children}
      </favoritesDispatchContext.Provider>
    </favoritesStateContext.Provider>
  );
}

export { favoritesStateContext, favoritesDispatchContext, FavoritesProvider };
