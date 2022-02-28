import Movie from "../Movie";
import styled from "styled-components";

const StyledHomeMoviesList = styled.ul`
    display: flex;
    overflow-x: scroll;
    padding-bottom: 30px;
    .Movie {
        margin-right: 10px;
    }
    .Movie:last-child {
        margin: 0;
    }
    &::-webkit-scrollbar {
        width: 6px;
        height: 10px;
        margin-top: 10px;
        display: block;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        margin-top: 10px;
        &:active {
            background-color: rgba(0, 0, 0, 0.8);
        }
    }
    &::-webkit-scrollbar-track {
    background-color: transparent;
    margin-top: 10px;
    }

    @media screen and (max-width: 1000px){
        .MoviePoster{
            height: 300px;
        }
    }
`;

function HomeMovieList({movies}){
    return (
        <StyledHomeMoviesList>
            {movies.map((movie, index) =>  (
                <Movie
                    key={index}
                    movie={movie}
                />
            ))}
        </StyledHomeMoviesList>
    );
}

export default HomeMovieList;