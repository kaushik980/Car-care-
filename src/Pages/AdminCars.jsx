import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminCars = () => {
  const [carData, setCarData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (!login) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await axios.get("https://car-care-backend-0wo4.onrender.com/api/files");
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching car data", error);
    }
  };

  const handleDelete = async (carId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this car?");
    if (!isConfirmed) return;

    try {
      await axios.delete(`https://car-care-backend-0wo4.onrender.com/api/files/${carId}`);
      setCarData(carData.filter(car => car._id !== carId));
      toast.success("Car deleted successfully!");
    } catch (error) {
      console.error("Error deleting car", error);
      toast.error("Failed to delete car.");
    }
  };

  const handleCarClick = (carId) => {
    navigate(`/car-details/${carId}`); // Navigate to the dynamic route
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Car List</h1>
      <ToastContainer />

      {/* Car Grid Container */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {carData.map((car) => (
            <div 
              key={car._id} 
              className="bg-white p-2 shadow-lg border rounded-xl overflow-hidden max-w-xs w-full mx-auto cursor-pointer"
              onClick={() => handleCarClick(car._id)} // Add onClick handler for dynamic routing
            >
              <img className="w-full rounded-lg h-48" src={car.mainfile} alt={car.carName} />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{car.carName} {car.carModel}</h2>
                <div className="flex flex-wrap gap-2 mt-2 text-gray-600">
                  <p>{car.kmDriven} km</p>
                  <p>{car.fuelType}</p>
                  <p>{car.rcCondition}</p>
                </div>
                <p className="text-lg font-bold text-black mt-2">{car.registrationYear}</p>
                <p className="text-gray-500">{car.city}, {car.regCity}</p>
              </div>
              <div className="flex justify-end p-4">
                <MdDelete 
                  className="text-red-600 text-2xl cursor-pointer hover:text-red-800"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card click event from firing
                    handleDelete(car._id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCars;