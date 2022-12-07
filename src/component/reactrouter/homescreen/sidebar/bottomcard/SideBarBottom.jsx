import React from "react";
import { sideLogo } from "../../../logo/Logo";

const SideBarBottom = () => {
  return (
    <div>
      <div className=" grid-flow-row justify-items-center ml-[35px] rounded-2xl  px-6 pb-4 bg-[#67327E] mt-20 w-[230px] h-[230px]">
        <img className="h-[110px] w-auto  " src={sideLogo} alt="Your Company" />
        <h3 className=" text-[#FFFFFF] mt-4 text-sm font-Ubuntu regular leading-4">
          DrNutrition App is now available on mobile devices.
        </h3>
        <button
          type="button"
          className="flex items-center  px-8 py-2 mt-5 w-[180px] border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#67327E] bg-[#FFFFFF]  hover:bg-[#AACA39] hover:text-[#ffff] focus:outline-none "
        >
          Download Now
        </button>
      </div>
    </div>
  );
};

export default SideBarBottom;
