import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <h1>404</h1>
            <p><strong>This page is not found</strong></p>
            <button><Link to='/'>Back To Home</Link></button>
        </div>
    );
};

export default NotFound;