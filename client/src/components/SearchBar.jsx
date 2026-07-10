import "../styles/search.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search by item name or location..."
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;