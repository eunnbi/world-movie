import styled from "styled-components";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342';

const StyledMoviePoster = styled.div`
    height: 400px;
    object-fit: cover;
    position: relative;
    img {
        height: 100%;
        max-width: 300px;
    }
`;

function MoviePoster({poster}){
    return (
        <StyledMoviePoster className="MoviePoster">
            {poster ? <img src={`${IMAGE_BASE_URL}${poster}`} alt="poster"/> : <div className="no-poster">NOT AVAILABLE POSTER</div>}
        </StyledMoviePoster>  
    );
}

export default MoviePoster;