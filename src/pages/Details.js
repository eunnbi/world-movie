import { useParams } from "react-router-dom";
import { useQueries } from "react-query";
import Loading from "../components/common/Loading";
import Heading from "../components/common/Heading";
import MoviePoster from "../components/Movie/MoviePoster";
import DetailsInfo from "../components/Details/DetailsInfo";
import ReviewSection from "../components/Review/ReviewSection";
import { getDetails, getReviews } from "../lib/api";
import { useScroll } from "../hooks";
import styled from "styled-components";
import BackButton from "../components/Details/BackButton";

const DetailMain = styled.main`
  margin-top: 0;
  padding-top: 0;
`;

const DetailRow = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0 4rem;
  align-items: flex-start;
  @media ${({ theme }) => theme.device.tablet} {
    > img {
      max-width: 300px;
      width: 85vw;
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const Details = () => {
  const { id } = useParams();
  const [
    { isLoading: detailsLoading, data: details },
    { isLoading: reviewsLoading, data: reviews },
  ] = useQueries([
    {
      queryKey: ["details", id],
      queryFn: getDetails,
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ["reviews", id],
      queryFn: getReviews,
      refetchOnWindowFocus: false,
    },
  ]);
  const loading = detailsLoading || reviewsLoading;

  useScroll([]);

  if (loading) {
    return <Loading />;
  }

  return (
    <DetailMain>
      <BackButton />
      <Heading>{details.title}</Heading>
      {details.title !== details.original_title && (
        <Heading level={3}>{details.original_title}</Heading>
      )}
      <DetailRow>
        <MoviePoster poster={details.poster_path} />
        <DetailsInfo details={details} />
      </DetailRow>
      <ReviewSection reviews={reviews} />
    </DetailMain>
  );
};

export default Details;
