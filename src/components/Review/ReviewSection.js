import Heading from "../common/Heading";
import NoReviews from "./NoReviews";
import ReviewList from "./ReviewList";
import { MdOutlineRateReview } from "react-icons/md";
import styled from "styled-components";

const ReviewHeading = styled.div`
  color: ${({ theme }) => theme.color.blueBlack};
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  padding-bottom: 0.6rem;
  svg {
    margin: 5px 0 0 8px;
  }
`;

function ReviewSection({ reviews }) {
  return (
    <article>
      <ReviewHeading>
        <Heading>Reviews</Heading>
        <MdOutlineRateReview />
      </ReviewHeading>
      {reviews.length === 0 ? <NoReviews /> : <ReviewList reviews={reviews} />}
    </article>
  );
}

export default ReviewSection;
