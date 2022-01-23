import React from "react";
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";
import "./scss/Movie.scss";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342';

const Movie = ({id, year, title, originalTitle, poster, rating}) => {
    const path = `/movie/${id}`;
    const imageSrc = `${IMAGE_BASE_URL}${poster}`;
    return (
        <li className="movie">
            <Link to={path} className="movie__link">
                <div className="movie__poster">
                    {poster ? <img src={imageSrc} alt="poster"/> : <div className="no-poster">NOT AVAILABLE POSTER</div>}
                </div>
                
                <div className="movie__info">
                    <div className="movie__info-row">
                        <h1 className="movie__title">{title}</h1>
                        {title !== originalTitle && <h2 className="movie__originalTitle">({originalTitle})</h2>}
                    </div>
                    <div className="movie__info-row">
                        <p className="movie__year">{!isNaN(year) && year}</p>
                        {rating !== 0 &&
                            <p className=" movie__rating">
                                <AiFillStar className="icon"/>
                                <span>{rating}</span>
                            </p>
                        }  
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default React.memo(Movie);