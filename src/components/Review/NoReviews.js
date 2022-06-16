import { ImCrying } from "react-icons/im";
import styled from "styled-components";

const StyledNoReviews = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.blueBlack};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  svg {
    margin: 3px 0 0 10px;
  }
`;

function NoReviews() {
  return (
    <StyledNoReviews>
      no reviews <ImCrying />
    </StyledNoReviews>
  );
}

export default NoReviews;
