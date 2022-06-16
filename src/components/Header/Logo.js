import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoColumn = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  span {
    margin-bottom: 3px;
  }
`;

function Logo() {
  return (
    <StyledLogo to="/">
      <Heading level={1} size={33}>
        WORLD MOVIE
      </Heading>
      <LogoColumn>
        🌎 <span>🎥</span>
      </LogoColumn>
    </StyledLogo>
  );
}

export default Logo;
