// import { Fragment, useState } from "react";
// import { Dialog, Menu, Transition } from "@headlessui/react";
// import {
//   ArrowPathIcon,
//   Bars3BottomLeftIcon,
//   BellIcon,
//   StarIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   MagnifyingGlassIcon,
//   RssIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";

// const navigation = [
//   { name: "Overview", href: "#", icon: Squares2X2Icon, current: true },

//   { name: "Experts", href: "#", icon: ArrowPathIcon, current: false },
//   { name: "Favourites", href: "#", icon: StarIcon, current: false },
//   { name: "My Plan", href: "#", icon: RssIcon, current: false },
//   //   { name: "Documents", href: "#", icon: InboxIcon, current: false },
//   //   { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
// ];
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function SideBar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-gray-100">
//         <body class="h-full">
//         ```
//       */}
//       <div>
//         <Transition.Root show={sidebarOpen} as={Fragment}>
//           <Dialog
//             as="div"
//             className="relative z-40 md:hidden"
//             onClose={setSidebarOpen}
//           >
//             <Transition.Child
//               as={Fragment}
//               enter="transition-opacity ease-linear duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="transition-opacity ease-linear duration-300"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
//             </Transition.Child>

//             <div className="fixed inset-0 z-40 flex">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition ease-in-out duration-300 transform"
//                 enterFrom="-translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transition ease-in-out duration-300 transform"
//                 leaveFrom="translate-x-0"
//                 leaveTo="-translate-x-full"
//               >
//                 <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
//                   <Transition.Child
//                     as={Fragment}
//                     enter="ease-in-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in-out duration-300"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <div className="absolute top-0 right-0 -mr-12 pt-2">
//                       <button
//                         type="button"
//                         className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                         onClick={() => setSidebarOpen(false)}
//                       >
//                         <span className="sr-only">Close sidebar</span>
//                         <XMarkIcon
//                           className="h-6 w-6 text-white"
//                           aria-hidden="true"
//                         />
//                       </button>
//                     </div>
//                   </Transition.Child>
//                   <div className="flex flex-shrink-0 items-center px-4">
//                     <img className="h-8 w-auto" src="" alt="Your Company" />
//                   </div>
//                   <div className="mt-5 h-0 flex-1 overflow-y-auto">
//                     <nav className="space-y-1 px-2">
//                       {navigation.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className={classNames(
//                             item.current
//                               ? "bg-gray-100 text-gray-900"
//                               : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
//                             "group flex items-center px-2 py-2 text-base font-medium rounded-md"
//                           )}
//                         >
//                           <item.icon
//                             className={classNames(
//                               item.current
//                                 ? "text-gray-500"
//                                 : "text-gray-400 group-hover:text-gray-500",
//                               "mr-4 flex-shrink-0 h-6 w-6"
//                             )}
//                             aria-hidden="true"
//                           />
//                           {item.name}
//                         </a>
//                       ))}
//                     </nav>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//               <div className="w-14 flex-shrink-0" aria-hidden="true">
//                 {/* Dummy element to force sidebar to shrink to fit close icon */}
//               </div>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         {/* Static sidebar for desktop */}
//         <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
//           {/* Sidebar component, swap this element with another sidebar if you like */}
//           <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
//             <div className="flex flex-shrink-0 items-center px-4">
//               <img
//                 className="h-12.12 w-auto"
//                 src="https://s3-alpha-sig.figma.com/img/90db/aef2/208b15375e4fc75a46785d4d31b15a07?Expires=1670803200&Signature=J79yNFI6DPyPcnmfQA4UCvLi7QOS6ClZCTBhQXafseHFFDlRSo1ZMamCYp2a0kAVQ~XUV7rE4ZeAZ5CAiGe0HxnwssBmgKUPxY2EAFhGcWadXblfXexNx8~5d4cNvnqEDBRvsJf~w6UawvQOATRiwGOsoJSRZ50n-6KaFHIO9rtDhHHcXFPxIQIcvvHio9oeaDHF0-GuqUji9CI5GYHzNiTENe82fOfCX3TBf5KG3g2Q9CN8u-dmTPBsOBK~xOSFMPdiFEjHY7cQ79bxYVXvJMlEB2gd7JD0fT7NANkQIUHCUGi8iEk0Ht3RVRTB6Z4pgPBp48r40Wja64OBvGtwug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
//                 alt="Your Company"
//               />
//             </div>
//             <div className="mt-5 flex flex-grow flex-col">
//               <nav className="flex-1 space-y-1 px-2 pb-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-100 text-gray-900"
//                         : "text-#5E6E83-600 hover:bg-gray-50 hover:text-gray-900",
//                       "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
//                     )}
//                   >
//                     <item.icon
//                       className={classNames(
//                         item.current
//                           ? "text-#5E6E83-500"
//                           : "text-#5E6E83-400 group-hover:text-gray-500",
//                         "mr-3 flex-shrink-0 h-6 w-6"
//                       )}
//                       aria-hidden="true"
//                     />
//                     {item.name}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-1 flex-col md:pl-64">
//           <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
//             <button
//               type="button"
//               className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <span className="sr-only">Open sidebar</span>
//               <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//             <div className="flex flex-1 justify-between px-4">
//               <div className="flex flex-1">
//                 <form className="flex w-full  md:ml-0" action="#" method="GET">
//                   <label htmlFor="search-field" className="sr-only">
//                     Search
//                   </label>
//                   <div className="relative w-full text-gray-400 focus-within:text-gray-600">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
//                       <MagnifyingGlassIcon
//                         className="h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <input
//                       id="search-field"
//                       className="block h-30 w-80 border-transparent py-2 pl-8 bg-gray-200 rounded-xl pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
//                       placeholder="Search"
//                       type="search"
//                       name="search"
//                     />
//                   </div>
//                 </form>
//               </div>
//               <div className="ml-4 flex items-center md:ml-6">
//                 <button
//                   type="button"
//                   className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 ></button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     {/* <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                       <span className="sr-only">Open user menu</span>
//                     </Menu.Button> */}
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       {userNavigation.map((item) => (
//                         <Menu.Item key={item.name}>
//                           {({ active }) => (
//                             <a
//                               href={item.href}
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               {item.name}
//                             </a>
//                           )}
//                         </Menu.Item>
//                       ))}
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <main className="flex-1 ">
//             <div className="py-6">
//               <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
//                 {/* Replace with your content */}
//                 <div className="py-4">
//                   <div className="" />
//                 </div>
//                 {/* /End replace */}
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

import {
  ArrowPathIcon,
  RssIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/24/outline";
import SideBarBottom from "./bottomcard/SideBarBottom";

const navigation = [
  { name: "Overview", icon: Squares2X2Icon, href: "#", current: true },
  { name: "Experts", icon: ArrowPathIcon, href: "#", current: false },

  { name: "My Plan", icon: RssIcon, href: "#", current: false },
  { name: "Favourites", icon: StarIcon, href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar() {
  return (
    <div>
      <div className=" bg-[#ffff] col-span-2  border-r border-gray-300 h-[200vh] w-[300px]">
        <div className="flex flex-shrink-0 items-center px-4"></div>
        <div className="mt-12 flex flex-grow flex-col">
          <nav className=" " aria-label="Sidebar">
            <img
              className="h-[50px] w-auto ml-[90px]"
              src="./assets/logo.jpg"
              alt="Company Logo"
            />
            <div className="mt-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-[#AACA39]"
                      : "text-[#5E6E83] hover:bg-gray-50 hover:text-[#AACA39]",
                    "group flex items-center px-14 py-5 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-[#AACA39]"
                        : "text-[#5E6E83]-600 group-hover:text-[#AACA39]",
                      "mr-3 flex-shrink-0 h-6 w-6 "
                    )}
                    aria-hidden="true"
                  />
                  <span className="flex-1">{item.name}</span>
                  {item.count ? (
                    <span
                      className={classNames(
                        item.current
                          ? "bg-white"
                          : "bg-gray-100 group-hover:bg-gray-200",
                        "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                      )}
                    >
                      {item.count}
                    </span>
                  ) : null}
                </a>
              ))}
              <SideBarBottom />
            </div>
          </nav>
        </div>
      </div>

      {/* <div className=" absolute inset-y-0 right-0  bg-white col-span-2  border-r border-gray-400 min-h-[90vh] w-[300px]"></div> */}
      <div className="absolute inset-y-0 right-0  bg-[#ffff] col-span-2  border-r border-gray-500 h-[350vh] w-[300px] mt-[-50rem]"></div>
    </div>
  );
}
