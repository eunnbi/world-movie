import { useParams } from "react-router-dom";
import { useQueries } from "react-query";
import Loading from "../components/common/Loading";
import MoviePoster from "../components/Movie/MoviePoster";
import DetailsInfo from "../components/Details/DetailsInfo";
import ReviewSection from "../components/Review/ReviewSection";
import { getDetails, getReviews } from "../lib/api";
import { useScroll } from "../hooks";
import styled from "styled-components";

const DetailMain = styled.main`
  margin-top: 0;
`;

const DetailRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 6rem;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

const Details = () => {
  const { id } = useParams();
  const [
    { isLoading: detailsLoading, data: details },
    { isLoading: reviewsLoading, data: reviews },
  ] = useQueries([
    { queryKey: ["details", id], queryFn: getDetails },
    { queryKey: ["reviews", id], queryFn: getReviews },
  ]);
  const loading = detailsLoading || reviewsLoading;
  useScroll([]);

  if (loading) {
    return <Loading />;
  }

  return (
    <DetailMain>
      <DetailRow>
        <MoviePoster poster={details.poster_path} />
        <DetailsInfo details={details} />
      </DetailRow>
      <ReviewSection reviews={reviews} />
    </DetailMain>
  );
};

export default Details;
