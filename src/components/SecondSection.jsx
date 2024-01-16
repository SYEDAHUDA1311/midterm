import React from "react";

function SecondSection() {
  return (
    <section className="w-[100%]  bg-cover lg:h-[830px] relative overflow-hidden">
   
        <img src="/pexel2.png" alt="" className="absolute min-w-full min-h-full" />
      <div className="lg:h-[830px] w-[100%] flex justify-center items-center relative z-10">
        <div className="flex flex-col justify-center items-center text-white  py-[80px] md:py-0 px-1  md:mt-[150px]">
          <h1 className="text-[17px] sm:text-[32px] md:text-[58px] font-bold text-center">
            Who Said Howlidays Are Expensive?
          </h1>
          <h1 className="text-[15px] sm:text-[28px] md:text-[48px] md:-mt-3 text-center">
            Get Unbelievable Deals For Your New Trip!
          </h1>
          <p className=" text-center text-[14px] sm:text-[16px] md:text-[18px] font-medium w-[100%] md:w-[60%] px-10 mt-2 md:mt-6">
            A top travel agency offers a variety of vacation packages to meet
            all of your travel requirements. We offer the ideal location for
            you, whether you’re seeking a romantic break, a family holiday, or
            an exciting tour.
          </p>
          <a href="/" className="mt-7">
            <button
              type="button"
              className="px-12 py-2 mb-2 mr-2 text-sm font-medium text-white bg-[#F89725] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            >
              Search Flights
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
