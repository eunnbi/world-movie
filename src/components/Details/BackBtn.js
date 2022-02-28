import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledBackBtn = styled.button`
    color: #fff;
    background-color: #49a6e9;
    text-transform: capitalize;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 15px;
    margin: 2.5rem 0;
    transition: all 0.3s ease-in-out;
    &:hover {
    background-color: #112a42;
    }
`;

function BackBtn() {
    const navigate = useNavigate();
    return (
        <StyledBackBtn onClick={() => navigate(-1)}>
            back to movies
        </StyledBackBtn>
    );
}

export default BackBtn;