import React from "react";

import { User2Icon } from "lucide-react";

import { cn } from "@nx-next-shadcn/shadcn";

const HowItWorks = () => {
  return (
    <div className="p-20">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">
          How This Job Platform Works
        </h2>
        <div className="container grid grid-cols-1 gap-5 pt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((e, i) => (
            <div
              key={i}
              className={cn(
                `center flex-col gap-3 rounded-sm p-7 ${i == 1 && "bg-white"} border-inherit shadow-inherit`,
              )}
            >
              <div className="rounded-full border p-3">
                <User2Icon size={50} color="blue" strokeWidth={1.24} />
              </div>
              <h2 className="text-lg font-bold">Create Account</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                sunt
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
