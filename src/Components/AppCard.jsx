import React from 'react';
import iconDownload from '../assets/icon-downloads.png';
import iconRating from '../assets/icon-ratings.png';

const AppCard = ({ app }) => {
    const { id, image, title, ratingAvg, downloads } = app;

    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className=''>
                <img className='p-3 rounded-4xl w-44 h-44 object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                    <div className="bg-gray-100 p-2 text-green-500 font-bold flex gap-2 items-center">
                        <img className='w-5 h-5' src={iconDownload} alt="" />
                        <p>{downloads/1000000}M</p>
                    </div>
                    <div className="bg-orange-100 p-2 text-orange-500 font-bold flex gap-2 items-center">
                        <img className='w-5 h-5' src={iconRating} alt="" />
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;