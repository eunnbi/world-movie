import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, initialMovies } from "../modules/search";
import Loading from "../components/Loading";
import MovieList from "../components/MovieList";

import "./scss/Search.scss";

const Search = () => {
    const { loading, movies } = useSelector(state => state.search);
    const dispatch = useDispatch();
    const [setShowNav] = useOutletContext();
    const [input, setInput] = useState("");
    
    const onSearch = (e) => {
        setInput(e.target.value);
        dispatch(searchMovies(1, e.target.value));
    }

    useEffect(() => {
        setShowNav(false);
        return () => {
            dispatch(initialMovies());
        }
    }, []);
    return (
        <main className="search__main">
            <section className="search__form">
                <h1 className="title">Search Movies</h1>
                <form>
                    <input 
                        type="text" 
                        value={input || ""}
                        onChange={onSearch}
                    />
                </form>    
            </section>
            {loading ? <Loading/> :
                (input !== "" && movies && movies.length === 0) ? (
                    <p className="not-found">Movie Not Found!</p>
                ) : (
                    movies &&
                   <section className="movies__main">
                        <MovieList movies={movies}/>
                    </section> 
                )  
            }
        </main>
    );
}

export default Search;