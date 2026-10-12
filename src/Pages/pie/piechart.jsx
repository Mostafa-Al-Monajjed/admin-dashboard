import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import Header from "../../Component/Header";

// حذفنا المكون المتداخل وأبقينا المكون الأساسي فقط
const PieChartComponent = ({
  id = "pie-chart",
  height = "100%",
  width = "100%",
  isDashboard = false,
}) => {
  const theme = useTheme();

  const data = [
    { x: "Coal", y: 34.4, text: "Coal: 34.4%" },
    { x: "Natural Gas", y: 22.1, text: "Natural Gas: 22.1%" },
    { x: "Hydro", y: 14.4, text: "Hydro: 14.4%" },
    { x: "Nuclear", y: 9.0, text: "Nuclear: 9.0%" },
    { x: "Wind", y: 8.1, text: "Wind: 8.1%" },
    { x: "Others", y: 12.0, text: "Others: 12.0%" },
  ];

  return (
    <div>
      <Header
        isDashboard={isDashboard}
        title={"PIE CHART"}
        subtitle={"A simple pie chart with customized shape"}
      />
      <Box sx={{ height: isDashboard ? "300px" : "75vh", minHeight: 280, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={260}>
          <PieChart>
            <Pie data={data} dataKey="y" nameKey="x" cx="50%" cy="45%" outerRadius="62%" label={!isDashboard} isAnimationActive>
              {data.map((entry, index) => (
                <Cell key={`${id}-${entry.x}`} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe", "#a4de6c"][index]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend wrapperStyle={{ color: theme.palette.text.primary, fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default PieChartComponent;
