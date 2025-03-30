import React from "react";
import Wanna from "./Wanna";
import { useNavigate } from "react-router-dom";
import BuyIllust from '../Image/BuyIllust.png'
import SmallCars from "../Image/SmallCars.png"

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" z-10 relative ">
      {/* Background Circles */}
      <div className="absolute w-40 h-40 bg-[#8471FF4D] rounded-full top-10 left-10"></div>
      <div className="absolute w-60 h-60 bg-[#8471FF4D] rounded-full top-40 right-60"></div>
      <div className="absolute w-52 h-52 bg-[#8471FF4D] rounded-full bottom-20 left-1/3"></div>

      {/* Main Content */}
        <div className="relative md:text-left sm:text-left z-10 flex flex-col lg:flex-row items-center justify-between p-5 lg:p-20 gap-10">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center md:text-left lg:text-left">
            <h1 className="text-4xl md:text-6xl text-left text-[#1A435F] font-serif font-semibold my-2">
              Buy Smart
            </h1>
            <h1 className="text-4xl md:text-6xl text-left text-[#1A435F] font-serif font-semibold my-2">
              Sell Easy
            </h1>
            <h1 className="text-4xl md:text-6xl text-left text-[#1A435F] font-serif font-semibold my-2">
              Drive Happy
            </h1>
            <p className="text-sm text-left sm:text-lg text-gray-700 mt-3 max-w-xl m-2">
              Our platform makes buying and selling used cars effortless and
              reliable. Discover great deals, connect with trusted buyers, and
              drive away with confidence and peace of mind.
            </p>
            <div className="flex lg:justify-start mt-5 gap-4">
              <button  onClick={() => navigate("/allgetcars")} className="border-2 border-[#000000] px-4 py-2 text-lg sm:text-base rounded-md hover:bg-[#8471FF] hover:text-white transition-all">
                Buy Car
              </button>
              <button  onClick={() => navigate("/wannasell")} className="border-2 border-[#000000] px-4 py-2 text-lg sm:text-base rounded-md hover:bg-[#8471FF] hover:text-white transition-all">
                Sell Car
              </button>
            </div>
            <img
              className="md:w-[350px] sm:w-5 mt-6"
              src={SmallCars}
              alt="Small Car Image"
            />
          </div>
            {/* Main Image */}
            <div className="w-full lg:w-full flex justify-center lg:justify-end">
            <img
              className="w-[60%]   lg:w-[70%] mx-auto"
              src={BuyIllust}
              alt="Main Car Image"
            />
          </div>

        
        </div>

      {/* Call to Action Section */}
      <Wanna />
    </div>
  );
};

export default Hero;
