import React from "react";
import { logo } from "../../../assets";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-4" />
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none focus:text-white"
        >
          {isOpen ? (
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
      </div>
      <div className="px-6">
        <p className="text-sm">Welcome to News Aggregator</p>
        <li className="py-2">
            <Link to="/">Open News</Link>
          </li>
          <li className="py-2">
            <Link to="/news-cred">News Cred</Link>
          </li>
          <li className="py-2">
            <Link to="/guardian">The Guardian</Link>
          </li>
          <li className="py-2">
            <Link to="/bbc-news">BBC News</Link>
          </li>
          <li className="py-2">
            <Link to="/newsapi">NewsAPI.org</Link>
          </li>
      </div>
    </div>
  );
};

export default Sidebar;
