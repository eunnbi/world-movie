import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import {BiMoviePlay} from "react-icons/bi";
import styled from "styled-components";

const StyledLogo = styled(Link)`
      display: flex;
    align-items: center;
    .Logo-icon {
        margin: 5px 8px 0 0;
        font-size: 40px;
        color: #49a6e9;
    }
`;

function Logo(){
    return (
        <StyledLogo to="/">
            <BiMoviePlay className="Logo-icon"/>
            <Heading level={1} size={33}>MOVIE APP</Heading>
        </StyledLogo>
    )
}

export default Logo;