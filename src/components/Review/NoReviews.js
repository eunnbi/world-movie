import {ImCrying} from "react-icons/im";
import styled from "styled-components";

const StyledNoReviews = styled.p`
    font-size: 30px;
    color: #112a42;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    .icon {
        margin: 3px 0 0 10px;
    }
`;

function NoReviews(){
    return (
        <StyledNoReviews>no reviews <ImCrying className="icon"/></StyledNoReviews>
    );
}

export default NoReviews;