import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search articles..."
      value={searchTerm}
      onChange={onSearchChange}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
    />
  );
};

export default SearchBar;
