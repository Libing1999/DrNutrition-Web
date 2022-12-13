import React from "react";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
const Content = () => {
  return (
    <div>
      <main className="ml-32 ">
        <div className="h-[-20px]">
          <input
            type="search"
            name="search"
            id="search"
            className=" w-[400px] flex  h-9 mt-16 text-[#5E6E83] rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            placeholder="Explore Food Items"
          />
          <div className=" ">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <div className="">
            <input
              type="search"
              name="search"
              id="search"
              className=" w-[200px] flex ml-[900px] mt-[-28px] h-9 text-[#5E6E83] rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
              placeholder="Apply Filters"
            />
            <AdjustmentsVerticalIcon
              className="h-5 w-5 text-gray-400 ml-[910px] mt-[-28px]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <div className=" rounded-2xl  px-6 pb-4 bg-[#67327E] mt-48 w-[770px]  h-62 font-Ubuntu">
            <h3 className=" text-[#ffff] font-medium text-xl ml-5 pt-4">
              Design your own diet plan
            </h3>
            <p className="text-[#ffff] w-[500px] ml-5 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button
              type="button"
              className="flex items-center w-[200px] px-4 py-2 mt-3 ml-3.5 border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#67327E] bg-[#FFFFFF]  hover:bg-[#AACA39] hover:text-[#ffff] focus:outline-none ">
              Book an Appoinment
            </button>
            <div className="flex  justify-end mt-[-170px]">
              <img
                className="flex h-[175px] w-[141px]
             "
                src="./assets/drimage.png"
                alt="Dr Logo"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
