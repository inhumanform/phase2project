// This page is probably redundant, kinda does the same thing as MusicView.js

import React from 'react';
import { Link } from 'react-router-dom';

function Music({ sheetMusic }) {
  return (
    <ul>
      {sheetMusic.map(piece => (
        <li key={piece.id}>
          <h2>{piece.title}</h2>
          <p>Artist: {piece.artist}</p>
          <p>Genre: {piece.genre}</p>
          <p>Player: {piece.player}</p>
          <p>Difficulty: {piece.difficulty}</p>
          <p>Instrument: {piece.instrument}</p>
          <Link to={{ pathname: `/music-view/${piece.id}`, state: { url: piece.url } }}>View Sheet Music</Link>
        </li>
      ))}
    </ul>
  );
}

export default Music;

