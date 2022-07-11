import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LikeButton from "./LikeButton";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import { favoritesStateContext } from "../../contexts/favorites";
import { useLike } from "../../hooks/useLike";
import styled from "styled-components";

const MovieLink = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  &:hover .MovieInfo {
    visibility: visible;
    transform: translateY(0);
  }
`;

const Movie = ({ movie }) => {
  const { search, pathname } = useLocation();
  const {
    title,
    original_title: originalTitle,
    poster_path: poster,
    id,
    vote_average: rating,
  } = movie;
  const favoriteMovies = useContext(favoritesStateContext);
  const { like, setLike, onLike } = useLike(false, movie);
  useEffect(() => {
    favoriteMovies.forEach((movie) => movie.id === id && setLike(true));
  }, []);

  return (
    <li>
      <MovieLink
        to={`/movie/${id}${search}${search ? "&" : "?"}from=${pathname}`}
      >
        <LikeButton like={like} onLike={onLike} />
        <MoviePoster poster={poster} />
        <MovieInfo
          title={title}
          originalTitle={originalTitle}
          year={parseInt(movie.release_date)}
          rating={rating}
          className="MovieInfo"
        />
      </MovieLink>
    </li>
  );
};

export default Movie;
