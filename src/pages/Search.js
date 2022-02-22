import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loading from "../components/Loading";
import MovieList from "../components/MovieList";
import { searchMovies } from "../lib/api";
import { useQuery } from "react-query";
import "./scss/Search.scss";


const Search = () => {
    const [query, setQuery] = useState("");
    const {isLoading, data} = useQuery(["search", query], searchMovies);
    
    const [setShowNav] = useOutletContext();
    useEffect(() => setShowNav(false), []);

    const onSearch = (e) => {
        setQuery(e.target.value);
    }
    
    return (
        <main className="search__main">
            <section className="search__form">
                <h1 className="title">Search Movies</h1>
                <form>
                    <input 
                        type="text" 
                        value={query}
                        onChange={onSearch}
                    />
                </form>    
            </section>
            {isLoading ? <Loading/> :
                (query !== "" && data.length === 0) ? (
                    <p className="not-found">Movie Not Found!</p>
                ) : (
                    <section className="movies__main">
                        <MovieList movies={data}/>
                    </section> 
                )  
            }
        </main>
    );
}

export default Search;