import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between hidden sm:block">
      <div className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">Blogs</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">News</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Customer Care</a>
      </div>
    </header>
  );
};

export default Header;
{/* <div className="hidden sm:block"> */}
