import Genres from "./Genres";
import VideoLink from "./VideoLink";
import { getLanguage } from "../../utils";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Text = styled.p`
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const Rating = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  svg {
    color: #f4c519;
  }
`;

const Overview = styled.p`
  opacity: 0.9;
  font-size: 1.2rem;
  line-height: 2.3rem;
  margin: 1.5rem 0;
`;

function DetailsInfo({ details }) {
  const {
    overview,
    release_date,
    original_language,
    runtime,
    genres,
    vote_average,
    videos,
  } = details;
  const year = parseInt(release_date);
  const language = getLanguage(original_language).english_name;
  return (
    <article>
      <Text>{!isNaN(year) && year}</Text>
      <Text>
        <span>{runtime} Min</span>
        <span>{language && ` | ${language}`}</span>
      </Text>
      <Rating>
        <AiFillStar />
        <span>{vote_average}</span>
      </Rating>
      <Genres genres={genres} />
      <VideoLink videos={videos.results} />
      <Overview>{overview}</Overview>
    </article>
  );
}

export default DetailsInfo;
