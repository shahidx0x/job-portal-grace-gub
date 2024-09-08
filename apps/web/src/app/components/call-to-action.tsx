import React from "react";

import { Button } from "@nx-next-shadcn/shadcn";

const CallToAction = () => {
  return (
    <div
      className="w-full bg-gray-500 bg-[url('https://cdn1.photostockeditor.com/c/2311/person-using-laptop-computer-laptop-work.jpg')] p-20"
      style={{
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex flex-col flex-wrap content-center justify-center p-20 backdrop-blur-md">
        <h1 className="text-center text-5xl font-semibold leading-none tracking-widest text-gray-100 antialiased">
          Become a Candidate Now
        </h1>
        <p className="pb-8 pt-2 text-center text-xl tracking-widest text-gray-100 antialiased">
          Find out about events and other news
        </p>
        <div className="center">
          <Button
            type="button"
            className="rounded-r-lg bg-indigo-800 p-7 text-lg font-semibold tracking-widest text-gray-50"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
