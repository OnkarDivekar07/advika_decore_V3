// src/components/Navbar/SearchBox.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Implement search logic here
      console.log("Searching:", query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center border rounded-full px-3 py-1">
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-full px-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="text-xl text-gray-600 hover:text-black">
        <FiSearch />
      </button>
    </form>
  );
};

export default React.memo(SearchBox);
