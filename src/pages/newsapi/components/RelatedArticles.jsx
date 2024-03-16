import React from "react";
import ArticleCard from "./ArticleCard";

const RelatedArticles = ({ relatedArticles }) => {
  return (
    <div className="md:w-1/4 sm:w-full sm:m-0 md:m-0">
      <h2 className="text-lg font-bold mb-4">Related Articles</h2>
      {relatedArticles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default RelatedArticles;
