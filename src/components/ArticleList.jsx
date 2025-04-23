import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onUpvote, sortKey }) => {
  const getRankLabel = (index) => {
    if (sortKey === 'upvotes') {
      return index === 0
        ? '🥇'
        : index === 1
        ? '🥈'
        : index === 2
        ? '🥉'
        : `⭐️`;
    }
    return `⭐️`;
  };

  return (
    <div className="rounded-xl overflow-hidden border border-yellow-800">
      <table className="table-auto">
        <thead className="bg-yellow-100">
          <tr>
            <th className="w-[40px]"></th>
            <th className="text-left px-4 py-2 text-lg font-medium">Title</th>
            <th className="text-left px-4 py-2 text-lg font-medium">Upvotes</th>
            <th className="px-4 py-2 text-lg font-medium">Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {articles.map((article, index) => (
            <ArticleItem
              key={`article-${article.id}`}
              article={article}
              onUpvote={onUpvote}
              rankLabel={getRankLabel(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
