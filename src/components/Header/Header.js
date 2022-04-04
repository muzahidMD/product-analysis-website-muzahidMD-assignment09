import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to="/home">HOME</Link>
            <Link to="/reviews">REVIEWS</Link>
            <Link to="/dashboard">DASHBOARD</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/about">ABOUT</Link>
        </div>
    );
};

export default Header;