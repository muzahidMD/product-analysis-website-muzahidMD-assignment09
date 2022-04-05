import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Reviews.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='review'>
            <h1 className='heading-review'>Our Customer Reviews</h1>
            {
                reviews.map(review => <ReviewCart
                    key={review._id}
                    review={review}
                ></ReviewCart>)
            }
        </div>
    );
};

export default Review;