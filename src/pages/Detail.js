import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../modules/details";
import Loading from "../components/Loading";
import Review from "../components/Review";
import { MdOutlineRateReview } from "react-icons/md";
import {ImCrying} from "react-icons/im";
import "./scss/Detail.scss";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, details, reviews } = useSelector(state => state.details);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetails(id));
    }, []);

    if (loading){
        return (
            <Loading/>
        )
    }
    if (!loading && !details && !reviews){
        return null;
    }
    const { title, release_date, original_title : originalTitle, genres, overview, poster_path: poster } = details;
    const imageSrc = `${IMAGE_BASE_URL}${poster}`;
    const year = parseInt(release_date);
    return (
        <main className="details__main">
            <div className="details__poster">
                {poster ? <img src={imageSrc} alt="movie poster"/> : <div className="no-poster">not available poster</div>}
            </div>
            <section className="details__info">
                <div className="details__title">
                    <h1 className="title">{title}</h1>
                    {title !== originalTitle && <h2 className="original-title">{originalTitle}</h2>}
                    <p className="year">{!isNaN(year) && year}</p> 
                </div>
                <ul className="genres">
                    {genres && genres.map((genre, index) => <li key={index} className="genre">{genre.name}</li>)}
                </ul>
                <p className="overview">{overview}</p>
                <button className="back-btn" onClick={() => navigate(-1)}>back to movies</button>
            </section>
            <section className="details__reviews">
                <div className="reviews__title">
                    <h1>Reviews</h1>
                    <MdOutlineRateReview className="icon"/>
                </div>
                {reviews.length === 0 ? <p className="no-reviews">no reviews <ImCrying className="icon"/></p>: 
                    reviews.map((review, index) => (
                        <Review
                            key={index}
                            text={review.content}
                            username={review.author_details.username}
                        />
                ))}
            </section>
        </main>
    );
}

export default Detail;