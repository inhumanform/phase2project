import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import MySheetMusic from './pages/MySheetMusic';
import LearningResources from './pages/LearningResources';
import PracticePage from './pages/PracticePage';
import NewMusic from './pages/NewMusic';
import Home from './pages/Home';

const API_URL = 'http://localhost:4000/sheet'; // Adjust if necessary

function App() {
    const [sheetMusic, setSheetMusic] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setSheetMusic(data));
    }, []);

    const handleSearchChange = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const filteredSheetMusic = sheetMusic.filter(piece =>
        piece.title.toLowerCase().includes(searchQuery) ||
        piece.artist.toLowerCase().includes(searchQuery) ||
        piece.genre.toLowerCase().includes(searchQuery)
    );

    return (
        <Router>
            <NavBar onSearchChange={handleSearchChange} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learningresources" element={<LearningResources />} />
                <Route path="/newmusic" element={<NewMusic />} />
                <Route path="/mysheetmusic" element={<MySheetMusic sheetMusic={filteredSheetMusic} />} />
                <Route path="/practicepage" element={<PracticePage />} />
            </Routes>
        </Router>
    );
}

export default App;
