import React from 'react';
import useReviews from '../../hooks/useReviews';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>This is Review:{reviews.length}</h2>
        </div>
    );
};

export default Review;