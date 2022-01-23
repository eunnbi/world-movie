import React from "react";
import Movie from "./Movie";
import styles from "./scss/MovieList.module.scss";

const MovieList = ({movies}) => {
    return(
        <ul className={styles.movieList}>
            {movies.map((movie, index) =>
                 <Movie
                 key={index}
                 title={movie.title}
                 originalTitle={movie.original_title}
                 year={parseInt(movie.release_date)}
                 poster={movie.poster_path}
                 id={movie.id}
                 rating={movie.vote_average}
                 className={styles.movie}
                 />
            )}
        </ul>
    )
}

export default React.memo(MovieList);