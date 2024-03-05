import React, { useState } from 'react';

function NewMusic() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    difficulty: '',
    instrument: '',
  });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Assuming single file upload
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      uploadData.append(key, value);
    });
    uploadData.append('file', file);

    fetch('http://localhost:4000/sheet', {
      method: 'POST',
      body: uploadData,
    })
      .then(response => response.json())
      .then(data => {
       ;
        // Handle success response
      })
      .catch(error => {
        console.error('Error uploading music:', error);
        // Handle error response
      });
  };

  return (
    <div>
      <h1>Add New Music</h1>
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
          name="instrument"
          type="text"
          placeholder="Instrument"
          value={formData.instrument}
          onChange={handleInputChange}
        />
        <input
          type="file"
          onChange={handleFileChange}
        />
        <button type="submit">Add Music</button>
      </form>
    </div>
  );
}

export default NewMusic;
