import React, { useState } from 'react';
import Navbar from './navbar/navbar';
import './dashboard.css';

const Tile = ({ title, description, onClick }) => {
  return (
    <div className="tile" onClick={onClick}>
      <h3 className="tile-title">{title}</h3>
      <p className="tile-description">{description}</p>
    </div>
  );
};

const Dashboard = () => {
  const handleTileClick = (tileName) => {
    console.log(`${tileName} tile clicked`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome to Your Dashboard</h2>
        <p>Manage your data and explore features.</p>
      </div>

      <div className="tiles-container">
        <Tile
          title="User Data"
          description="View and manage your personal details."
          onClick={() => handleTileClick('User Data')}
        />
        <Tile
          title="Watchlist"
          description="View and manage your watchlist items."
          onClick={() => handleTileClick('Watchlist')}
        />
      </div>
    </div>
  );
};

export default Dashboard;

