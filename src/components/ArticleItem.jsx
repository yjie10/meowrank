const ArticleItem = ({ article, onUpvote, rankLabel }) => (
  <tr className="hover:bg-yellow-50">
    <td className="w-[40px] text-center px-4 py-2 font-bold text-yellow-700 leading-none align-middle">
      <span className="inline-block w-full text-base">{rankLabel}</span>
    </td>
    <td className="text-left px-4 py-2">{article.title}</td>
    <td className="text-left px-4 py-2">📈 {article.upvotes}</td>
    <td className="text-left px-4 py-2">{article.date}</td>
    <td className="text-center px-4 py-2">
      <button className="cursor-pointer" onClick={() => onUpvote(article.id)}>
        💛
      </button>
    </td>
  </tr>
);

export default ArticleItem;
