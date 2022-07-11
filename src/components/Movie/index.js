import React from "react";
import { Link, useLocation } from "react-router-dom";
import LikeButton from "./LikeButton";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import { useLike } from "../../hooks/useLike";
import styled from "styled-components";

const MovieLink = styled(Link)`
  display: block;
  position: relative;
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
  const { like, onLike } = useLike(movie);

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
        />
      </MovieLink>
    </li>
  );
};

export default Movie;
