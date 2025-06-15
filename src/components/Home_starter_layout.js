// home_starter_layout.js
import React from 'react';
import '../styles/Home_starter_layout.css'; // Import the CSS file

const sectors = [
//   { name: 'Housing & Insurance', icon: '🏠' },
  { name: 'Employee', icon: '🌿', active: true , number: '500+'},
//   { name: 'Digital Support', icon: '💻' },
//   { name: 'Healthcare', icon: '🩺' },
//   { name: 'Construction', icon: '🏗️' },
  { name: 'Factories', icon: '🛍️',number:'2' },
  { name: 'Showroom', icon: '⚡',number:'7' },
  { name: 'Since', icon: '🚚' ,number:'2024' }
];

const HomeStarterLayout = () => {
  return (
    <div className="starter-container">
      <p className="starter-subtitle">Company's Operation Information</p>
      {/* <h2 className="starter-title">
        Inflation in locations without <span className="highlight">legislation</span>
      </h2> */}
      <div className="starter-grid">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className={`starter-card ${sector.active ? 'active' : ''}`}
          >
                        <p>{sector.name}</p>
            <div className="icon">{sector.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStarterLayout;
