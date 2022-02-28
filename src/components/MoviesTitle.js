import Heading from "./common/Heading";
import {BiCameraMovie} from "react-icons/bi";
import styled from "styled-components";

const StyledMoviesTitle = styled.div`
    margin-bottom: 50px;
    text-transform: capitalize;
    font-size: 40px;
    display: flex;
    align-items: center;
    .MoviesTitle-icon {
        margin-left: 20px;
        color: #073763;
    }
`
function MoviesTitle({type}){
    return (
        <StyledMoviesTitle className="movies__title">
            <Heading size={40}>{type.replace("_", " ")} movies</Heading>
            <BiCameraMovie className="MoviesTitle-icon"/>
        </StyledMoviesTitle>
    )
}

export default MoviesTitle;