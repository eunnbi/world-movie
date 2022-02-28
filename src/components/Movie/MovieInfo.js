import {AiFillStar} from "react-icons/ai";
import Heading from "../common/Heading";
import styled from "styled-components";

const StyledMovieInfo = styled.div`
    visibility: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
    transform: translateY(100%);
    .MovieInfo-row:last-child {
      display: flex;
      justify-content: space-between;
    }
    .MovieInfo-rating {
        display: flex;
        align-items: center;
        .icon {
        color: #f4c519;
        margin-right: 3px;
        }
    }
    .MovieInfo-year {
        font-size: 13px;
    }
    h2, h3{
        margin-bottom: 5px;
    }
`;

function MovieInfo({title, originalTitle, year, rating}){
    return (
        <StyledMovieInfo className="MovieInfo">
            <div className="MovieInfo-row">
                <Heading level={2} size={15}>{title}</Heading>
                {title !== originalTitle && <Heading level={3} size={13}>({originalTitle})</Heading>}
            </div>
            <div className="MovieInfo-row">
                <p className="MovieInfo-year">{!isNaN(year) && year}</p>
                {rating !== 0 &&
                    <p className=" MovieInfo-rating">
                        <AiFillStar className="icon"/>
                        <span>{rating}</span>
                    </p>
                }  
            </div>
        </StyledMovieInfo>
    );
}

export default MovieInfo;