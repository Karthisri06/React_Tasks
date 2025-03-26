import React from 'react';
import Tile from './tile';  
import './dashboard.css';  

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>
      <div className="tiles-container">
        {/* Full Stack Roadmap Tile */}
        <Tile 
          title="Full Stack Roadmap" 
          description="Explore the roadmap for full stack development." 
          route="/table/roadmap"
        />

        {/* Duration Tile */}
        <Tile 
          title="Duration" 
          description="See the estimated duration for each phase." 
          route="/table/duration"  
        />
      </div>
    </div>
  );
};

export default Dashboard;

