import React from "react";

import { LocateIcon, Search } from "lucide-react";

import { cn, Input } from "@nx-next-shadcn/shadcn";

import HeroCard from "./hearo-card";

const Hero = () => {
  return (
    <section className="bg-[#f7f7f8] text-gray-800">
      <div className="container mx-auto flex flex-col justify-center gap-10 p-6 sm:py-12 lg:flex-row lg:py-24">
        <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
          <img
            src="./hero.svg"
            alt=""
            className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
          />
        </div>
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="text-2xl font-bold leading-none sm:text-5xl">
            Find a job that suits your skill and interest
          </h1>
          <p className="mb-8 mt-6 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex items-center justify-between rounded-md bg-white p-2">
            {/* Job Title / Keyword Search */}
            <div className="flex items-center border-r border-gray-300 px-4">
              <Search color="blue" />
              <Input
                type="text"
                placeholder="Job title, Keyword..."
                className={cn("border-none focus-visible:ring-transparent")}
              />
            </div>

            {/* Location Search */}
            <div className="flex items-center border-r border-gray-300 px-4">
              <LocateIcon color="blue" />
              <Input
                type="text"
                placeholder="Your Location"
                className={cn("border-none focus-visible:ring-transparent")}
              />
            </div>

            {/* Find Job Button */}
            <div className="pl-4">
              <button className="h-12 w-28 rounded-md bg-blue-600 px-6 text-white">
                Find Job
              </button>
            </div>
          </div>
          <div className="pt-5">
            <p>
              <span className="font-bold tracking-wide text-gray-700">
                suggestion
              </span>
              : <span className="text-blue-400 underline">programming</span>
              ,animator,web-development,app-development
            </p>
          </div>
        </div>
      </div>
      <div className="center container flex flex-wrap gap-5 pb-10 md:flex-row lg:flex-nowrap xl:gap-10">
        {Array.from({ length: 4 }).map((e, i) => (
          <HeroCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
