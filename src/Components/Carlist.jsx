import React from 'react'

const Carlist = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <button className="bg-purple-500 text-white p-2 rounded-full">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <img src="https://placehold.co/300x200" alt="Side view of Volkswagen Virtus" className="rounded-lg" />
                        <img src="https://placehold.co/300x200" alt="Front view of Volkswagen Virtus" className="rounded-lg" />
                        <img src="https://placehold.co/300x200" alt="Another side view of Volkswagen Virtus" className="rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">Volkswagen Virtus (2023)</h2>
                        <p className="text-gray-600">GT Plus Sport DSG 1.5 L</p>
                        <div className="flex items-center text-gray-600 mt-2">
                            <i className="fas fa-gas-pump mr-2"></i> Petrol
                            <i className="fas fa-road mx-4"></i> 30,000 KM
                            <i className="fas fa-cogs"></i> Automatic
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-purple-100 p-4 rounded-lg mb-4">
                        <div className="text-2xl font-bold text-purple-700">₹ 12,00,000</div>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Make Offer</button>
                    </div>
                    <div className="flex justify-between items-center bg-purple-100 p-4 rounded-lg mb-4">
                        <div className="flex items-center">
                            <i className="fas fa-user mr-2"></i> Owner
                            <span className="ml-2">1 ST</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt mr-2"></i> Location
                            <span className="ml-2">Jafar nagar, Nagpur</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-calendar-alt mr-2"></i> Posting date
                            <span className="ml-2">18/11/2024</span>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">All details</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p>Year of manufacturing : 2023</p>
                                <p>Reg. state : Maharashtra</p>
                                <p>Reg. city : Nagpur</p>
                                <p>Insurance type : Available</p>
                                <p>Road tax date (validity) : 28-Oct-2038</p>
                            </div>
                            <div>
                                <p>CNG/LPG fitment in RC: N/A</p>
                                <p>Reg. Number : MHXXXXXXXX</p>
                                <p>Reg. city : Nagpur</p>
                                <p>Insurance type : Available</p>
                                <p>Road tax date (validity) : 28-Oct-2038</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Carlist