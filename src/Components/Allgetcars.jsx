import React, { useState, useEffect } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import Navbar from './Navbar';
import { RingLoader } from "react-spinners";
import { Link } from 'react-router-dom';

const Allgetcars = () => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await axios.get("https://car-care-backend-0wo4.onrender.com/api/files");
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching car data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex-col lg:h-screen h-full justify-center bg-[#ddbdf8]">
        <Navbar />
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <RingLoader color="#8471FF" size={80} />
          </div>
        ) : (
          <div className="grid pt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-4 md:ml-20 px-4 md:px-0">
            {carData.map((car) => (
              <Link to={`/car/${car._id}`} key={car._id} >
              <div key={car._id} className="max-w-sm rounded-2xl overflow-hidden shadow-lg border p-4 bg-gradient-to-br from-white to-zinc-100 mx-auto hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
                <img
                  className="w-full h-48 object-cover rounded-xl hover:opacity-90 transition duration-300"
                  src={car.mainfile}
                  alt={car.carName}
                />
                <div className="py-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#8471FF] transition duration-300">
                      {car.carName} {car.carModel}
                    </h2>
                    <button className="text-[#8471FF] hover:text-[#6a4bc3] transition duration-300">
                      <MdFavoriteBorder className="text-2xl" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <p className="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded-full shadow-sm">
                      🚗 {car.kmDriven} km
                    </p>
                    <p className="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded-full shadow-sm">
                      ⛽ {car.fuelType}
                    </p>
                    <p className="text-gray-700 text-sm bg-gray-200 px-2 py-1 rounded-full shadow-sm">
                      📜 {car.rcCondition}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-black mt-3">📅 {car.registrationYear}</p>
                  <p className="text-gray-500 text-sm mt-1">📍 {car.city}, {car.regCity}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Allgetcars;