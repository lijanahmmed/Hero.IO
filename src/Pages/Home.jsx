import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import heroImg from '../assets/hero.png';
import Applications from '../Components/Applications';

const Home = () => {

    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto text-center space-y-5 mt-15'>
                <p className='text-4xl md:text-5xl font-bold'>We Build</p>
                <p className='text-4xl md:text-5xl font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500 font-extrabold'>Productive</span> Apps</p>
                <p className='text-gray-400 lg:w-8/12 mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex justify-center gap-4 mt-6'>
                <a href='https://play.google.com/' className='btn bg-white'><IoLogoGooglePlaystore className='text-xl'></IoLogoGooglePlaystore> Google Play</a>
                <a href='https://www.apple.com/app-store/' className='btn bg-white'><FaAppStoreIos className='text-xl'></FaAppStoreIos> App Store</a>
            </div>
            <div className='mt-6 flex justify-center max-w-10/12 mx-auto'>
                <img src={heroImg} alt="" />
            </div>
            <div className='bg-gradient-to-r from-purple-600 to-purple-500 py-10 space-y-5 text-white'>
                <div className='w-11/12 md:w-10/12 mx-auto text-center'>
                    <h3 className='text-3xl font-bold'>Trusted by Millions, Built for You</h3>
                    <div className='mt-6 flex flex-col md:flex-row gap-10 justify-evenly'>
                        <div className='space-y-3'>
                            <p>Total Downloads</p>
                            <p className='text-5xl font-semibold'>29.6M</p>
                            <p>21% more than last month</p>
                        </div>
                        <div className='space-y-3'>
                            <p>Total Reviews</p>
                            <p className='text-5xl font-semibold'>906K</p>
                            <p>46% more than last month</p>
                        </div>
                        <div className='space-y-3'>
                            <p>Active Apps</p>
                            <p className='text-5xl font-semibold'>132+</p>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Applications></Applications>
            </div>
        </div>
    );
};

export default Home;