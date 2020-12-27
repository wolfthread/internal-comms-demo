import React from 'react';
import { PieChart, Legend, Pie, Cell } from 'recharts';

// TODO: bring label function to utils
const MetricsChart = ({ data, COLORS, RADIAN, width, height }) => {
  return (
    <PieChart width={width} height={height}>
      <Legend verticalAlign="top" />
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="white"
              textAnchor={x > cx ? 'start' : 'end'}
              dominantBaseline="central"
            >
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        }}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default MetricsChart;
