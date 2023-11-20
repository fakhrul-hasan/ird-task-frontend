'use client';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="relative">
          <input
            type="text"
            placeholder="Search by Categories"
            className="py-1 pl-8 placeholder:text-xs placeholder:text-gray-600 rounded w-full border border-gray-200"
            value={query}
            onChange={handleSearch}
          />
          <BsSearch className="absolute left-2 top-2 rounded" />
        </div>
  );
};

export default Search;