import React, { useState } from 'react';
import './usertable.css';  // Import CSS for table styling

const UserTable = ({ type }) => {
  
  const initialRoadmapData = [
    { phase: 'HTML', duration: '2 weeks', progress: '' },
    { phase: 'CSS', duration: '2 weeks', progress: '' },
    { phase: 'JavaScript', duration: '3 weeks', progress: '' },
    { phase: 'React', duration: '4 weeks', progress: '' },
    { phase: 'Node.js', duration: '5 weeks', progress: '' }
  ];

  const [roadmapData, setRoadmapData] = useState(initialRoadmapData);


  const handleProgressChange = (index, value) => {
    const updatedData = [...roadmapData];
    updatedData[index].progress = value;
    setRoadmapData(updatedData);
  };

  return (
    <div className="table-page">
      <h2>{type === 'roadmap' ? 'Full Stack Roadmap' : 'Duration'}</h2>

      {/* Table displaying the data */}
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Duration</th>
            <th>Progress</th> {/* New column for progress */}
          </tr>
        </thead>
        <tbody>
          {roadmapData.map((item, index) => (
            <tr key={index}>
              <td>{item.phase}</td>
              <td>{item.duration}</td>
              {/* New Progress Column with Input */}
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
  );
};

export default UserTable;
