import { Link } from "react-router-dom";
export default function Form() {
  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mt-8 flex flex-wrap md:ml-14  w-96 ">
              <div>
                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>

              <div className=" mt-6 ml-6 md:w-[35rem]">
                <h1
                  className="font-bold text-3xl text-[#67327E]
              "
                >
                  <Link to="signin/home">SIGN IN</Link>
                </h1>
                <form action="#" method="POST" className="space-y-5 ">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-base font-medium text-[#5E6E83E5] mt-4"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-xl border border-[#C2C2C2] px-3 py-2 placeholder-[#5E6E83E5] shadow-sm  focus:outline-none  sm:text-sm h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="block text-base font-medium text-[#5E6E83E5]"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-xl border border-gray-300 px-3 py-2 h-12 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="text-base">
                      <a href="#" className="font-medium text-[#67327E]">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Link to="home">
                      <button
                        type="button"
                        className="inline-flex items-center w-32 rounded-xl border border-transparent bg-[#67327E] px-9 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2"
                      >
                        Sign In
                      </button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-2 text-sm text-gray-500">
                        or you can sign in with
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="mt-1 flex flex-inline gap-3 ">
                      <div>
                        <a
                          href="#"
                          className="inline-flex w-32 h-12  justify-center rounded-xl border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        >
                          <img
                            src="./assets/googlelogo.png"
                            alt="google"
                            className="h-6 w-6"
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="inline-flex w-32 h-12  justify-center rounded-xl border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        >
                          <img
                            src="./assets/fblogo.png"
                            alt="google"
                            className="h-7 w-7"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#202A39]">
                      New to DrNutrition?
                      <span className="text-[#699424] hover:text-[#202A39]">
                        <Link to="/">
                          {" "}
                          <a href="#"> Register Now</a>
                        </Link>
                      </span>
                    </h1>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 flex-wrap lg:block ml-[18rem] mt-[5rem] ">
          <img
            className="absolute ml-5 mt-12 h-[35rem] inset-0  w-[32rem] object-cover"
            src="./assets/signinlogo.png"
            alt="Signin logo"
          />
          <svg
            className="ml-[110px] mt-[60px]"
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
        </div>
      </div>
    </>
  );
}
