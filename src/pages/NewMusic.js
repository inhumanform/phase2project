

import React, { useState } from 'react';

function NewMusic() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    difficulty: '',
    instrument: '',
    fileUrl: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    fetch('http://localhost:4000/sheet', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        alert('Music added successfully!');
        setFormData({ title: '', artist: '', genre: '', difficulty: '', instrument: '', url: '' });
      })
      .catch(error => {
        console.error('Error uploading music:', error);
        alert('Failed to upload music. Please try again.');
      });
  };

  return (
    <div className='new-music-background'>
      <div className="newMusicForm">
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            name="artist"
            type="text"
            placeholder="Artist"
            value={formData.artist}
            onChange={handleInputChange}
          />
          <input
            name="instrument"
            type="text"
            placeholder="Instrument"
            value={formData.instrument}
            onChange={handleInputChange}
          />
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          >
            <option value="">Select Genre</option>
            <option value="Classical">Classical</option>
            <option value="Jazz">Jazz</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Metal">Metal</option>
            <option value="R&B">R&B</option>
            <option value="Funk">Funk</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="World">World</option>
          </select>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="">Select Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
            <option value="Master">Master</option>
          </select>

          <input
            name="fileUrl"
            type="text"
            placeholder="File URL or Path" 
            value={formData.url}
            onChange={handleInputChange}
          />
          <button type="submit">Add Music</button>
        </form>
      </div>
    </div>
  );
}

export default NewMusic;
