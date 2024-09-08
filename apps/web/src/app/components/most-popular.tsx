import React from "react";

const MostPopular = () => {
  return (
    <div className="bg-white p-20">
      <div className="container">
        <h1 className="text-4xl font-bold">Most Popular Vacancies</h1>
        <div className="grid grid-cols-1 gap-9 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((e, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-gray-600">
                Web Programming
              </h2>
              <p className="font-thin text-gray-400">1200 open position</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
