import { useState } from 'react';
import { dummyArticles } from './data/dummyArticles';
import ArticleList from './components/ArticleList';

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
    <div className="min-h-screen bg-yellow-50 text-yellow-900 flex flex-col items-center px-4 py-8">
      <h2 className="text-4xl font-semibold text-yellow-800 py-4">
        meowrank 🐱
      </h2>
      <ArticleList articles={articles} onUpvote={handleUpvote} />
      {console.log(articles)}
    </div>
  );
};

export default App;
