import React, { useState } from 'react';
import Navbar from '../navbar';
import '../styles/usertable.css';  

const UserTable = ({ type }) => {
  
  const initialRoadmapData = [
    { phase: 'HTML', duration: '2 weeks', progress: '' },
    { phase: 'CSS', duration: '2 weeks', progress: '' },
    { phase: 'JavaScript', duration: '3 weeks', progress: '' },
    { phase: 'npm', duration: '1 weeks', progress: '' },
    { phase: 'Git', duration: '1 weeks', progress: '' },
    { phase: 'GitHub', duration: '1 weeks', progress: '' },
    { phase: 'Tailwind CSS', duration: '2 weeks', progress: '' },
    { phase: 'React', duration: '3 weeks', progress: '' },
    { phase: 'Node.js', duration: '2 weeks', progress: '' },
    { phase: 'MYSQL', duration: '2 weeks', progress: '' },
    { phase: 'RESTful APIs', duration: '2 weeks', progress: '' },
    { phase: 'JWT Auth', duration: '2 weeks', progress: '' },
    { phase: 'Basic AWS Services', duration: '2 weeks', progress: '' },
  ];

  const [roadmapData, setRoadmapData] = useState(initialRoadmapData);


  const handleProgressChange = (index, value) => {
    const updatedData = [...roadmapData];
    updatedData[index].progress = value;
    setRoadmapData(updatedData);
  };

  return (
    <>
    <Navbar/>
    <div className="table-page">
      <h2>{type === 'roadmap' ? 'Full Stack Roadmap' : 'Duration'}</h2>


      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Duration</th>
            <th>Progress</th> 
          </tr>
        </thead>
        <tbody>
          {roadmapData.map((item, index) => (
            <tr key={index}>
              <td>{item.phase}</td>
              <td>{item.duration}</td>
    
              <td>
                <input 
                  type="text" 
                  value={item.progress}
                  onChange={(e) => handleProgressChange(index, e.target.value)} 
                  placeholder="Enter progress..." 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UserTable;
