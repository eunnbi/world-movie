import Movie from "../Movie";
import styled from "styled-components";

const StyledHomeMoviesList = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  padding-bottom: 1.5rem;
  &::-webkit-scrollbar {
    width: 6px;
    height: 0.5rem;
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:active {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

function HomeMovieList({ movies }) {
  return (
    <StyledHomeMoviesList>
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </StyledHomeMoviesList>
  );
}

export default HomeMovieList;
