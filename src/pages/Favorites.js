import { useContext } from "react";
import MovieList from "../components/MovieList";
import { favoritesStateContext } from "../contexts/favorites";
import { useCloseNav } from "../hooks";
import styled from "styled-components";
import Heading from "../components/common/Heading";

const FavoritesMain = styled.main`
    padding-top: 100px;
    margin: 110px 0;
    h1{
        text-transform: capitalize;
        text-align: center;
        margin-bottom: 80px;
    }
`

function Favorites(){
    useCloseNav();
    const favoriteMovies = useContext(favoritesStateContext);
    return (
        <FavoritesMain>
            <Heading size={40}>Your Favorite Movies 💖</Heading>
            <MovieList movies={favoriteMovies}/>
        </FavoritesMain>
    );
}

export default Favorites;