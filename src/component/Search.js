
import React from 'react';

function Search({ searchTerm, searchField, onSearchChange, onSearchFieldChange }) {
  return (
    <div className="searchBlock">
      <label htmlFor="search-field">Search By: </label><br></br>
      <select
        id="search-field"
        value={searchField}
        onChange={onSearchFieldChange}
        style={{ marginRight: '10px' }}
      >
        <option value="title">Title</option>
        <option value="instrument">Instrument</option>
        <option value="artist">Artist</option>
        <option value="player">Player</option>
        <option value="genre">Genre</option>
      </select>
      <br></br>
      <input
        type="text"
        id="search"
        placeholder="Search sheet music..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
