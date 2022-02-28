import styled from "styled-components";

const LoadingMain = styled.main`
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

const StyledLoading = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #fff;
    border-top: 10px solid #49a6e9;
    animation: loading 1s linear infinite;

    @keyframes loading {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;

const Loading = () => {
    return(
        <LoadingMain>
           <StyledLoading></StyledLoading> 
        </LoadingMain>
        
    );
}

export default Loading;