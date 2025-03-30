import React from "react";
import Illustration from "../Image/Illustration.png";

const Wanna = () => {
  return (
    <div className="flex items-center bg-purple-300 h-screen  justify-center px-4">
      <div className="flex flex-wrap md:flex-nowrap justify-between   bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-full">
        
        {/* Left Section: Illustration Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-[80%] md:w-auto md:h-[340px] p-4 rounded-xl"
            src={Illustration}
            alt="Illustration"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl md:text-4xl text-[#19435E] font-mono font-semibold mb-6 text-center">
            Wanna Sell Your Car?
          </h1>
          <input
            type="text"
            className="border border-gray-400 p-3 h-12 rounded-md w-full max-w-[90%] md:max-w-[60%] text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#8471FF]"
            placeholder="Enter your Mobile Number"
          />
          <button className="bg-[#8471FF] rounded-lg h-12 text-lg md:text-xl px-10 py-2 text-white w-full max-w-[90%] md:max-w-[60%] border-[#423980] border hover:bg-[#6f5ce8] transition-all">
            Request a Callback
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Wanna;
