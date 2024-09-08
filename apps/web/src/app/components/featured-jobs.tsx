import React from "react";

import {
  Bookmark,
  Locate,
  LocateFixedIcon,
  LucideArrowBigRight,
  MapPin,
} from "lucide-react";

import { Button } from "@nx-next-shadcn/shadcn";

const FeaturedJobs = () => {
  return (
    <div className="bg-white p-20">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold"> Featured Jobs</h2>
          <Button variant="secondary">
            View All <LucideArrowBigRight strokeWidth={1} />
          </Button>
        </div>
        <div className="grid-col-1 grid grid-cols-1 gap-8 pt-16 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 12 }).map((e, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-2 rounded-md px-5 py-3 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#fff5db] hover:to-[#ffff] hover:shadow-md md:w-96"
            >
              <div>
                <h2 className="text-lg font-medium text-gray-700">
                  Technical Support Specialist
                </h2>
                <div className="flex gap-2">
                  <div className="rounded-sm bg-green-100 p-1 text-xs font-bold text-green-500">
                    PART-TIME
                  </div>
                  <p className="font-mono text-gray-500">
                    Salary:$20000-$25000
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-sm bg-indigo-100 p-8"></div>
                  <div>
                    <h2 className="text-base font-medium text-gray-600">
                      Google Inc
                    </h2>
                    <div className="flex gap-1">
                      <MapPin strokeWidth={0.5} />
                      <p className="text-base text-gray-500">
                        Dhaka,Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
                <Bookmark strokeWidth={0.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
