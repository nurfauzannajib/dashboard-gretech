import React from "react";

function WelcomeBanner() {
  return (
    <div className="relative bg-blue-450 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}

      {/* Content */}
      <div className="relative">
        <span className="absolute text-grey-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <h1 className="text-2xl pl-14 md:text-3xl text-grey-10 font-bold mb-1">
          Makassar State University Makassar City, South Sulawesi 90222.
        </h1>
      </div>
    </div>
  );
}

export default WelcomeBanner;
