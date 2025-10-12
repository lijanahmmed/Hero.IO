import React from 'react';
import appNotFoundImg from '../assets/App-Error.png'
import { useNavigate } from 'react-router';

const AppsNotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    
    return (
        <div className='w-10/12 mx-auto pb-20'>
                    <div className='flex justify-center items-center mt-20'>
                        <img className='w-[50%] lg:w-[30%]' src={appNotFoundImg} alt="" />
                    </div>
                    <div className='text-center mt-5 space-y-2'>
                        <p className='text-3xl md:text-4xl font-bold'>OPPS!! APP NOT FOUND</p>
                        <p className='text-gray-400'>The App you are requesting is not found on our system. Please try another apps</p>
                        <button onClick={handleGoBack} className='btn text-white bg-gradient-to-r from-purple-600 to-purple-500'>Go Back!</button>
                    </div>
                </div>
    );
};

export default AppsNotFound;