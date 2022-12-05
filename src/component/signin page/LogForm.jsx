import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Form from "./Form";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LogForm() {
  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#202A39] hover:bg-[#67327E] hover:text-[#67327E] focus:outline-none  ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 py-2 pt-36 pb-4 bg-slate-300 w-80">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-[#67327E]"
                    >
                      Why DrNutrition?
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#202A39] hover:border-gray-300 hover:bg-gray-50 hover:text-[#67327E]"
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
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#202A39] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      Contact
                    </Disclosure.Button>
                  </div>
                </Disclosure.Panel>
              </div>
              <div className="flex  items-center justify-center mt-10 sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto ml-[7rem] mt-[-2rem] lg:hidden"
                    src="./assets/logo.jpg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-10  w-auto lg:block"
                    src="./assets/logo.jpg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 md:mr-16">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center  px-5 pl-[14rem] max-md:pl-10  pt-1 text-lg  font-normal text-[#202A39] hover:text-[#67327E]"
                  >
                    Why DrNutrition?
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-5 pt-1 text-lg font-normal text-[#202A39]  hover:text-[#67327E]"
                  >
                    Serivces
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-5 pt-1 text-lg font-normal text-[#202A39] hover:text-[#67327E]"
                  >
                    Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-5 pt-1 text-lg font-normal text-[#202A39]  hover:text-[#67327E]"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center mt-1 md:mt-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="inline-flex items-center rounded-xl border border-transparent w-20 md:w-32 md:h-12 bg-[#67327E] md:px-11 px-5 md:mt-9  py-2 text-base font-medium text-[#FFFFFF] shadow-sm "
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <div>
            <Form />
          </div>
        </>
      )}
    </Disclosure>
  );
}
