import React, { useState, useEffect } from "react";
import { fetchGuardianArticles } from "../../api";
import ArticleList from "./components/ArticleList";
import ToggleSidebar from "../../common/ToggleSidebar.jsx";
import Sidebar from "../../common/Sidebar.jsx";
import Loader from "../../common/Loader.jsx";
import Header from "../../common/Header.jsx";

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
    <>
      <Header
        handleSearchChange={handleSearchChange}
        selectedSection={selectedSection}
        handleSectionFilter={handleSectionFilter}
        searchTerm={searchTerm}
        articles={articles}
        sourceId="guardian"
      />
      <div className="container mx-auto mt-8">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex sm:flex-col md:flex-row">
          <div className="md:w-3/4 sm:w-full">
            <h1>Guardian Articles</h1>
            {filteredArticles.length ? (
              <ArticleList articles={filteredArticles} />
            ) : (
              <Loader />
            )}
          </div>
          <div className="md:w-1/4 md:ml-4 sm:w-full">
            <h2>Related Articles</h2>
            <ArticleList articles={relatedArticles} />
          </div>
        </div>
        <ToggleSidebar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </>
  );
}

export default GuardianPage;
