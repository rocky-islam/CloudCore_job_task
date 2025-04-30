import React from 'react';
import NavBar from '../NavBar/NavBar';

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='text-red-400 text-8xl font-bold py-4 text-center'>This is Error Page....</h1>
            <h1 className='text-red-400 text-9xl font-extrabold text-center'>404</h1>
        </div>
    );
};

export default ErrorPage;