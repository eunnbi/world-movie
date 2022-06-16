import Heading from "../common/Heading";
import BackButton from "./BackButton";
import Genres from "./Genres";
import styled from "styled-components";

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

function DetailsInfo({ details }) {
  const {
    title,
    release_date,
    original_title: originalTitle,
    genres,
    overview,
  } = details;
  const year = parseInt(release_date);
  return (
    <article>
      <DetailHeading>
        <Heading>{title}</Heading>
        {title !== originalTitle && (
          <Heading level={3}>{originalTitle}</Heading>
        )}
        <p>{!isNaN(year) && year}</p>
      </DetailHeading>
      <Genres genres={genres} />
      <Overview>{overview}</Overview>
      <BackButton />
    </article>
  );
}

export default DetailsInfo;
