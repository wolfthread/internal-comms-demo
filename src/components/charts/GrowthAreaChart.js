import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const GrowthAreaChart = ({ data, yAxis, width, height }) => {
  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x-axis" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey={yAxis} stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default GrowthAreaChart;
