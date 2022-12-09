import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Content from "./Content";
import {
  ArrowPathIcon,
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  RssIcon,
  Squares2X2Icon,
  StarIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Overview", href: "#", icon: Squares2X2Icon, current: true },
  { name: "Experts", href: "#", icon: ArrowPathIcon, current: false },
  { name: "My Plan", href: "#", icon: RssIcon, current: false },
  { name: "Favourites", href: "#", icon: StarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-inline">
        <div className="font-Ubuntu">
          {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
          <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 md:hidden"
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-[#FAF9FB] bg-opacity-105" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-[#FFFFFF]">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                          <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon
                              className="h-6 w-6 text-black "
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                        <div className="flex flex-shrink-0 items-center px-4">
                          <img
                            className="h-12 w-auto"
                            src="./assets/logo.jpg"
                            alt="Your Company"
                          />
                        </div>
                        <nav className="mt-5 space-y-1 px-2">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-[#ffff] text-[#AACA39] hover:text-[#AACA39]"
                                  : "text-[#5E6E83] hover:bg-[#ffff] hover:text-[#AACA39]",
                                "group flex items-center px-2 py-4 text-lg font-medium rounded-md"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-[#AACA39] hover:text-[#AACA39]"
                                    : "text-[#5E6E83]-600 group-hover:text-[#AACA39]",
                                  "mr-3 flex-shrink-0 h-6 w-6 "
                                )}
                              />
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                      {/* <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
                      <a href="#" className="group block flex-shrink-0">
                        <div className="flex items-center">
                          <div>
                            <img
                              className="inline-block h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-white">
                              Tom Cook
                            </p>
                            <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                              View profile
                            </p>
                          </div>
                        </div>
                      </a>
                    </div> */}
                    </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0 " aria-hidden="true">
                    {/* Force sidebar to shrink to fit close icon */}
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            {/* sidebar*/}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col ">
              {/* Sidebar div */}
              <div className=" flex min-h-0 flex-1 border-r border-gray-300 flex-col bg-[#ffff]">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-8">
                    <img
                      className="md:h-14  w-auto md:ml-16 md:mt-10"
                      src="./assets/logo.jpg"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="mt-16 flex-1 space-y-6 px-20  max-h-64">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-[#AACA39] hover:text-[#AACA39]"
                            : "text-[#5E6E83]  hover:text-[#AACA39]",
                          "group flex items-center px-2 py-2 text-lg font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-[#AACA39] hover:text-[#AACA39]"
                              : "text-[#5E6E83]-600 group-hover:text-[#AACA39]",
                            "mr-3 flex-shrink-0 h-6 w-6 "
                          )}
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                  <div className="ml-12 mt-20 rounded-2xl  px-6 pb-4 bg-[#67327E]   md:w-56 md:h-52">
                    <img
                      className="h-28 w-40 mt-[-2rem] "
                      src="./assets/foodimg.png"
                      alt="Your Company"
                    />

                    <h3 className=" text-[#FFFFFF] mt-4 text-sm font-Ubuntu regular leading-4">
                      DrNutrition App is now available on mobile devices.
                    </h3>
                    <button
                      type="button"
                      className="flex items-center w-[11rem] px-5 py-2 mt-5 pl-7 border border-transparent text-base font-medium rounded-2xl shadow-sm text-[#67327E] bg-[#FFFFFF]  hover:bg-[#AACA39] focus:outline-none "
                    >
                      Download Now
                    </button>
                  </div>
                </div>
                {/* <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
                <a href="#" className="group block w-full flex-shrink-0">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">Tom Cook</p>
                      <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div> */}
              </div>
            </div>
            <div className="flex flex-1 flex-col md:pl-64">
              <div className="sticky top-0 z-10  pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                <button
                  type="button"
                  className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center  justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#67327E]"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
                </button>
              </div>
              {/* <main className="flex-1 bg-red-500 ">
              <div className="py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                 
                  <div className="py-4 bg-green-400"></div>
                  
                </div>
              </div>
            </main>  */}

              <div>
                <Content />
              </div>
              <div className="hidden  md:fixed h-full  md:flex md:w-80 md:flex-col ">
                <div className=" flex  min-h-0 flex-1 ml-[60rem] border-r  border-gray-300 flex-col ">
                  <nav className="mt-16 flex-1 space-y-6 px-20  max-h-64"></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
