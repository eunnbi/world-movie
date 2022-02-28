import React from "react";
import Movie from "./Movie";
import styled from "styled-components";

const StyledMovieList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(267px, 267px));
    gap: 2rem;
    justify-content: center;
`;

const MovieList = ({movies}) => {
    return(
        <StyledMovieList>
            {movies.map((movie) =>
                 <Movie
                 key={movie.id}
                 movie={movie}
                 />
            )}
        </StyledMovieList>
    )
}

export default MovieList;