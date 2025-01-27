
import React from "react";
import { Home, BookOpen, ClipboardList, User, LogOutIcon } from "lucide-react";
import { FaRegUserCircle, FaRupeeSign, FaUserAstronaut, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 w-full sm:w-64 sm:h-full bg-white shadow-md sm:static">
      
      <div className="flex ml-8 flex-col items-center space-x-4 p-4  rounded-lg hidden sm:block">
        <FaRegUserCircle  size={50} />
        <span className="font-semibold text-lg ">Ajay</span>
      </div>

      <div className="flex sm:flex-col justify-between sm:justify-start items-center sm:items-start py-2 sm:py-4 px-4 sm:px-6 h-full">
        {/* Header for desktop */}
        <h2 className="hidden sm:block text-xl font-semibold text-gray-800 mb-6">
          Dashboard
        </h2>

        {/* Menu Items */}
        <nav className="flex flex-row sm:flex-col w-full sm:space-y-4 justify-around sm:justify-start">
          <a
            href="#"
            className="flex items-center space-x-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded"
          >
            <span className="w-6 h-6 text-gray-600">
              <MdDashboard size={20} />
            </span>
            <span className="hidden sm:inline">Dashboard</span>
          </a>
          {/* all claases */}
          <a
            href="#"
            className="flex items-center space-x-2 text-sm hidden sm:text-base block text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded hidden sm:flex"
          >
            <span className="w-6 h-6 text-gray-600">
              <FaUsers size={20} />
            </span>
            <span className="hidden sm:inline">All classes</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded"
          >
            <span className="w-6 h-6 text-gray-600">
              <ClipboardList  size={20}/>
            </span>
            <span className="hidden sm:inline">Assignments</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded"
          >
            <span className="w-6 h-6 text-gray-600">
              <GoGraph size={20} />
            </span>
            <span className="hidden sm:inline">Performance</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-sm sm:text-base  text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded hidden sm:flex"
          >
            <span className="w-6 h-6 text-gray-600">
              <FaRupeeSign size={20}/>
            </span>
            <span className="hidden sm:inline">Fee details</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded hidden sm:flex"
          >
            <span className="w-6 h-6 text-gray-600">
              <IoSettings size={20} />
            </span>
            <span>Settings</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded lg:hidden lg:block "
          >
            <span className="w-6 h-6 text-gray-600">
              <User />
            </span>
            <span className="hidden sm:inline">Profile</span>
          </a>
        </nav>
        <a
            href="#"
            className="flex items-center space-x-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100 px-2 sm:px-4 py-2 rounded hidden sm:flex"
          >
           
            <span>Logout</span>
          </a>
      </div>
    </div>
  );
};

export default Sidebar;
