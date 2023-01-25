import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import { useLike } from "../../hooks/useLike";
import styled from "styled-components";
import { getLanguage } from "../../utils";

const MovieLink = styled(Link)`
  display: block;
  position: relative;
`;

const Movie = ({ movie }) => {
  const {
    title,
    poster_path: poster,
    id,
    vote_average: rating,
    original_language,
  } = movie;
  const { like, onLike } = useLike(movie);

  return (
    <li>
      <MovieLink to={`/movie/${id}`}>
        <LikeButton like={like} onLike={onLike} />
        <MoviePoster poster={poster} />
        <MovieInfo
          title={title}
          year={parseInt(movie.release_date)}
          rating={rating}
          language={getLanguage(original_language).english_name}
        />
      </MovieLink>
    </li>
  );
};

export default Movie;
