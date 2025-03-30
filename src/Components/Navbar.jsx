import React, { useState } from 'react';
import Logo from '../Image/Logo.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-zinc-100 bg-opacity-10 h-[100px] rounded-lg shadow drop-shadow-2xl pr-10 relative z-50">
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" className="max-w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-evenly gap-24">
          <Link to='/' className="text-black font-medium hover:underline cursor-pointer">Home</Link>
          <Link to="/allgetcars" className="text-black font-medium hover:underline cursor-pointer">Buy Car</Link>
          <Link to='/wannasell' className="text-black font-medium hover:underline cursor-pointer">Sell Car</Link>
          <Link to="/about" className="text-black font-medium hover:underline cursor-pointer">About Us</Link>
          <Link to="/Login" className="text-black font-medium hover:underline cursor-pointer">Login</Link>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-[#8471FF] text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
         <motion.div
         className="fixed inset-0 bg-white  backdrop-blur-md shadow-2xl h-72 z-50 flex flex-col items-start py-5 px-6 rounded-b-xl"
         initial={{ y: "-100%", opacity: 0 }}
         animate={{ y: "0%", opacity: 1 }}
         exit={{ y: "-100%", opacity: 0 }}
         transition={{ duration: 0.3, ease: "easeOut" }}
         onClick={() => setIsOpen(false)}
       >
         {/* Close Button */}
         <button
           className="text-[#8471FF] self-end  hover:text-red-500 transition-all focus:outline-none"
           onClick={(e) => {
             e.stopPropagation(); // Prevent menu from closing when clicking "X"
             setIsOpen(false);
           }}
         >
           ✖
         </button>
   
         {/* Navigation Links */}
         <ul className="w-full flex flex-col text-left gap-4 mt-2 tracking-wide">
         <Link
             to="/"
             className="text-lg text-[#8471FF] font-medium hover:text-[#5a3ce8] transition duration-200"
           >
           Home
           </Link>
           <Link
           to="/allgetcars"
             className="text-lg text-[#8471FF] font-medium hover:text-[#5a3ce8] transition duration-200"
           >
             Buy Car
           </Link>
           <Link
             to='/wannasell'
             className="text-lg text-[#8471FF] font-medium hover:text-[#5a3ce8] transition duration-200"
           >
            Sell Car
           </Link>
           <Link
             to="/about"
             className="text-lg text-[#8471FF] font-medium hover:text-[#5a3ce8] transition duration-200"
           >
             About Us
           </Link>
           <Link
             to="/Login"
             className="text-lg text-[#8471FF] font-medium hover:text-[#5a3ce8] transition duration-200"
           >
             Login
           </Link>
         </ul>
       </motion.div>
     
      )}
    </div>
  );
};

export default Navbar;
