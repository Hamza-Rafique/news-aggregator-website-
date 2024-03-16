import React from "react";
import Dropdown from "./Dropdown";
import {
  faThList,
  faGlobe,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

const Filters = ({
  category,
  language,
  country,
  onCategoryChange,
  onLanguageChange,
  onCountryChange,
}) => {
  const categoryOptions = [
    { value: "", label: "All Categories" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const languageOptions = [
    { value: "", label: "All Languages" },
    { value: "ar", label: "Arabic" },
    { value: "de", label: "German" },
    { value: "en", label: "English" },
  ];

  const countryOptions = [
    { value: "", label: "All Countries" },
    { value: "us", label: "United States" },
    { value: "gb", label: "United Kingdom" },
    { value: "fr", label: "France" },
  ];
  return (
    <div className="flex sm:flex-col md:flex-row sm:gap-3">
      <Dropdown
        options={categoryOptions}
        value={category}
        onChange={onCategoryChange}
        icon={faThList}
        placeholder="All Categories"
      />

      <Dropdown
        options={languageOptions}
        value={language}
        onChange={onLanguageChange}
        icon={faGlobe}
        placeholder="All Languages"
      />

      <Dropdown
        options={countryOptions}
        value={country}
        onChange={onCountryChange}
        icon={faGlobeAmericas}
        placeholder="All Countries"
      />
    </div>
  );
};

export default Filters;
