import React from "react";

function Card() {
  return (
    <div className="rounded-[30px] shadow-xl hover:shadow-gray-400 cursor-pointer">
      <div className="h-[230px] rounded-[20px] bg-[black] relative overflow-hidden">
        <div>
          <img src="/jungle.jpg" alt="" className="absolute h-full w-full" />
        </div>
        <div className="bg-[#F89725] absolute top-[30px] w-[100px] rounded-r-full text-[12px] py-[4px] text-center text-white">
          New Deal
        </div>
      </div>
      <div className=" rounded-[10px] px-4 py-[20px]">
        <h1 className="text-[#F89725] font-bold text-[22px]">
          Thailand-3 Cities
        </h1>
        <p className="text-[20px] text-[#4F4E4E]">07 Nights / 08 Days</p>
        <div className="flex justify-between mt-8">
          <p className="font-semibold">$1100</p>
          <button
            type="button"
            className=" px-6  text-white py-1 font-semibold bg-[#F89725] rounded-[10px]"
          >
            Get Deals
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
