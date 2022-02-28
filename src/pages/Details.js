import { useParams } from "react-router-dom";
import { useQueries } from "react-query";
import Loading from "../components/common/Loading";
import DetailsPoster from "../components/Details/DetailsPoster";
import DetailsInfo from "../components/Details/DetailsInfo";
import ReviewSection from "../components/Review/ReviewSection";
import { getDetails, getReviews } from "../lib/api";
import { useScroll } from "../hooks";
import styled from "styled-components";




const DetailMain = styled.main`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem 2rem;
    width: 90vw;
    max-width: 1170px;
    margin: 4rem auto;

    @media screen and (max-width: 749px){
        display: flex;
        flex-direction: column;
        gap: 0;
    }
`;

const Details = () => {
    const { id } = useParams();
    const [{isLoading : detailsLoading, data : details}, { isLoading : reviewsLoading, data: reviews}] = useQueries([
        { queryKey: ['details', id], queryFn: getDetails},
        { queryKey: ["reviews", id], queryFn: getReviews}
    ])
    const loading = detailsLoading || reviewsLoading;
    useScroll([]);

    if (loading){
        return (
            <Loading/>
        );
    }

    return (
        <DetailMain className="details__main">
            <DetailsPoster poster={details.poster_path}/>
            <DetailsInfo details={details}/>
            <ReviewSection reviews={reviews}/> 
        </DetailMain>
    );
}

export default Details;