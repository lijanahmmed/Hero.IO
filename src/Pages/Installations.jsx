import React, { useState } from 'react';
import useAppsData from '../Hook/hook';
import LoadingPage from '../Components/LoadingPage';
import { loadAppInstallation } from '../LocalStorage/LocalStorage';
import Installation from '../Components/Installation';

const Installations = () => {
    const { loading } = useAppsData();
    const [installApplication, setInstallApplication] = useState(() => loadAppInstallation())
    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className='mt-15 w-11/12 md:w-10/12 mx-auto'>
            <div className='text-center space-y-3'>
                <h3 className='text-4xl font-bold'>Your Installed Apps</h3>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mt-15 flex justify-between items-center'>
                <p className='text-lg font-bold'>{installApplication.length} Apps Found</p>
                <select defaultValue="Sort by downloads" className="select w-50 md:w-80">
                    <option disabled={true}>Sort by downloads</option>
                    <option>High-Low</option>
                    <option>Low-High</option>
                </select>
            </div>

            <div className='mt-10 space-y-4'>
                {
                    installApplication.map(installation => <Installation key={installation.id} installation={installation}></Installation>)
                }
            </div>
        </div>
    );
};

export default Installations;