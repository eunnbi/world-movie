import styled from "styled-components";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342';

const StyledPoster = styled.div`
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (min-width: 750px) and (max-width: 920px){
        img {
            height: 350px;
            width: 235px;
        }
    }
    @media screen and (max-width: 749px){
        margin-bottom: 1rem;
        img {
            height: 350px;
            width: 235px;
        }
    }
`;

function DetailsPoster({poster}){
    return (
        <StyledPoster>
            {poster ? <img src={`${IMAGE_BASE_URL}${poster}`} alt="poster"/> : <div className="no-poster">NOT AVAILABLE POSTER</div>}
        </StyledPoster>  
    )
}

export default DetailsPoster;