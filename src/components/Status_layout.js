import React from 'react';
import '../styles/Status_layout.css';

const StatusLayout = () => {
  return (
    <div>

      <div className="status-container">
              <p className="status-quote">Benefits and common use cases</p>

        <div className="status-grid">
          <div className="status-item">
            {/* { name: 'Energy & Environment', icon: '⚡' },
  { name: 'Transport & Logistics', icon: '🚚' } */}

            <h5>Energy & Environment</h5>
            <div className="circle">⚡</div>
          </div>
          <div className="status-item">
            <h5>Transport & Logistics</h5>
            <div className="circle">🚚</div>
          </div>
          <div className="status-item">
            <h5>Environment</h5>
            <div className="circle">🌿</div>
          </div>
          {/* <div className="status-item">
            <h4>Factories</h4>
            <div className="circle">2</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StatusLayout;
