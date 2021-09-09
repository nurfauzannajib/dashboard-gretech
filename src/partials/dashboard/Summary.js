import React from "react";
import Mask from "../../images/mask.svg";

function Summary() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200 -mt-6">
      <header className="px-8 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="h-10 w-10 bg-gray-400 flex "></div>
        <h2 className="absolute pl-10 font-semibold text-4xl text-gray-800 ">
          Co
        </h2>

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
