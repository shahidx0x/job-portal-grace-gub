import React from "react";

import { LucideArrowBigRight, Pen } from "lucide-react";

import { Button } from "@nx-next-shadcn/shadcn";

const ProductCategory = () => {
  return (
    <div className="bg-white p-20">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold"> Popular Category</h2>
          <Button variant="secondary">
            View All <LucideArrowBigRight strokeWidth={1} />
          </Button>
        </div>
        <div className="grid-col-1 grid gap-10 pt-16 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((e, i) => (
            <div key={i} className="flex gap-5">
              <div className="rounded-sm bg-indigo-400 p-5">
                <Pen color="white" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-medium">Graphics Design</h2>
                <p>1200 open vacancies</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
