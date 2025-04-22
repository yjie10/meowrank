import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onUpvote }) => (
  <ul>
    {articles.map((article) => (
      <ArticleItem
        key={`article-${article.id}`}
        article={article}
        onUpvote={onUpvote}
      />
    ))}
  </ul>
);

export default ArticleList;
