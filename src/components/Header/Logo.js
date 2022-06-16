import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LogoColumn = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  span {
    margin-bottom: 3px;
  }
`;

function Logo() {
  return (
    <StyledLogo to="/">
      <Heading>WORLD MOVIE</Heading>
      <LogoColumn>
        🌎 <span>🎥</span>
      </LogoColumn>
    </StyledLogo>
  );
}

export default Logo;
