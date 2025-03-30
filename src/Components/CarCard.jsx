import React, { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

const CarCard = () => {
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
    <div className="px-4 py-6 ml-8 mr-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <RingLoader color="#8471FF" size={80} />
        </div>
      ) : (
        <>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mx-auto">
            {carData.slice(0, 9).map((car) => (
              <Link to={`/car/${car._id}`} key={car._id} className="block">
               <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border p-4 bg-gradient-to-br from-white to-zinc-100 mx-auto hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
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

          {/* View More Button */}
          <div className="mt-6 text-center">
            <Link
              className="text-[#8471FF] text-lg font-medium hover:underline transition duration-300"
              to="/allgetcars"
            >
              View More →
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CarCard;
