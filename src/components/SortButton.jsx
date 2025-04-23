const SortButton = ({ label, onClick, active }) => (
  <button
    className={`px-3 py-1 rounded-md border font-medium transition ${
      active
        ? 'bg-yellow-200 text-yellow-900 border-yellow-400'
        : 'bg-white text-yellow-800 border-yellow-800'
    } hover:bg-yellow-100`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default SortButton;
