import React from "react";

const HeroCard = () => {
  return (
    <div className="group transition-shadow duration-300 hover:shadow-sm">
      <div className="flex w-auto items-center space-x-4 rounded-lg bg-white p-8 shadow-sm group-hover:shadow-lg xl:w-72">
        <div className="rounded-lg bg-blue-100 p-3 transition-colors duration-300 group-hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7H8V6a4 4 0 118 0v1zM5 8h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-blue-800">
            1,75,324
          </h2>
          <p className="text-gray-500 transition-colors duration-300 group-hover:text-blue-600">
            Live Job
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
