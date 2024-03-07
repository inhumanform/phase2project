import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import LearningResources from './pages/LearningResources';
import NewMusic from './pages/NewMusic';
import Home from './pages/Home';
import SheetMusicLibrary from './pages/Library'
import './App.css';


const API_URL = 'http://localhost:4000/sheet';

function App() {
  const [sheetMusic, setSheetMusic] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState('title'); // Default search field


  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setSheetMusic(data));
  }, []);

  const filteredSheetMusic = sheetMusic.filter(piece => {
    const pieceField = piece[searchField] ? piece[searchField].toLowerCase() : '';
    return pieceField.includes(searchQuery);
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Router>
      <NavBar onSearchChange={handleSearchChange} onSearchFieldChange={handleSearchFieldChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learningresources" element={<LearningResources />} />
        <Route path="/newmusic" element={<NewMusic />} />
        <Route path="/library" element={<SheetMusicLibrary sheetMusicList={filteredSheetMusic} />} />
      </Routes>
    </Router>
  );
}

export default App;