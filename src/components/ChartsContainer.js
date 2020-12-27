import React from 'react';
import { uuid } from 'uuidv4';

const ChartsContainer = ({ charts }) => {
  return (
    <div className="ui container">
      <div className="ui two column centered doubling grid">
        {charts.map((chartObj) => (
          <div style={{ textAlign: 'center', marginTop: '25px' }} key={uuid()}>
            <h3>{chartObj.title}</h3>
            {chartObj.chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartsContainer;
