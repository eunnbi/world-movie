import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { moviesContext } from "../contexts/movies";
import {BiCameraMovie} from "react-icons/bi";

import "./scss/Movies.scss";

const Movies = () => {
    const { type } = useParams();
    const { movies } = useContext(moviesContext);
    const [data] = useState(movies[type]);
    const [page, setPage] = useState(1);
    const [limit] = useState(12);
    const offset = (page - 1) * limit;
    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, [page]);

    return (
        <main className="movies__main">
            {type && 
                <div className="movies__title">
                    <div className="title">
                        <h1 className="title">{type.replace("_", " ")} movies</h1>
                        <BiCameraMovie className="icon"/>
                    </div>
                </div>
            }
            {data &&
                <>
                    <MovieList movies={data.slice(offset, offset + limit)}/>
                    <Pagination total={data.length} limit={limit} page={page} setPage={setPage}/>
                </>
                
            }
        </main>
    );
}

export default React.memo(Movies);