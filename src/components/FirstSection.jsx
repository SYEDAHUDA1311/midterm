import React from "react";
import Card from "./Card";

function FirstSection() {
  const arrayData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];
  return (
    <section className=" md:py-[70px] bg-white ">
      <div className="container px-4 mx-auto text-black">
        <div className="text-center">
          <h1 className="text-[30px] sm:text-[34px] md:text-[42px] font-bold text-[#f89625cc]">
            Exclusive Deals!
          </h1>
          <p className="text-[20px] md:text-[24px] font-bold text-[#4f4e4ee1] mt-2">
            It's time to check off your #Bucketlist for this season!
          </p>
        </div>

        <div className="grid w-[100%] grid-cols-1 min-[700px]:grid-cols-2 lg:grid-cols-3 min-[1300px]:grid-cols-4 px-4 gap-6 mt-8 ">
          {arrayData?.length > 0 &&
            arrayData.map((items, index) => <Card key={index} />)}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-10 py-2 mb-2 mr-2 text-lg font-medium text-[#F89725] bg-[#f5ac583f] border border-[#F89725] rounded-lg mt-[50px]"
          >
            View All Deals
          </button>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
