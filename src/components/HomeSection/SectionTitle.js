import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import {FaChevronRight} from "react-icons/fa";
import styled from "styled-components";

const StyledSectionTitle = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    h1{
        margin-right: 10px;
        text-transform: uppercase;
    }
`;

function SectionTitle({path, title}){
    return (
        <StyledSectionTitle to={path}>
            <Heading size={30}>{title}</Heading>
            <FaChevronRight/>
        </StyledSectionTitle>
    );
}

export default SectionTitle;