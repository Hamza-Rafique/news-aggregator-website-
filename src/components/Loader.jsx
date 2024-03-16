import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <span className="text-gray-600">No record found</span>
      </div>
      <div className="flex items-center justify-center mt-8">
        <svg
          className="animate-spin h-8 w-8 text-blue-500 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.07a5.002 5.002 0 00-3 8.592V17zm5 2.236A7.973 7.973 0 0112 20c-1.641 0-3.144-.488-4.414-1.318l1.97-2.034A5.007 5.007 0 0017 12h3c0 3.308-2.692 6-6 6z"
          ></path>
        </svg>
        <span className="text-gray-600">Loading...</span>
      </div>
    </>
  );
};

export default Loader;
