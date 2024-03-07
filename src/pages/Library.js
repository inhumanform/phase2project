import React, { useState } from 'react';

function SheetMusicLibrary({ sheetMusicList }) {
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  return (
    <div className="">
      {selectedImageUrl ? (
        <div className="musicImage ">
          <button
            onClick={() => setSelectedImageUrl('')}            
          >Return to Library 
          </button><br></br>
          <iframe className="musicImage" src={selectedImageUrl} />
        </div>

      ) : (

        <div className="musicList">
          {sheetMusicList && sheetMusicList.length > 0 ? (
            <div>
              {sheetMusicList.map((music) => (
                <div className = 'musicDisplay' key={music.id} onClick={() => setSelectedImageUrl(music.url)} style={{ cursor: "pointer", marginBottom: "10px" }}>
                  <h3>{music.title}</h3>
                  <p>Artist: {music.artist}</p>
                  <p>Instrument: {music.instrument}</p>
                </div>
              ))}
            </div>

          ) : (

            <p>No sheet music found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SheetMusicLibrary;
