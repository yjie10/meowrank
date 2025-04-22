const ArticleItem = ({ article, onUpvote, rank }) => (
  <tr className="hover:bg-yellow-50">
    <td className="text-center px-4 py-2 font-bold text-yellow-700">
      {rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`}
    </td>
    <td className="text-left px-4 py-2">{article.title}</td>
    <td className="text-left px-4 py-2">🐾 {article.upvotes}</td>
    <td className="text-left px-4 py-2">{article.date}</td>
    <td className="text-center px-4 py-2">
      <button className="cursor-pointer" onClick={() => onUpvote(article.id)}>
        💛
      </button>
    </td>
  </tr>
);

export default ArticleItem;
