import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{article.webTitle}</h2>
      <p className="text-gray-600 mb-2">{article.webPublicationDate}</p>
      <p className="mb-4">{article.sectionName}</p>
      <a
        href={article.webUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read More
      </a>
    </div>
  );
};

export default ArticleItem;
