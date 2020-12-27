import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderAreaDataKeys = () => {
  for (let key in this.props.data) {
    if (key !== 'department') {
      return (
        <Area
          type="monotone"
          dataKey={key}
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
      );
    }
  }
};

class StatisticsPercentAreaChart extends PureComponent {
  render() {
    return (
      <AreaChart
        width={this.props.width}
        height={this.props.height}
        data={this.props.data}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x-axis" />
        <YAxis tickFormatter={toPercent} />
        <Tooltip content={renderTooltipContent} />
        <Area
          type="monotone"
          dataKey="open"
          stackId="1"
          stroke="#FF0000"
          fill="#FDAAAA"
        />
        <Area
          type="monotone"
          dataKey="on hold"
          stackId="1"
          stroke="#FFFF00"
          fill="#FFFFA1"
        />
        <Area
          type="monotone"
          dataKey="closed"
          stackId="1"
          stroke="#00FF00"
          fill="#AEFFAE"
        />
      </AreaChart>
    );
  }
}

export default StatisticsPercentAreaChart;
