import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div >
            <section className="card-container">
                <div className='class-container'>
                    <div>
                        <h1 className='heading'>Your Next Laptop</h1>
                        <h1 className='heading color-blueviolet' >Find A Best One</h1>
                        <p className='heading-text'>To find your best laptops see all of ours customer reviews and choice the best one you need . And we promise  to sure about that all of ours reviews are create a good empect to buy a great one.</p>
                        <button className='header-btn'>Live Demo</button>
                    </div>
                </div>
                <div className='img-container'>
                    <img src="https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg" alt="" />
                </div>
            </section>
            <section>
                <h1 className='heading-reviews'> Customer Reviews</h1>
                {
                    reviews.slice(0, 3).map(review => <ReviewCart
                        key={review._id}
                        review={review}
                    ></ReviewCart>)
                }
                <div className='see-all'>
                    <button className='see-review-btn'><Link to='/reviews'>See All Reviews</Link></button>
                </div>
            </section>
        </div>
    );
};

export default Home;