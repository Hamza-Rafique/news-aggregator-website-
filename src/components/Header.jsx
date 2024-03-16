import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../assets";
import Filters from "./Filters";

const Header = ({
  searchTerm,
  onChange,
  onClick,
  category,
  language,
  country,
  onCategoryChange,
  onLanguageChange,
  onCountryChange,
}) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex sm:flex-col md:flex-row sm:gap-3 justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mr-4" />
          <h1 className="text-lg font-semibold">News Aggregator</h1>
        </div>

        <div className="flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={onChange}
              className="pl-10 pr-4 py-2 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>

        <Filters
          category={category}
          language={language}
          country={country}
          onCategoryChange={onCategoryChange}
          onLanguageChange={onLanguageChange}
          onCountryChange={onCountryChange}
        />
      </div>
    </header>
  );
};

export default Header;
