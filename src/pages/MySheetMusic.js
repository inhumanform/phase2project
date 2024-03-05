import React from 'react';
import { useNavigate } from 'react-router-dom';

function MySheetMusic({ sheetMusic }) {
    const navigate = useNavigate();

    
const handleMusicSelect = (music) => {
    navigate(`/practicepage`, { state: { url: music.url } });
  };
  
      

    return (
        <ul>
            {sheetMusic.map((music) => (
                <div key={music.id} onClick={() => handleMusicSelect(music)}
                    style={{ cursor: "pointer" }}>
                    <h2>{music.title}</h2>
                    <p>Artist: {music.artist}</p>
                    <p>Genre: {music.genre}</p>
                    <p>Player: {music.player}</p>
                    <p>Difficulty: {music.difficulty}</p>
                    <p>Instrument: {music.instrument}</p>
                </div>
            ))}
        </ul>
    );
}

export default MySheetMusic;
