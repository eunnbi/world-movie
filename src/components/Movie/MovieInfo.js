import { AiFillStar } from "react-icons/ai";
import Heading from "../common/Heading";
import styled from "styled-components";

const StyledMovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.5rem 1rem;
`;

const MovieInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.8rem;
  }
`;

const Rating = styled.p`
  display: flex;
  align-items: center;
  svg {
    color: #f4c519;
    margin-right: 3px;
  }
`;

function MovieInfo({ title, year, rating, language, ...props }) {
  return (
    <StyledMovieInfo {...props}>
      <div>
        <Heading level={4}>{title}</Heading>
      </div>
      <MovieInfoRow>
        <div>
          <span>{!isNaN(year) && year}</span>
          {language && <span> | {language}</span>}
        </div>
        {rating !== 0 && (
          <Rating>
            <AiFillStar />
            <span>{rating}</span>
          </Rating>
        )}
      </MovieInfoRow>
    </StyledMovieInfo>
  );
}

export default MovieInfo;
