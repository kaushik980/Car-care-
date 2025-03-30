import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGasPump, FaRoad, FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { RingLoader } from "react-spinners"; // Import the loader

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          `https://car-care-backend-0wo4.onrender.com/api/files/${id}`
        );

        // Ensure the first image is the main image
        if (response.data.file_urls && response.data.file_urls.length > 0) {
          const mainImage = response.data.mainImageUrl || response.data.file_urls[0];
          const otherImages = response.data.file_urls.filter((url) => url !== mainImage);
          response.data.file_urls = [mainImage, ...otherImages];
        }

        setCar(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car details", error);
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <RingLoader color="#8471FF" size={80} />
      </div>
    );
  }

  if (!car) return <p>No car found!</p>;

  return (
    <div className="bg-purple-300 p-10">
      <div className="min-w-screen mx-auto bg-white shadow-lg rounded-md p-6 border">
        
        {/* Image Slider */}
        {car.file_urls && car.file_urls.length > 0 ? (
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="w-full h-full rounded-lg shadow-xl"
          >
            {car.file_urls.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">No images available</p>
        )}

        {/* Car Details */}
        <div className="ml-4">
          <h1 className="text-4xl font-bold">{car.model}</h1>
        </div>

        <div className="flex justify-between items-start mt-4">
          <div>
            <h1 className="text-2xl font-bold">
              {car.carName} {car.carModel}
            </h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <FaGasPump /> {car.fuelType}
              </div>
              <div className="flex items-center gap-1">
                <FaRoad /> {car.kmDriven}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-6 grid grid-cols-3 gap-4 bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <FaUser className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Owner</p>
              <p className="font-medium">{car.noOfOwners}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">{car.regCity}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdCalendarToday className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Posting Date</p>
              <p className="font-medium">18/11/2024</p>
            </div>
          </div>
        </div>

        {/* All Details */}
        <div className="mt-6">
          <h2 className="text-3xl font-semibold mb-2">All Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="text-xl">
                Year of Manufacturing: <span className="font-medium">{car.yearOfManufacturing}</span>
              </p>
              <p className="text-xl">
                Reg. State: <span className="font-medium">Maharashtra</span>
              </p>
              <p className="text-xl">
                Reg. City: <span className="font-medium">{car.regCity}</span>
              </p>
              <p className="text-xl">
                Insurance Type: <span className="font-medium">{car.insuranceType}</span>
              </p>
              <p className="text-xl">
                Road Tax Validity: <span className="font-medium">{car.roadTaxDateValidity}</span>
              </p>
            </div>
            <div>
              <p className="text-xl">
                CNG/LPG Fitment: <span className="font-medium">{car.cngFitmentInRc}</span>
              </p>
              <p className="text-xl">
                Reg. Number: <span className="font-medium">{car.registrationNumber}</span>
              </p>
              <p className="text-xl">
                Current City: <span className="font-medium">{car.city}</span>
              </p>
              <p className="text-xl">
                Road Tax Validity: <span className="font-medium">28-Oct-2038</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarDetail;
