import React from 'react';
import './ReviewCart.css'

const ReviewCart = ({ review }) => {
    const { name, img, comment, retings } = review;
    return (
        <div className='review-container'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-details'>
                <h1>{name}</h1>
                <p>{comment}</p>
            </div>
            <div className='review-retings'>
                <p>Retings: {retings}</p>
            </div>


        </div>
    );
};

export default ReviewCart;