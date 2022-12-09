import React from "react";
import {
  AdjustmentsVerticalIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  StarIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
const SearchInput = () => {
  return (
    <div>
      <div className=" justify-center h-[1480px] bg-[#FAF9FB] w-[76rem] ml-[18.8rem] mt-[-100rem]">
        <div className=" ">
          <input
            type="search"
            name="search"
            id="search"
            className=" w-[400px] flex ml-[400px] h-9 mt-[80px] text-[#5E6E83] rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            placeholder="Explore Food Items"
          />
          <div className="ml-[410px] mt-[-27px]">
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

          <div className=" ml-[26rem] rounded-2xl  px-6 pb-4 bg-[#67327E] mt-20 w-[700px] h-[160px] font-Ubuntu">
            <h3 className=" text-[#ffff] font-medium text-xl ml-5 pt-4">
              Design your own diet plan
            </h3>
            <p className="text-[#ffff] w-[500px] ml-5 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button
              type="button"
              className="flex items-center w-[200px] px-4 py-2 mt-3 ml-3.5 border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#67327E] bg-[#FFFFFF]  hover:bg-[#AACA39] hover:text-[#ffff] focus:outline-none "
            >
              Book an Appoinment
            </button>
            <div className="flex  justify-end mt-[-170px]">
              <img
                className="flex h-[175px] w-[141px]
             "
                src="./assets/drimage.png"
                alt="Dr Logo"
              ></img>
            </div>
          </div>
          <div className=" ">
            <h3 className="text-[#5E6E83] ml-[25rem] mt-7 w-[200px] ">
              Meals based on your goals
            </h3>

            <label className="ml-[58rem] mt-[-1rem] flex h-[30px]">
              sort by:
            </label>
            <select
              id="location"
              name="location"
              className=" text-[#67327E] flex ml-[62rem] mt-[-32px] w-[100px] h-[30px] focus:outline-none sm:text-sm font-bold "
              defaultValue="Newest"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Intermediate</option>
            </select>
          </div>

          <div className="   justify-items-center ml-[26.5rem] rounded-2xl  px-6 pb-4 bg-[#ffff] mt-20 w-[330px] h-[230px]">
            <div className="flex">
              <img
                className=" flex w-[130px] h-[90px]  mt-4 "
                src="./assets/dish1.jfif"
                alt="img"
              ></img>
              <h3 className="text-black-900 mt-5 font-semibold ml-[-5px] text-xl">
                Spicy Remen Noodles
              </h3>
            </div>
            <h6 className="ml-[8rem] mt-[-1.5rem] text-[#5E6E83]">100 kcal</h6>
            <h5 className="mt-2 ml-3 text-[#5E6E83]">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              .
            </h5>
            <button
              type="button"
              className="flex-col items-center ml-2.5  px-8 py-2 mt-5 w-[160px] border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#ffff] bg-[#67327E]   focus:outline-none "
            >
              <span className="ml-2">Add to plan</span>
            </button>
            <WalletIcon className="h-6 w-6 ml-6 mt-[-2rem] text-[#ffff] " />
            <button
              type="button"
              className="flex items-center ml-[11rem]  px-8 py-2 mt-[-2rem] w-[100px] h-10 border border-transparent text-base font-medium rounded-2xl shadow-lg text-[#67327E] bg-[#ffff]   focus:outline-none "
            >
              <span className="ml-3">Like</span>
            </button>
            <StarIcon className="h-5 w-6 ml-[12rem] mt-[-1.9rem]" />
          </div>
          <div className="   justify-items-center ml-[51.5rem]  rounded-2xl  px-6 pb-4 bg-[#ffff] mt-[-14.4rem] w-[330px] h-[230px]">
            <div className="flex">
              <img
                className=" flex w-[90px] h-[70px] rounded-lg bg-[#ffff] mt-5 "
                src="./assets/dish2.jfif"
                alt="img"
              ></img>
              <h3 className="text-black-900 mt-5 font-semibold ml-[2rem] text-xl">
                Spicy Remen Noodles
              </h3>
            </div>
            <h6 className="ml-[8rem] mt-[-.5rem] text-[#5E6E83]">100 kcal</h6>
            <h5 className="mt-2 ml-3 text-[#5E6E83]">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              .
            </h5>
            <button
              type="button"
              className="flex-col items-center ml-2.5  px-8 py-2 mt-5 w-[160px] border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#ffff] bg-[#67327E]   focus:outline-none "
            >
              <span className="ml-2">Add to plan</span>
            </button>
            <WalletIcon className="h-6 w-6 ml-6 mt-[-2rem] text-[#ffff] " />
            <button
              type="button"
              className="flex items-center ml-[11rem]  px-8 py-2 mt-[-2rem] w-[100px] h-10 border border-transparent text-base font-medium rounded-2xl shadow-lg text-[#67327E] bg-[#ffff]   focus:outline-none "
            >
              <span className="ml-3">Like</span>
            </button>
            <StarIcon className="h-5 w-6 ml-[12rem] mt-[-1.9rem]" />
          </div>
          <div className="flex  py-10 px-9">
            <img
              src="./assets/dish1.jfif"
              alt="dish"
              className=" flex h-[10rem] w-[12rem] ml-[26rem] mx-4"
            />
            <img
              src="./assets/dish1.jfif"
              alt="dish"
              className="h-[10rem] w-[12rem] ml-[2rem] "
            />
            <img
              src="./assets/dish1.jfif"
              alt="dish"
              className="h-[10rem] w-[12rem] ml-[2rem] "
            />
          </div>
          <div className="flex">
            <h3 className="ml-[28rem]">Plans based on your goals</h3>
            <a
              href="#"
              className="ml-[24rem] mt-2 hidden text-sm font-semibold text-[#67327E] hover:text-indigo-500 sm:block"
            >
              Learn more
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className=" justify-items-center mt-[5rem] ml-[29rem] rounded-2xl  px-6 pb-4 bg-[#ffff]  w-[300px] h-[450px]">
            <h1 className="font-medium text-xl text-[#202A39] pt-3 pl-3">
              Weight Loss
            </h1>
            <h2 className="pt-6 pl-3 text-[#5E6E83] leading-5">
              All the basic weight loss package with meals for 2 weeks
            </h2>
            <h1 className="font-bold text-3xl text-[#202A39] pt-12 pl-3">
              $399
              <span className="text-[#5E6E83] font-semibold text-2xl">
                /mo{" "}
              </span>
            </h1>
            <button
              type="button"
              className="flex items-center  px-[3.5rem] ml-[1rem] py-2 mt-8 w-[220px] border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#ffff] bg-[#67327E]"
            >
              Subscibe Plan
            </button>
            <h3 className="pt-7 pl-2">Whats included</h3>
            <CheckIcon className=" flex h-6 w-6 mt-3 ml-1 text-[#AACA39] " />
            <h6 className="flex text-sm text-[#5E6E83] pl-10 mt-[-1.5rem]">
              All the basic weight loss package with meals for 2 weeks
            </h6>
            <CheckIcon className=" flex h-6 w-6 mt-3 ml-1 text-[#AACA39] " />
            <h6 className="flex text-sm text-[#5E6E83] pl-10 mt-[-1.5rem]">
              All the basic weight loss package with meals for 2 weeks
            </h6>
          </div>

          <div className="  justify-items-center  ml-[51rem] mt-[-27.8rem] rounded-2xl  px-6 pb-4 bg-[#ffff]  w-[300px] h-[450px]">
            <h1 className="font-medium text-xl text-[#202A39] pt-3 pl-3">
              Weight Loss
            </h1>
            <h2 className="pt-6 pl-3 text-[#5E6E83] leading-5">
              All the basic weight loss package with meals for 2 weeks
            </h2>
            <h1 className="font-bold text-3xl text-[#202A39] pt-12 pl-3">
              $399
              <span className="text-[#5E6E83] font-semibold text-2xl">
                /mo{" "}
              </span>
            </h1>
            <button
              type="button"
              className="flex items-center  px-[3.5rem] ml-[1rem] py-2 mt-8 w-[220px] border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#ffff] bg-[#67327E]"
            >
              Subscibe Plan
            </button>
            <h3 className="pt-7 pl-2">Whats included</h3>
            <CheckIcon className=" flex h-6 w-6 mt-3 ml-1 text-[#AACA39] " />
            <h6 className="flex text-sm text-[#5E6E83] pl-10 mt-[-1.5rem]">
              All the basic weight loss package with meals for 2 weeks
            </h6>
            <CheckIcon className=" flex h-6 w-6 mt-3 ml-1 text-[#AACA39] " />
            <h6 className="flex text-sm text-[#5E6E83] pl-10 mt-[-1.5rem]">
              All the basic weight loss package with meals for 2 weeks
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
