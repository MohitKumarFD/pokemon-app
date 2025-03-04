'use client';

import { useState, useRef } from 'react';

export default function SearchForm({ types, onTypeChange, onSearchChange, selectedType }) {
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef('')
  
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    const value = searchRef.current.value;
    setSearchInput(value);
    onSearchChange(value);
  };
  
  const handleTypeSelect = (e) => {
    onTypeChange(e.target.value);
  };
  
  return (
    <div className="max-w-4xl mb-8 md:mb-14">
      <div className="space-y-4">
        <div className="max-w-2xl">
          <select
            id="pokemonType"
            value={selectedType}
            onChange={handleTypeSelect}
            className="w-full p-2 border bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <form onSubmit={handleSearchInputChange} className="flex items-stretch">
          <input
            type="text"
            id="pokemonSearch"
            defaultValue={searchInput}
            ref={searchRef}
            placeholder="Search..."
            className="w-full p-2 border bg-white border-gray-300 rounded-s-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button type="submit" className='bg-[#004368] py-2 px-3 rounded-r-md text-white font-semibold'>Search</button>
        </form>
      </div>
    </div>
  );
}