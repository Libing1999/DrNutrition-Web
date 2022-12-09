import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import MainPage from "./subcontent1/MainPage";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainContent() {
  return (
    <Disclosure as="nav" className="bg-white md:mt-10 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2 ">
            <div className="relative flex h-16 justify-between ">
              <div className="absolute inset-y-0  left-0 flex items-center sm:hidden ">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-[#5E6E83] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#67327E]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto ml-8 lg:hidden"
                    src="./assets/logo.jpg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-14   w-auto lg:block"
                    src="./assets/logo.jpg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:ml-24 lg:ml-64 sm:flex sm:space-x-6 lg:space-x-16 md:space-x-6 ">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center   px-1 pt-1 text-lg font-medium text-[#67327E] hover:text-[#67327E]"
                  >
                    Why DrNutrition?
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-lg font-medium text-[#202A39]  hover:text-[#67327E]"
                  >
                    Serivces
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-lg font-medium text-[#67327E]  hover:text-[#67327E]"
                  >
                    Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center  border-transparent px-1 pt-1 text-lg font-medium text-[#202A39]  hover:text-[#67327E]"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <Link to="signin">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full md:rounded-xl border border-transparent w-20 md:w-32 mt-2 h-12 md:h-12 bg-[#67327E] md:px-11 px-5 md:mt-2  py-2 text-base font-medium text-[#FFFFFF] shadow-sm "
                >
                  Login
                </button>
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 bg-gray-200  py-2 pl-3 pr-4 text-base font-medium text-[#67327E] hover:text-[#67327E]"
              >
                Why DrNutrition?
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#202A39] hover:bg-gray-300  hover:text-[#67327E]"
              >
                Serivces
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#202A39] hover:border-gray-300 hover:bg-gray-50 hover:text-[#67327E]"
              >
                Store
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#202A39] hover:border-gray-300 hover:bg-gray-50 hover:text-[#67327E]"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
          <MainPage />
        </>
      )}
    </Disclosure>
  );
}
