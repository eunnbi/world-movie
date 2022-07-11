import Heading from "../common/Heading";
import BackButton from "./BackButton";
import Genres from "./Genres";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const DetailHeading = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  letter-spacing: 1px;
  p {
    font-weight: 500;
  }
`;

const Overview = styled.p`
  opacity: 0.9;
  font-size: 1.2rem;
  line-height: 2.3rem;
`;

const Rating = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    color: #f4c519;
  }
`;

function DetailsInfo({ details }) {
  const {
    title,
    release_date,
    original_title,
    genres,
    overview,
    vote_average,
  } = details;
  const year = parseInt(release_date);
  return (
    <article>
      <DetailHeading>
        <Heading>{title}</Heading>
        {title !== original_title && (
          <Heading level={3}>{original_title}</Heading>
        )}
        <p>{!isNaN(year) && year}</p>
        <Rating>
          <AiFillStar />
          <span>{vote_average}</span>
        </Rating>
      </DetailHeading>
      <Genres genres={genres} />
      <Overview>{overview}</Overview>
      <BackButton />
    </article>
  );
}

export default DetailsInfo;
