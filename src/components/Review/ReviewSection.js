import Heading from "../common/Heading";
import { MdOutlineRateReview } from "react-icons/md";
import styled from "styled-components";
import NoReviews from "./NoReviews";
import ReviewList from "./ReviewList";

const StyledReviewSection = styled.section`
    grid-column: 1/3;
    .ReviewSectoin-title{
        color: #112a42;
        display: flex;
        align-items: center;
        font-size: 30px;
        letter-spacing: 1px;
        margin-bottom: 2rem;
        border-bottom: 1px solid #55595c;
        padding-bottom: 10px;
        .icon {
            margin: 5px 0 0 8px;
        }
    }
`


function ReviewSection({reviews}){
    return (
        <StyledReviewSection>
                <div className="ReviewSectoin-title">
                    <Heading level={1}>Reviews</Heading>
                    <MdOutlineRateReview className="icon"/>
                </div>
                {reviews.length === 0 ? <NoReviews/> : <ReviewList reviews={reviews}/>}
        </StyledReviewSection>
    )
}

export default ReviewSection;