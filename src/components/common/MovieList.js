import React from "react";
import Movie from "../Movie";
import styled from "styled-components";

const StyledMovieList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </StyledMovieList>
  );
};

export default MovieList;
