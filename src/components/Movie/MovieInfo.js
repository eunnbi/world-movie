import { AiFillStar } from "react-icons/ai";
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
`;

const MovieInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .year {
    font-size: 13px;
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

function MovieInfo({ title, originalTitle, year, rating, ...props }) {
  return (
    <StyledMovieInfo {...props}>
      <div>
        <Heading level={4}>
          {title}
          {title !== originalTitle && (
            <>
              <br />({originalTitle})
            </>
          )}
        </Heading>
      </div>
      <MovieInfoRow>
        <p className="year">{!isNaN(year) && year}</p>
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
