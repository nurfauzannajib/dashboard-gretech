import React from "react";
import Drop from "../../images/drop.svg";
import Verified from "../../images/verified.svg";

function Summary() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-blue-200 rounded-sm border border-gray-200 -mb-6">
      <header className="px-8 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="h-16 w-16 rounded-md bg-blue-200 flex">
          <img className="w-full" src={Drop} alt="air" />
        </div>
        <span className="absolute pl-40 pt-6">
          <img className="w-6" src={Verified} alt="User" />
        </span>
        <div className="absolute pl-20 pb-2 font-light text-grey-10">
          <p className="">
            Pengkuran Kualitas Air
            <p className="font-bold text-2xl pt-1">Good</p>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Summary;
