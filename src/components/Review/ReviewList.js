import ReviewItem from "./ReviewItem";

function ReviewList({ reviews }){
    return (
        <ul>
            {reviews.map((review, index) => (
                <ReviewItem
                    key={index}
                    text={review.content}
                    username={review.author_details.username}
                />
            ))}
        </ul>
    );
}

export default ReviewList;