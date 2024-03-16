import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleList = ({articles}) => {
  return (
    <div className="md:w-3/4 sm:w-full md:mr-4 sm:m-0">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
