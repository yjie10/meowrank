import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onUpvote }) => (
  <table className="table-auto border border-gray">
    <thead className="bg-yellow-100">
      <tr>
        <th className="font-medium">#</th>
        <th className="text-left px-4 py-2 font-medium">Title</th>
        <th className="text-left px-4 py-2 font-medium">Upvotes</th>
        <th className="px-4 py-2 font-medium">Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-100">
      {articles.map((article, index) => (
        <ArticleItem
          key={`article-${article.id}`}
          article={article}
          onUpvote={onUpvote}
          rank={index + 1}
        />
      ))}
    </tbody>
  </table>
);

export default ArticleList;
