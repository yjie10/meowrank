import { useState } from 'react';
import { dummyArticles } from './data/dummyArticles';
import ArticleList from './components/ArticleList';
import SortButton from './components/SortButton';

import './App.css';

const sortArticlesByUpvotes = (articles) => {
  return [...articles].sort((a, b) => b.upvotes - a.upvotes);
};

const sortArticlesByDate = (articles) => {
  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
};

const App = () => {
  const [articles, setArticles] = useState(dummyArticles);
  const [sortKey, setSortKey] = useState('');

  const handleUpvote = (id) => {
    const updated = articles.map((article) =>
      article.id === id ? { ...article, upvotes: article.upvotes + 1 } : article
    );
    setArticles(updated);
  };

  const sortOptions = {
    upvotes: sortArticlesByUpvotes,
    date: sortArticlesByDate,
  };

  const handleSortArticles = (key) => {
    const sorter = sortOptions[key];
    if (sorter) {
      const sorted = sorter(articles);
      setSortKey(key);
      setArticles(sorted);
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white min-h-screen text-yellow-900 flex flex-col items-center px-4 py-8">
      <h2 className="text-4xl font-semibold text-yellow-800 py-4">
        🐾 meowrank 🐈‍⬛
      </h2>
      <div className="flex gap-2 mb-4">
        <SortButton
          label="Most Paw-pular 🔥"
          onClick={() => handleSortArticles('upvotes')}
          active={sortKey === 'upvotes'}
        />
        <SortButton
          label="Newest Meow ✨"
          onClick={() => handleSortArticles('date')}
          active={sortKey === 'date'}
        />
      </div>
      <ArticleList
        articles={articles}
        onUpvote={handleUpvote}
        sortKey={sortKey}
      />
    </div>
  );
};

export default App;
