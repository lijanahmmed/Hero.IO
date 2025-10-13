import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center mt-30'>
            <p className='text-5xl font-extrabold'>L</p>
            <div className='ml-4 mr-2'><FadeLoader></FadeLoader></div>
            <p className='text-5xl font-extrabold'>A D I N G . . .</p>
        </div>
    );
};

export default LoadingPage;