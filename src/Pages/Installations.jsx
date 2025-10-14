import React, { useState } from 'react';
import useAppsData from '../Hook/hook';
import LoadingPage from '../Components/LoadingPage';
import { loadAppInstallation } from '../LocalStorage/LocalStorage';
import Installation from '../Components/Installation';

const Installations = () => {
    const { loading } = useAppsData();
    const [installApplication, setInstallApplication] = useState(() => loadAppInstallation())
    const [sort, setSort] = useState('none')
    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    const sortedApp = (() => {
        if(sort === "sort-asc"){
            return [...installApplication].sort((a, b) => b.downloads - a.downloads)
        }
        if(sort === "sort-desc"){
            return [...installApplication].sort((a, b) => a.downloads - b.downloads)
        }else{
            return installApplication;
        }
    })()

    return (
        <div className='mt-15 w-11/12 md:w-10/12 mx-auto'>
            <div className='text-center space-y-3'>
                <h3 className='text-4xl font-bold'>Your Installed Apps</h3>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mt-15 flex justify-between items-center'>
                <p className='text-lg font-bold'>{sortedApp.length} Apps Found</p>
                <select 
                value={sort} 
                onChange={e => setSort(e.target.value)} 
                defaultValue="Sort by downloads" className="select w-50 md:w-80">
                    <option>Sort by downloads</option>
                    <option value={"sort-asc"}>High-Low</option>
                    <option value={"sort-desc"}>Low-High</option>
                </select>
            </div>

            {installApplication.length > 0 ?
                <div className='mt-10 space-y-4'>
                    {
                        sortedApp.map(installation => <Installation key={installation.id} installation={installation} setInstallApplication={setInstallApplication}></Installation>)
                    }
                </div> :
                <p className='mt-15 text-center text-3xl font-bold'>No Apps Installed Yet</p>
            }

        </div>
    );
};

export default Installations;