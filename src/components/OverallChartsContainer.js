import React from 'react';

const OverallChartsContainer = ({ charts }) => {
  return (
    <div className="ui container">
      <div className="ui four column centered doubling grid">
        {charts.map((chartObj) => (
          <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <h3>{chartObj.title}</h3>
            {chartObj.chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallChartsContainer;
