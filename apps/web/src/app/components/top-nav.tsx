import React from "react";

const TopNavbar = () => {
  return (
    <div className="container hidden items-center justify-between px-4 py-2 md:flex">
      <ul className="flex space-x-6 text-sm">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Find Job</a>
        </li>
        <li>
          <a href="#">Employers</a>
        </li>
        <li>
          <a href="#">Candidates</a>
        </li>
        <li>
          <a href="#">Pricing Plans</a>
        </li>
        <li>
          <a href="#">Customer Supports</a>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="phone" className="text-gray-600">
            📞
          </span>
          <span className="text-gray-600">+1-202-555-0178</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
