import { ImCrying } from "react-icons/im";
import styled from "styled-components";

const NoReviewsWrapper = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.blueBlack};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  svg {
    margin: 3px 0 0 10px;
  }
`;

function NoReviews() {
  return (
    <NoReviewsWrapper>
      no reviews <ImCrying />
    </NoReviewsWrapper>
  );
}

export default NoReviews;
