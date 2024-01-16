import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="border-gray-200 shadow-xl bg-gradient-to-r to-[green] from-[#FBFE31] py-3">
        <div className="flex flex-wrap items-center justify-between w-[100%] space-x-2 lg:space-x-16  px-4 lg:px-[100px]">
          <a href="/" className="flex items-center w-[150px] ">
            <img src="/travel1.png" />
          </a>
          <div
            className={`absolute overflow-hidden duration-300 ${
              show ? "w-[70%] min-[400px]:w-[50%]" : "w-0"
            } z-20 bg-gray-600 sm:hidden top-0 bottom-0 right-0`}
          >
            <button
              onClick={() => setShow(false)}
              className="text-white w-full flex justify-end px-5 pt-2"
            >
              <MdOutlineClose />
            </button>
            <ul className="flex flex-col p-4 mt-4 font-medium  text-white ">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 rounded text-[#f89725] "
                  aria-current="page"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4  rounded hover:text-[#f89725] "
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4  rounded hover:text-[#f89725] "
                >
                  Hotels
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4  rounded hover:text-[#f89725] "
                >
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setShow(true)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-[14px] text-white rounded-lg sm:hidden hover:text-[#f89725] focus:outline-none focus:ring-2 focus:ring-gray-200"
          ><GiHamburgerMenu size={22}/></button>
          <div className="hidden w-full  sm:w-auto sm:flex justify-center items-center space-x-16">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg sm:p-0 text-white sm:flex-row sm:space-x-3  sm:mt-0 sm:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 rounded sm:bg-transparent text-[#f89725] sm:p-0"
                  aria-current="page"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4  rounded hover:text-[#f89725]  sm:hover:bg-transparent sm:border-0 sm:p-0 "
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4  rounded hover:text-[#f89725]  sm:hover:bg-transparent sm:border-0 sm:p-0 "
                >
                  Hotels
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4  rounded hover:text-[#f89725]  sm:hover:bg-transparent sm:border-0 sm:p-0 "
                >
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
