import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Wanna from '../Components/Wanna'
import Logo from '../Image/BuyIllust.png'

import CarCard from '../Components/CarCard.jsx'
import About from '../Components/About.jsx'
import Footer from '../Components/Footer.jsx'


const Home = () => {
  return (
    <div className=''> <div className='bg-[#DED9FF]  flex-col justify-center items-center w-full px-'>
    < Navbar />


    <Hero />
    <CarCard />
    <About />
    <marquee className="flex items-center text-[#1A435F] font-serif font-semibold text-xl">
        <div className="flex items-center space-x-4">
          {/* Mirrored Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="w-48 h-auto transform scale-x-[-1]" // Mirroring effect
          />
          {/* Text Content */}
          <h1 className="text-3xl">
            Car Care - <span className="text-[#FF5733]">Buy Smart</span>,{" "}
            <span className="text-[#28A745]">Sell Easy</span>,{" "}
            <span className="text-[#007BFF]">Drive Happy</span>
          </h1>
          {/* Original Logo */}
          <img src={Logo} alt="Logo" className="w-48 h-auto" />
        </div>
      </marquee>
    <Footer/>
    
    
</div></div>
   
  )
}

export default Home