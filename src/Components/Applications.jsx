import React from "react";
import useAppsData from "../Hook/hook";
import AppCard from "./AppCard";
import { Link } from "react-router";

const Applications = () => {
  const { apps } = useAppsData();
  const treadingApps = apps.slice(0, 8);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-15">
      <div className="space-y-5">
        <h3 className="text-3xl font-extrabold text-center">Trending Apps</h3>
        <p className="text-gray-400 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {treadingApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="mt-10 text-center pb-15">
        <Link
          to="/apps"
          className="btn bg-gradient-to-r from-purple-600 to-purple-500 text-white py-6 px-10"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Applications;
