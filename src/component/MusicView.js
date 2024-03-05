
import React from 'react';

const MusicView = ({ url }) => {
  // Construct the full path to the image file
  const imagePath = `/sheetMusic/${url}`;

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={imagePath} alt="Sheet Music" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default MusicView;
