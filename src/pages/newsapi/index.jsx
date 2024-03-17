import React, { useState, useEffect } from "react";
import { ArticleList, RelatedArticles } from "./components";
import { fetchNewsArticles } from "../../api";
import { Header, Loader, Sidebar, ToggleSidebar } from "../../common";

function NewsAPIPage() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Apple");
  const [currentPage] = useState(1);
  const [articlesPerPage] = useState(6);
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [searchTerm, category, language, country]);

  const fetchData = async () => {
    const articlesData = await fetchNewsArticles(
      searchTerm,
      category,
      language,
      country
    );
    setArticles(articlesData);
  };
  const handleSearchSubmit = () => {
    fetchData();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const relatedArticlesData = articles.slice(0, 3);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-slate-200 bg-background bg-cover h-full">
      <Header
        searchTerm={searchTerm}
        onChange={handleSearchChange}
        onClick={handleSearchSubmit}
        category={category}
        language={language}
        country={country}
        onCategoryChange={handleCategoryChange}
        onLanguageChange={handleLanguageChange}
        onCountryChange={handleCountryChange}
      />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="container mx-auto mt-8">
        <div className="flex sm:flex-col md:flex-row">
          {articles.length ? (
            <>
              <ArticleList articles={currentArticles} />
              <RelatedArticles relatedArticles={relatedArticlesData} />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </main>
      <ToggleSidebar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
}

export default NewsAPIPage;
