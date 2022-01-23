import { createContext, useEffect, useState } from "react";
import { getData } from "../lib/api";


const MOVIE_TYPE = ["popular", "top_rated",  "now_playing"];

const moviesContext = createContext({
    loading: false,
    "popular": [],
    "top_rated": [],
    "now_playing": [],
});


const MoviesProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState({
        "popular": [],
        "top_rated": [],
        "now_playing": [],
    });
    const value = {
        loading,
        movies
    };

    const getMovies = async (page, type) => {
        try{
            const response = await getData(undefined, `/${type}`, `&page=${page}`)
            setMovies(prevMovies => ({
                ...prevMovies,
                [type]: prevMovies[type].concat(response.data.results)
            }))
        }
        catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        setLoading(true);
        MOVIE_TYPE.forEach((type) => {
            for (let page = 1; page <= 10; page++){
                getMovies(page, type);
            }
        })
        setLoading(false);
    }, []);
    return (
        <moviesContext.Provider value={value}>
            {children}
        </moviesContext.Provider>
    )
}

export {moviesContext, MoviesProvider};