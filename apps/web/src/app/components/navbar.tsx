import React from "react";

import { BriefcaseBusiness } from "lucide-react";

import { Button, Input } from "@nx-next-shadcn/shadcn";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@nx-next-shadcn/shadcn";

const Navbar = () => {
  return (
    <nav className="hidden bg-white md:block">
      <div className="container flex items-center justify-between bg-white p-4">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <BriefcaseBusiness strokeWidth={1.25} color="blue" />
            <span className="px-5 text-lg font-bold">Jobpilot</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center rounded border border-gray-300">
              {/* Country Dropdown */}
              <div className="flex items-center px-2">
                <Select>
                  <SelectTrigger className="w-auto lg:w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Bar */}

              <Input
                type="text"
                placeholder="Job title, keyword, company"
                className="w-auto border-0 px-3 py-2 outline-none lg:w-80"
              />
              <button className="border-l-2 px-3 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.415l4.3 4.3a1 1 0 11-1.414 1.414l-4.3-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Country and Search */}

        {/* Right Section: Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="secondary" className="border px-7">
            Sign In
          </Button>
          <Button className="rounded bg-blue-600 px-4 py-2 text-white">
            Post A Job
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
