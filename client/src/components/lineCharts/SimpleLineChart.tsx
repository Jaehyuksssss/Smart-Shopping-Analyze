import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Ages, Metric } from '../../utils/@types';

interface SimpleLineChartProps {
  metrics: Metric[];
  groups: Ages[];
  groupName: string;
  xAxisDataKey: string;
}

const ColorParmas = {
  '10': 'blue',
  '20': 'red',
  '30': 'black',
  '40': 'gray',
  '50': 'green',
  '60': '#2C3E50 ',
};
const SimpleLineChart: React.FC<SimpleLineChartProps> = ({
  metrics,
  groups,
  groupName,
  xAxisDataKey,
}: SimpleLineChartProps) => {
  return (
    <LineChart
      width={1000}
      height={800}
      data={metrics}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisDataKey} />
      <YAxis />
      <Tooltip />
      <Legend
        layout="horizontal"
        verticalAlign="top"
        align="center"
        height={40}
        iconType="rect"
        iconSize={20}
      />
      {groups.map(group => (
        <Line
          name={`${group}${groupName}`} // legend 에 표시될 이름
          key={group}
          type="monotone" // 선 보간 유형
          dataKey={group}
          stroke={ColorParmas[group]}
        />
      ))}
    </LineChart>
  );
};

export default SimpleLineChart;
