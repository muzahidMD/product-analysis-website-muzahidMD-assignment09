import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='page-heading'>Blog</h1>
            <div className='answer'>
                <h2>01. What is the purpose of context api?</h2>
                <p><strong>Ans :</strong> Context API allows to share state across the entire app. Context Api reduces code repeating. We can use context api by React.createContext. Context API returns 2 values. One is consumer and another is provider. To create a context api we need to Create a folder under app root named contexts. then create a file name for context.</p>
            </div>
            <div className='answer'>
                <h2>01. What is semantic tag?</h2>
                <p><strong>Ans :</strong> Semantic elements indicates what they actually are. Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example p tag indicates paragarph tag and section tag means a particular section. By adding semantic tags to our document, we provide additional information about that document.</p>
            </div>
            <div className='answer'>
                <h2>01. What is the difference between inline, block and inline-block element? </h2>
                <p><strong>Ans :</strong> Inline elements needs only enough width. Inline elements allows other elements next to it which are inline. Inline elements don’t start from a new line and don’t have top and bottom margins. Block level element takes the entire width. It starts new line and takes margin in top and bottom. Anotherside inline-block element acts like inline and block element. It allows to take margin and padding.</p>
            </div>
        </div>
    );
};

export default Blog;