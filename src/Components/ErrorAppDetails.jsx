import React from 'react';
import appNotFoundImg from '../assets/App-Error.png'
import { Link } from 'react-router';
import useAppsData from '../Hook/hook';
import LoadingPage from './LoadingPage';

const ErrorAppDetails = () => {
    const { loading } = useAppsData();
    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    
    return (
        <div className='w-10/12 mx-auto pb-20'>
            <div className='flex justify-center items-center mt-20'>
                <img className='w-[50%] lg:w-[30%]' src={appNotFoundImg} alt="" />
            </div>
            <div className='text-center mt-5 space-y-2'>
                <p className='text-3xl md:text-4xl font-bold'>OPPS!! APP NOT FOUND</p>
                <p className='text-gray-400'>The App you are requesting is not found on our system. Please try another apps</p>
                <Link to='/' className='btn text-white bg-gradient-to-r from-purple-600 to-purple-500'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorAppDetails;