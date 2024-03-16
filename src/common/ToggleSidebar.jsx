import React from "react";

const ToggleSidebar = ({ toggleSidebar, isSidebarOpen  }) => {
  return (
    <button
      onClick={toggleSidebar}
      className={`fixed bottom-4 left-3 h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center transition-all duration-300 ease-in-out transform ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {isSidebarOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleSidebar;
