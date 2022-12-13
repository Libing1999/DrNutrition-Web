import {
  ArrowPathIcon,
  RssIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/24/outline";
import SideBarBottom from "./SideBarBottom";

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
                  )}>
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
                      )}>
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
