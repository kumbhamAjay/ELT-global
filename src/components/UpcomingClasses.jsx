import React, { useState } from "react";
import Modal from "./Modal";
import { IoIosNotifications } from "react-icons/io";

const UpcomingClasses = () => {
  const classes = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Class ${index + 1}`,
    status: index % 4 === 0 ? "Live" : "Scheduled",
    time: `10:${String(
      Math.floor(Math.random() * 60)
    ).padStart(2, "0")}`,
    instructor: `Instructor ${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const classesPerPage = 8;
  const totalPages = Math.ceil(classes.length / classesPerPage);
  const startIndex = (currentPage - 1) * classesPerPage;
  const displayedClasses = classes.slice(
    startIndex,
    startIndex + classesPerPage
  );

  const [filterJoinNow, setFilterJoinNow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleJoinClick = (cls) => {
    setSelectedClass(cls);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCheckboxChange = () => {
    setFilterJoinNow((prev) => !prev);
  };

  const bookClasses = displayedClasses.filter((item) => item.status !== "Live");
  const liveClasses = displayedClasses.filter((item) => item.status === "Live");
  const filteredClasses = filterJoinNow
    ? [...liveClasses, ...bookClasses]
    : displayedClasses;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-full sm:max-w-lg lg:max-w-4xl mx-auto">
      <div className="sm:hidden flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <IoIosNotifications className="text-xl cursor-pointer" />
      </div>

      {/* Filter Checkbox */}
      <h2 className="text-2xl font-bold bg-grey-400 mb-4 hidden sm:block">Dashboard</h2>
      <div className="flex items-center mb-4 justify-center">
      
        <h2 className="text-sm font-bold mb-1 text-center text-gray-800 lg:mr-120">
          Upcoming Classes
        </h2>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filterJoinNow}
            onChange={handleCheckboxChange}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="text-gray-600 text-sm">Booked classes only</span>
        </label>
      </div>

      {/* Classes List for Mobile View */}
      <div className=" grid sm:grid-cols-1   lg:grid-cols-1  gap-1">
        {filteredClasses.map((cls) => (
          <div
            key={cls.id}
            className="border-none px-4  rounded-lg w-full shadow-sm flex flex-col sm:flex-row sm:justify-between"
          >
            <div className="flex flex-col sm:w-2/3 mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-800">
                {cls.name}
              </h3>
              <p className="text-sm text-gray-600">by {cls.instructor}</p>
              <p className="text-sm text-gray-500">{cls.time}</p>
            </div>

            <div className="sm:mt-0 mt-4 sm:w-auto w-full flex justify-between items-center">
              {cls.status === "Live" ? (
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs sm:w-auto my-2 w-full"
                  onClick={() => handleJoinClick(cls)}
                >
                  Join Now
                </button>
              ) : (
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs sm:w-auto my-2 w-full">
                  Book Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 flex-wrap">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="flex  my-2 sm:my-0 flex-wrap">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="px-4 py-2 mb-7 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        title="Are you sure?"
        message={`Do you want to join ${selectedClass?.name}?`}
        onCancel={handleCancel}
        onConfirm={handleCancel}
      />
    </div>
  );
};

export default UpcomingClasses;
