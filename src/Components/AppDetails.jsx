import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAppsData from '../Hook/hook';
import iconDownload from '../assets/icon-downloads.png';
import iconRating from '../assets/icon-ratings.png';
import iconReview from '../assets/icon-review.png'
import Recharts from './Recharts';
import ErrorAppDetails from './ErrorAppDetails';
import LoadingPage from './LoadingPage';
import { showAppInstallation } from '../LocalStorage/LocalStorage';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { apps, loading } = useAppsData();
    const [installed, setInstalled] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const installedApp = localStorage.getItem(`appInstalled_${id}`);
        if (installedApp === 'true') {
            setInstalled(true)
        }
    }, [id]);

    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    const app = apps.find(application => application.id === Number(id))
    if (!app) {
        return <ErrorAppDetails></ErrorAppDetails>
    }

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app || {};

    const handleInstall = () => {
        setInstalled(true)
        toast.success(`Yay!! ${title} is installed`)
        localStorage.setItem(`appInstalled_${id}`, 'true');
        showAppInstallation(app);
    }

    return (
        <div className='mt-20 mx-auto w-11/12 md:w-10/12'>
            <div className='flex flex-col md:flex-row gap-15 items-center'>
                <div>
                    <img className='w-60 h-60 object-cover rounded-4xl' src={image} alt="" />
                </div>
                <div className='space-y-2'>
                    <p className='text-2xl font-bold'>{title}</p>
                    <p>Developed by <span className='text-purple-600'>{companyName}</span></p>
                    <div className='mt-6 flex gap-10'>
                        <div className='space-y-2'>
                            <img className='w-7 h-7' src={iconDownload} alt="" />
                            <p className='text-sm text-gray-400'>Downloads</p>
                            <p className='text-xl font-bold'>{downloads / 1000000}M</p>
                        </div>
                        <div className='space-y-2'>
                            <img className='w-7 h-7' src={iconRating} alt="" />
                            <p className='text-sm text-gray-400'>Average Ratings</p>
                            <p className='text-xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div className='space-y-2'>
                            <img className='w-7 h-7' src={iconReview} alt="" />
                            <p className='text-sm text-gray-400'>Total Reviews</p>
                            <p className='text-xl font-bold'>{reviews / 1000}K</p>
                        </div>
                    </div>
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-4 btn px-10 text-white bg-green-500 hover:bg-green-600 disabled:bg-red-500 disabled:cursor-not-allowed`}>
                        {(installed) ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>
            <div>
                <Recharts ratings={ratings}></Recharts>
            </div>
            <div className='mt-15 pb-15'>
                <h3 className='text-lg font-bold mb-4'>Description</h3>
                <p className='text-gray-500'>{description}</p>
            </div>
            
        </div>
    );
};

export default AppDetails;