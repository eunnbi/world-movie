import Heading from "../common/Heading";
import Genres from "./Genres";
import VideoLink from "./VideoLink";
import { getLanguage } from "../../utils";
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
  margin-bottom: 1rem;
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
    original_language,
    runtime,
    genres,
    overview,
    vote_average,
    videos,
  } = details;
  const year = parseInt(release_date);
  const language = getLanguage(original_language).english_name;
  return (
    <article>
      <DetailHeading>
        <Heading>{title}</Heading>
        {title !== original_title && (
          <Heading level={3}>{original_title}</Heading>
        )}
        <p>{!isNaN(year) && year}</p>
        <p>
          <span>{runtime} Min</span>
          <span>{language && ` | ${language}`}</span>
        </p>
        <Rating>
          <AiFillStar />
          <span>{vote_average}</span>
        </Rating>
      </DetailHeading>
      <Genres genres={genres} />
      <Overview>{overview}</Overview>
      <VideoLink videos={videos.results} />
    </article>
  );
}

export default DetailsInfo;
