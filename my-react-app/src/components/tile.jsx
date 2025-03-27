import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import './styles/tile.css'; 

const Tile = ({ title, description, route }) => {
  const navigate = useNavigate();  

  const handleClick = () => {
    navigate(route);  
  };

  return (
    <div className="tile" onClick={handleClick}>  
      <h3>{title}</h3>  
      <p>{description}</p> 
    </div>
  );
};

export default Tile;
