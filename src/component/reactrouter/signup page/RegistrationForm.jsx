import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { classNames } from "classnames";

const navigation = [
  { name: "Why DrNutrition?", href: "#" },
  { name: "Services", href: "#" },
  { name: "Store", href: "#" },
  { name: "Contact", href: "#" },
];
export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-white ">
      <Popover as="header" className="relative z-10">
        <div className="bg-white">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 xl:px-8"
            aria-label="Global"
          >
            <div className=" flex w-full items-center justify-between lg:w-auto">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/assets/logo.jpg"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-grape-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-[#67327E] hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#"
                className="rounded-xl w-20 md:w-32 md:h-12 md:px-11 md:pt-2 border border-transparent bg-[#67327E] text-[#FFFFFF] py-2 px-6 text-base font-medium text-grape-600 shadow-md  "
              >
                <Link to="signin"> Login</Link>
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img className="h-8 w-auto" src="/assets/logo.jpg" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#67327E] hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="bg-[#67327E] block w-full rounded-md border border-transparent bg-grape-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-grape-600"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        {/* Header */}

        {/* Contact Section */}
        <div className="relative bg-white ">
          <div className=" relative flex flex-col-reverse px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
            <div className=" ">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0 ">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#67327E]">
                  Sign Up{" "}
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="col-span-2 lg:md:col-span-1">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-[#5E6E83E5]"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("firstname", {
                          required: true,
                          minLength: 2,
                          pattern: /^[A-Za-z]+$/i,
                        })}
                        id="firstname"
                        name="firstname"
                        type="text"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      <error className="text-red-500">
                        {errors.firstname?.type === "required" &&
                          "*This field is required"}
                        {errors.firstname?.type === "minLength" &&
                          "Enter your first name"}
                        {errors.firstname?.type === "pattern" &&
                          " Alphabetical characters only"}
                      </error>
                    </div>
                  </div>
                  <div className="col-span-2 lg:md:col-span-1">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-[#5E6E83E5]"
                    >
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("lastname", {
                          required: true,
                          minLength: 2,
                          pattern: /^[A-Za-z]+$/i,
                        })}
                        id="lastname"
                        name="lastname"
                        type="text"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      <error className="text-red-500">
                        {errors.lastname?.type === "required" &&
                          "*This field is required"}
                        {errors.lastname?.type === "minLength" &&
                          "Enter your last name"}
                        {errors.lastname?.type === "pattern" &&
                          " Alphabetical characters only"}
                      </error>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#5E6E83E5]"
                    >
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                        })}
                        id="email"
                        name="email"
                        type="text"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      <error className="text-red-500">
                        {errors.email?.type === "required" &&
                          "*This field is required"}
                        {errors.email?.type === "pattern" &&
                          "Enter a valid  email"}
                      </error>
                    </div>
                  </div>

                  <div className="flex  col-span-2 ">
                    <div className="w-32">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#5E6E83E5]"
                      >
                        Age
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("age", {
                            required: true,
                            maxLength: 3,
                            // pattern: /\s[0-1]{1}[0-9]{0,2}/,
                          })}
                          id="age"
                          name="age"
                          type="number"
                          className="block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <error className="text-red-500">
                          {errors.age?.type === "required" && "*Age required"}
                          {errors.age?.type === "maxLength" &&
                            "Enter valid age"}
                        </error>
                      </div>
                    </div>
                    <div className=" ml-12 w-3/4">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-[#5E6E83E5]"
                      >
                        I'm looking for
                      </label>
                      <div className="mt-1 ">
                        <input
                          {...register("text", { required: true })}
                          id="text"
                          name="text"
                          type="text"
                          className=" block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <error className="text-red-500">
                          {errors.text?.type === "required" &&
                            "*This field is required"}
                        </error>
                      </div>
                    </div>
                  </div>

                  <div className="flex  col-span-2 ">
                    <div className="w-32 ">
                      <label
                        htmlFor="email"
                        className="flex text-sm font-medium text-[#5E6E83E5]"
                      >
                        Country code
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("number", {
                            required: true,
                            pattern: /^(\+?\d{1,3}|\d{1,4})$/,
                          })}
                          id="age"
                          name="number"
                          type="number"
                          className="block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <error className="text-red-500">
                          {errors.number?.type === "required" &&
                            "*Enter your code"}
                          {errors.number?.type === "pattern" &&
                            "Enter a valid code"}
                        </error>
                      </div>
                    </div>
                    <div className=" ml-12 w-3/4">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-[#5E6E83E5]"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1 ">
                        <input
                          {...register("phone", {
                            required: true,
                            minLength: 10,
                            maxLength: 10,
                          })}
                          id="phone"
                          name="phone"
                          type="number"
                          className=" block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <error className="text-red-500">
                          {errors.phone?.type === "required" &&
                            "*This field is required"}
                          {errors.phone?.type === "minLength" &&
                            "Enter a valid phone number"}
                          {errors.phone?.type === "maxLength" &&
                            "Phone number only contain ten digits"}
                        </error>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[#5E6E83E5]"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("password", {
                          required: true,

                          pattern:
                            /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        })}
                        id="password"
                        name="password"
                        type="password"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      <error className="text-red-500">
                        {errors.password?.type === "required" &&
                          "*This field is required"}

                        {errors.password?.type === "pattern" &&
                          "Must contain min 8 chars(UpperCase, LowerCase, Number and spcl charaters)"}
                      </error>
                    </div>
                  </div>

                  <div className=" ">
                    <button
                      type="submit"
                      className="inline-flex bg-[#67327E] mt-0 rounded-xl border border-transparent bg-grape-600 py-2 px-10 lg:md:py-3 lg:md:px-10 text-sm font-medium text-white shadow-sm hover:bg-[#67327E] focus:outline-none focus:ring-2 focus:ring-[#67327E] focus:ring-offset-2"
                    >
                      <Link to="home">Sign Up </Link>
                    </button>
                  </div>
                  <div className="flex  mb-5 sm:col-span-2  md:block ">
                    <span className="block text-sm font-medium text-[#5E6E83E5]">
                      Already a customer?{" "}
                      <Link to="signin">
                        {" "}
                        <span className="text-[#699424] hover:text-[#67327E]">
                          Sign In
                        </span>
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="my-5 mx-2    ">
              <img
                src="./assets/Rejistration.png"
                alt=""
                className="md:hidden rounded-md md:lg:rounded-3xl"
              />

              <svg
                className="absolute ml-[150px] mt-[20px]  max-lg:hidden"
                width="450"
                height="530"
                viewBox="0 0 450 503"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M228.839 501.233C173.491 490.912 158.366 406.863 118.763 359.399C79.2267 312.015 -3.7329 294.484 0.607756 227.697C5.01232 159.927 91.0585 158.557 134.645 115.043C170.379 79.3675 182.104 3.24871 228.552 0.129369C275.26 -3.00745 298.233 65.0463 333.644 101.679C374.413 143.853 438.781 163.928 448.286 227.44C458.419 295.152 419.256 358.405 379.49 408.018C338.796 458.79 286.903 512.061 228.839 501.233Z"
                  fill="#67327E"
                />
              </svg>
              <img
                className="absolute ml-5 mt-28 h-[35rem] inset-0  w-[32rem] lg:ml-[43rem] object-cover max-lg:hidden"
                src="./assets/signinlogo.png"
                alt="Signin logo"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
