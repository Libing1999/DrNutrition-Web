import React from "react";

const MainPage = () => {
  return (
    <div>
      <div className=" ">
        <div className="mt-20 ml-8 lg:ml-32 sm:ml-14 md:mt-24 h-20 ">
          <button
            type="button"
            className="inline-flex items-center absolute rounded-full md:rounded-full border border-transparent w-52 md:w-60  h-12 md:h-16 bg-[#D9D9D94D] md:px-11 px-5 md:mt-2  py-2 text-base md:text-lg font-normal text-[#67327E] shadow-sm "
          >
            more than health
          </button>
          <img
            src="./assets/nutritionist.png"
            alt="Nutritionist"
            className="absolute h-6 w-6 ml-40 mt-3 md:ml-48 md:mt-7"
          />
        </div>
        <div className="md:flex-inline">
          <div className=" mt-6 sm:ml-10 lg:ml-24">
            <h1 className="font-Ubuntu leading-tight font-bold text-6xl text-[#202A39] ml-8">
              Lorem ipsum dolor
            </h1>
            <h1 className="font-Ubuntu leading-tight font-bold text-6xl text-[#202A39] ml-8">
              sit amet,
            </h1>
            <h1 className="font-Ubuntu leading-tight font-bold text-6xl text-[#67327E] ml-8">
              consectetur{" "}
            </h1>
            <h5 className="text-[#5E6E83] text-lg leading-6 ml-10 mt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              ligula aliquet, viverra odio a, mattis massa.
            </h5>

            <div className="flex flex-inline">
              <button
                type="button"
                className="inline-flex items-center rounded-xl md:rounded-xl border border-transparent w-36 md:w-40 md:text-sm mt-10 ml-10 h-14 md:h-12  bg-[#67327E] md:px-11 px-7 md:mt-12   py-2 text-base font-normal text-[#FFFFFF] shadow-sm  "
              >
                Get started
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-xl md:rounded-xl border border-transparent w-36 md:w-44 md:text-sm mt-10 ml-10 h-14 md:h-12 bg-[#D9D9D933] md:px-11 px-6 md:mt-12   py-2 text-base font-normal text-[#67327E] shadow-sm "
              >
                Watch video
              </button>
            </div>
          </div>
          <div className="lg:flex lg:flex-inline">
            <div className=" md:absolute lg:flex lg:justify-end">
              <img
                src="./assets/wing.png"
                alt="wing image "
                className="absolute mt-20  md:h-40 md:w-40 sm:h-72 sm:ml-8"
              />
              <svg
                width="329"
                height="310"
                viewBox="0 0 456 455"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-8 w-full mt-7 "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M409.382 446.716C359.17 476.376 281.154 414.407 213.502 401.054C145.964 387.723 69.0715 430.401 19.5046 369.761C-30.7921 308.228 33.4845 247.094 32.1497 179.187C31.0554 123.512 -20.2888 49.6767 12.524 14.6232C45.5207 -20.6268 116.837 22.0757 172.732 29.0049C237.082 36.9824 301.866 9.45232 359.358 57.6203C420.651 108.973 440.969 190.828 450.034 261.335C459.31 333.488 462.058 415.601 409.382 446.716Z"
                  fill="#67327E"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
