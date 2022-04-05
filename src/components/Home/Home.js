import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div >
            <section className="card-container">
                <div className='class-container'>
                    <div>
                        <h1 className='heading'>Your Next Laptop</h1>
                        <h1 className='heading color-blueviolet' >Your Best Laptop</h1>
                        <p className='heading-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos, enim vero quas molestias quo laborum non est totam praesentium nesciunt nihil excepturi, dolores adipisci eligendi, accusamus similique! Nostrum, quae!</p>
                        <button className='header-btn'>Live Demo</button>
                    </div>
                </div>
                <div className='img-container'>
                    <img src="https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg" alt="" />
                </div>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Home;