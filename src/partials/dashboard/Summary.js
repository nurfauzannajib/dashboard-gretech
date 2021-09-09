import React from "react";
import Verified from "../../images/verified.svg";

function Summary() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-green-400 shadow-lg rounded-sm border border-gray-200 -mt-6">
      <header className="px-8 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="h-16 w-16 rounded-md shadow-2xl bg-white flex">
          <p className="flex items-center pl-4 font-bold text-5xl">5</p>
        </div>
        <span className="absolute pl-40 pt-6">
          <img className="w-6" src={Verified} alt="User" />
        </span>
        <div className="absolute pl-20 pb-2 font-light text-white">
          <p className="">
            Average Live CO Index
            <p className="font-bold text-2xl pt-1">Good</p>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Summary;
