import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "../../Component/Header";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#a855f7",
  "#6870fa",
];

const data = [
  { name: "Coal", value: 34.4 },
  { name: "Natural Gas", value: 22.1 },
  { name: "Hydro", value: 14.4 },
  { name: "Nuclear", value: 9.0 },
  { name: "Wind", value: 8.1 },
  { name: "Others", value: 12.0 },
];

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  value,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#888"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${name}: ${value}%`}
    </text>
  );
};

const PieChartComponent = ({ id = "pie-chart", isDashboard = false }) => {
  const theme = useTheme();

  return (
    <div>
      <Header
        isDashboard={isDashboard}
        title={"PIE CHART"}
        subtitle={"Global Electricity Generation - 2024"}
      />
      <Box sx={{ height: isDashboard ? "300px" : "75vh", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={isDashboard ? 100 : 160}
              dataKey="value"
              label={isDashboard ? false : renderCustomLabel}
              labelLine={!isDashboard}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary,
              }}
            />
            {!isDashboard && <Legend />}
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default PieChartComponent;
