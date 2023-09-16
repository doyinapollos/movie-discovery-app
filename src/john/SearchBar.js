import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div className="searching-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />{" "}
      <button className="search-button" onClick={handleSearch}>
        Search{" "}
      </button>{" "}
    </div>
  );
}
export default SearchBar;
