/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Form() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
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
                  SIGN IN
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
                    <button
                      type="button"
                      className="inline-flex items-center w-32 rounded-xl border border-transparent bg-[#67327E] px-9 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign In
                    </button>
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
                  {/* <div className="w-full border-t border-gray-300" /> */}

                  {/* <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-[#202A39]"></span>
                  </div> */}

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

                      {/* <h3>Google</h3> */}
                      {/* <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clipRule="evenodd"
                            />
                          </svg> */}
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#202A39]">
                      New to DrNutrition?
                      <span className="text-[#699424] hover:text-[#202A39]">
                        <a href="#"> Register Now</a>
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
