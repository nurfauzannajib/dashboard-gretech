import React from "react";
import Mask from "../../images/mask.svg";
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
        <p className="absolute pl-20 pb-2 font-light text-xl text-white ">
          Average Live CO Index
          <p className="font-bold text-2xl pt-1">Good</p>
        </p>

        <span>
          <img
            className="w-20 h-20"
            src={Mask}
            width="32"
            height="32"
            alt="User"
          />
        </span>
      </header>
    </div>
  );
}

export default Summary;
