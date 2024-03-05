import React, { useState, useEffect } from 'react';

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Your Music</label>
      <input
        type="text"
        id="search"
        placeholder="search sheet music..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;