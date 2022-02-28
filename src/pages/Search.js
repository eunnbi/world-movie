import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../components/common/Loading";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
import { searchMovies } from "../lib/api";
import { useCloseNav } from "../hooks";
import styled from "styled-components";


const SearchMain = styled.main`
    width: 90vw;
    max-width: 1170px;
    margin: 110px auto;
    padding: 3rem 0;
    .Search-not-found {
        margin-top: 5px;
        color: #bb2524;
        font-size: 15px;
        text-transform: capitalize;
        letter-spacing: 2px;
    }
`
function Search() {
    useCloseNav();
    const [query, setQuery] = useState("");
    const {isLoading, data} = useQuery(["search", query], searchMovies);

    const onSearch = (e) => {
        setQuery(e.target.value);
    }
    
    return (
        <SearchMain>
            <SearchForm query={query} onSearch={onSearch}/>
            {isLoading ? <Loading/> :
                (query !== "" && data.length === 0) ? (
                    <p className="Search-not-found">Movie Not Found!</p>
                ) : (
                    <section>
                        <MovieList movies={data}/>
                    </section> 
                )  
            }
        </SearchMain>
    );
}

export default Search;