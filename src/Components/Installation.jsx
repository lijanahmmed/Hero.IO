import React from "react";
import iconDownload from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import { removeAppInstallation } from "../LocalStorage/LocalStorage";
import { toast } from "react-toastify";

const Installation = ({ installation, setInstallApplication }) => {
  const { id, image, title, downloads, ratingAvg, size } = installation;

  const handleUninstall = (id) => {
    toast.info(`${title} is uninstalled from your device`);
    removeAppInstallation(id);
    setInstallApplication((prev) =>
      prev.filter((app) => app.id !== Number(id))
    );
  };
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center border border-gray-300 p-2 rounded-lg gap-5">
      <div className="flex items-center gap-3">
        <img
          className="w-15 h-15 object-cover rounded-2xl"
          src={image}
          alt=""
        />
        <div className="space-y-1">
          <h4 className="font-bold">{title}</h4>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-green-500">
              <img className="w-4 h-4" src={iconDownload} alt="" />
              <p>{downloads / 1000000}M</p>
            </div>
            <div className="flex items-center gap-1 text-orange-500">
              <img className="w-4 h-4" src={iconRating} alt="" />
              <p>{ratingAvg}</p>
            </div>
            <div>
              <p className="text-gray-500">{size} MB</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstall(id)}
        className="btn bg-green-400 text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default Installation;
