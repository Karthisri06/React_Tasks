import React from 'react';
import Tile from '../tile';  
import '../styles/dashboard.css';
import Navbar from '../navbar'; 

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="dashboard">
      <h2>Let's dive into the Concepts of Full stack!</h2>
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
    </>
  );
};

export default Dashboard;

