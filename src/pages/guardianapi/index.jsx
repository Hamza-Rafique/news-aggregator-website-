import React, { useState, useEffect } from "react";
import { fetchGuardianArticles } from "../../api";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import ToggleSidebar from "../../common/ToggleSidebar.jsx";
import  Sidebar  from "../newsapi/components/Sidebar.jsx";
import Loader from "../newsapi/components/Loader.jsx";

function GuardianPage() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredArticles = articles.filter((article) =>
    article.webTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSectionFilter = (section) => {
    setSelectedSection(section);
  };

  const fetchData = async () => {
    const data = await fetchGuardianArticles();
    setArticles(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const relatedArticles = filteredArticles.slice(-4);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <select
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedSection}
          onChange={(e) => handleSectionFilter(e.target.value)}
        >
          <option value="all">All Sections</option>
          {articles.map((section) => (
            <option key={section.sectionId} value={section.sectionId}>
              {section.sectionName}
            </option>
          ))}
        </select>
      </div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex">
        <div className="w-3/4">
          <h1>Guardian Articles</h1>
          {filteredArticles.length ? (
            <ArticleList articles={filteredArticles} />
          ) : (
            <Loader />
          )}
        </div>
        <div className="w-1/4 ml-4">
          <h2>Related Articles</h2>
          <ArticleList articles={relatedArticles} />
        </div>
      </div>
      <ToggleSidebar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
}

export default GuardianPage;
