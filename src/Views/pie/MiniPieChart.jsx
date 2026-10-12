// src/Components/pie/MiniPieChart.jsx
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { value: 34 },
  { value: 22 },
  { value: 14 },
  { value: 9 },
  { value: 8 },
  { value: 12 },
];

const COLORS = ["#6870fa", "#4cceac", "#f0bc5e", "#e2726e", "#a3a3ff", "#70d8bd"];

const MiniPieChart = () => {
  return (
    <PieChart width={60} height={50}>
      <Pie
        data={data}
        cx={28}
        cy={23}
        outerRadius={22}
        dataKey="value"
        strokeWidth={0}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default MiniPieChart;