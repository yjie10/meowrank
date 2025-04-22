const ArticleItem = ({ article, onUpvote }) => (
  <li>
    <h2>{article.title}</h2>
    <p>Author: {article.author}</p>
    <p>Upvotes: {article.upvotes}</p>
    <button onClick={() => onUpvote(article.id)}>Meow Upvote 🐾</button>
  </li>
);

export default ArticleItem;
