// This route is where you are taken when you select a piece from the Sheet Music Library. It displays the PDF on the page with space around it, with an option to go fullscreen.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MusicView from '../component/MusicView';

function PracticePage() {
  const { id } = useParams();
  const [sheetMusic, setSheetMusic] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:4000/sheet/${id}`)
    
      .then(response => response.json())
      .then(data => setSheetMusic(data))
      
      ;
  }, [id]);

  return (
    <div>
      <h1>Practice Page</h1>
      {sheetMusic ? <MusicView url={sheetMusic.url} /> : <p>Loading...</p>}
    </div>
  );
}

export default PracticePage;


