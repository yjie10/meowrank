import { useState } from 'react';
import { dummyArticles } from './data/dummyArticles';
import ArticleList from './components/ArticleList';

import './App.css';

const sortArticles = (articles) => {
  return [...articles.sort((a, b) => b.upvotes - a.upvotes)];
};

const App = () => {
  const sortedDummyArticles = sortArticles(dummyArticles);
  const [articles, setArticles] = useState(sortedDummyArticles);

  const handleUpvote = (id) => {
    const updated = articles.map((article) =>
      article.id === id ? { ...article, upvotes: article.upvotes + 1 } : article
    );
    setArticles(sortArticles(updated));
  };

  return (
    <>
      <h2>meowrank 🐱</h2>
      <ArticleList articles={articles} onUpvote={handleUpvote} />
      {console.log(articles)}
    </>
  );
};

export default App;
