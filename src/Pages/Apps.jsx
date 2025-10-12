import React, { useState } from 'react';
import useAppsData from '../Hook/hook';
import AppCard from '../Components/AppCard';
import AppsNotFound from '../Components/AppsNotFound';

const Apps = () => {
    const { apps, loading } = useAppsData();
    const [search, setSearch] = useState('');
    const searchInput = search.trim().toLowerCase();
    const searchApps = searchInput ?
        apps.filter(app => app.title.toLowerCase().includes(searchInput)) : apps

    if (loading) {
        return <p>Loading .....</p>
    }

    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <div className='text-center mt-15 space-y-3'>
                <h3 className='text-4xl font-bold'>Our All Applications</h3>
                <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='mt-10 flex justify-between items-center'>
                <p className='md:text-xl font-bold'>({searchApps.length}) Apps Found</p>
                <label className="input w-50 md:w-80 ">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>

            {searchApps.length > 0 ?
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-15'>
                    {
                        searchApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div> : <AppsNotFound></AppsNotFound>}

        </div>
    );
};

export default Apps;