import React, { useEffect, useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { FaHome, FaBars } from "react-icons/fa"; // Import menu icon

const Adminpanel = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <div className="min-h-screen  flex flex-col bg-purple-100">
      {/* Header */}
      <header className="bg-purple-700 w-screen text-white p-4 flex justify-between ">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white text-2xl focus:outline-none transition-transform duration-300"
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
          toggleSidebar();
        }}
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>

      <h1 className="text-2xl font-semibold">Admin Panel</h1>

      <div className="flex items-center space-x-4">
        <span>Admin</span>
        <button
          onClick={handleLogout}
          className="bg-purple-500 px-3 py-1 rounded hover:bg-purple-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>

      <div className="flex flex-1">
        {/* Sidebar - Hidden on mobile, visible on large screens */}
        <aside
          className={`fixed lg:relative top-0 left-0 w-64 bg-purple-800 text-white p-4 space-y-6 
          transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 
          h-screen lg:h-auto z-50`}
        >
          <button
            className="lg:hidden text-white text-2xl absolute top-4 right-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✖
          </button>

          <nav>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <AiFillDashboard />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCarSport />
                <Link to="/getcars">Cars</Link>
              </li>
              <li className="flex items-center gap-2">
                <BsFillPeopleFill />
                <span>Customers</span>
              </li>
              <li className="flex items-center gap-2">
                <FaHome />
                <Link to="/">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <MdAddCircle />
                <Link to="/addcars">Add Cars</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Panel */}
        <main className="flex-1 p-6 bg-gradient-to-r from-purple-300 via-indigo-400 to-purple-600 animate-background">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white hover:shadow-xl p-4 rounded shadow">
              <div className="flex items-center space-x-4">
                <img
                  alt="Icon representing total cars"
                  className="w-12 rounded-full h-12"
                  src="https://storage.googleapis.com/a1aa/image/qhQXUjbay7KMHd1hNIuBfGHWSG6uw66RDbPI6NPDtoq6pSDKA.jpg"
                />
                <div>
                  <h3 className="text-xl font-semibold">Total Cars</h3>
                  <p className="text-gray-600">150</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings Table */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
            <div className="bg-white rounded shadow overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="py-2 px-4">Customer</th>
                    <th className="py-2 px-4">Car</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">John Doe</td>
                    <td className="py-2 px-4">Toyota Camry</td>
                    <td className="py-2 px-4">2023-10-01</td>
                    <td className="py-2 px-4 text-green-500">Completed</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Jane Smith</td>
                    <td className="py-2 px-4">Honda Accord</td>
                    <td className="py-2 px-4">2023-10-02</td>
                    <td className="py-2 px-4 text-yellow-500">Pending</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Michael Brown</td>
                    <td className="py-2 px-4">Ford Mustang</td>
                    <td className="py-2 px-4">2023-10-03</td>
                    <td className="py-2 px-4 text-red-500">Cancelled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Adminpanel;
