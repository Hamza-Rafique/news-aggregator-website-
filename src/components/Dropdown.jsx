import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ options, value, onChange, icon, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-4 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
    >
      <option value="">
        {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
