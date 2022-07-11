import { useContext } from "react";
import MovieList from "../components/common/MovieList";
import Heading from "../components/common/Heading";
import { favoritesStateContext } from "../contexts/favorites";
import styled from "styled-components";

const FavoritesMain = styled.main`
  padding-top: 2.6rem;
  padding-bottom: 3.5rem;
  h1 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

function Favorites() {
  const favoriteMovies = useContext(favoritesStateContext);
  return (
    <FavoritesMain>
      <Heading>Your Favorite Movies 💖</Heading>
      <MovieList movies={favoriteMovies} />
    </FavoritesMain>
  );
}

export default Favorites;
