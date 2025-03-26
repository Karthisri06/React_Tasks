
import React from 'react';
import './tile.css'; // This file will style our tile

const Tile = ({ title, description, duration }) => {
  return (
    <div className="tile">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Duration:</strong> {duration}</p>
    </div>
  );
};

export default Tile;


onescore 