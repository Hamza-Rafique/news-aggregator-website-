import React from 'react'

const ArticleCard  = ({article}) => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
    <h2 className="text-lg font-bold mb-2">{article.title}</h2>
    <p className="text-sm text-gray-600 mb-4">{article.description}</p>
    <p className="text-xs text-gray-500">Published on {new Date(article.publishedAt).toLocaleDateString()}</p>
  </div>
  )
}

export default ArticleCard 
