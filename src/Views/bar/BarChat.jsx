import React from "react";
// 1. تصحيح الاستيراد ليكون من MUI
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import {
  BarChart,
  Bar as RechartsBar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../../Component/Header";

const data = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  // استلام المصفوفة من الـ props
  const { x, y, width, height, index, customColors } = props;
  const color = customColors
    ? customColors[index % customColors.length]
    : "#8884d8";

  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={color}
      style={{ transition: "all 0.3s ease" }}
    />
  );
};

function BarChat({ isDashboard = false }) {
  const theme = useTheme();

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    theme.palette.text.primary, // 2. تصحيح الكلمة من premary إلى primary
  ];
  return (
    <div>
      <Header
        isDashboard={isDashboard}
        title={"BAR CHART"}
        subtitle={"A simple bar chart with customized shape"}
      />
      <Box
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: isDashboard ? "400px" : "75vh",
          margin: "0 auto",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          >
            {/* تم حذف shape من هنا لأنها لا تنتمي لـ CartesianGrid */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ fill: "transparent" }} />

            {/* 3. تمرير المصفوفة هنا داخل الـ shape */}
            <RechartsBar
              dataKey="uv"
              shape={<TriangleBar customColors={colors} />}
            >
              <LabelList
                dataKey="uv"
                position="top"
                style={{ fill: theme.palette.text.secondary, fontSize: "12px" }}
              />
            </RechartsBar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
}

export default BarChat;
