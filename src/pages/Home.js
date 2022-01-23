import { useContext, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import { moviesContext } from "../contexts/movies";
import {FaChevronRight} from "react-icons/fa";

import "./scss/Home.scss";

const Home = () => {
    const {loading, movies} = useContext(moviesContext);
    const [setShowNav] = useOutletContext();
    useEffect(() => setShowNav(false), []);
    if (loading){
        return (
            <Loading/>
        );
    }
    if (!loading && !movies){
        return null;
    }
    return (
        <main className="home__main">
            {movies &&
                Object.entries(movies).map((entrie, index) => {
                    const path=`/movies/${entrie[0]}`;
                    return (
                    <section key={index} className="movie__section">
                        <div className="section__title">
                            <Link to={path} className="section__link">
                                <h1 className="category">{entrie[0].replace("_", " ")}</h1>
                                <FaChevronRight/>
                            </Link>
                        </div>
                        <ul className="home__movie-list">
                            {entrie[1].slice(0, 20).map((movie, index) =>  (
                                <Movie
                                    key={index}
                                    originalTitle = {movie.original_title}
                                    title={movie.title}
                                    year={parseInt(movie.release_date)}
                                    poster={movie.poster_path}
                                    id={movie.id}
                                    rating={movie.vote_average}
                                />
                            ))}
                        </ul>
                    </section> 
                    );
                })
            }
        </main>
    );
}

export default Home;