import React from "react";
import "../../index.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer, // أضفنا هذا لتسهيل التجاوب
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { Box, useTheme } from "@mui/material";
import Header from "../../Component/Header";

// 1. يجب تعريف البيانات هنا أو استلامها عبر الـ Props
const data = [
  { name: "Jan", uv: 400, pv: 2400, mv: 7000, kv: 10000 },
  { name: "Feb", uv: 2500, pv: 1398, mv: 4000, kv: 7000 },
  { name: "Mar", uv: 800, pv: 9800, mv: 6800, kv: 4000 },
  { name: "Apr", uv: 278, pv: 3908, mv: 1908, kv: 9000 },
];

function lineD({ isDashboard = false }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // تحديد ألوان الخطوط بناءً على الوضع
  const line1Color = isDarkMode ? "#90caf9" : "#1976d2"; // أزرق فاتح للـ Dark
  const line2Color = isDarkMode ? "#81c784" : "#388e3c"; // أخضر فاتح للـ Dark
  const line3Color = isDarkMode ? "#ffb74d" : "#f57c00"; // برتقالي فاتح للـ Dark
  const line4Color = isDarkMode ? "#e57373" : "#d32f2f"; // أحمر فاتح للـ Dark
  const draw = isDarkMode ? "#424242" : "#e0e0e0"; // لون الشبكة بناءً على الوضع
  return (
    <div>
      {!isDashboard && (
        <Header
          isDashboard={isDashboard}
          title={"Line Chart"}
          subtitle={"A simple line chart with customized shape"}
        />
      )}
      <Box
        sx={{
          width: "100%",
          height: isDashboard ? "300px" : "400px",
          mt: isDashboard ? 0 : "30px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={draw} />
            <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary} />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary,
              }}
              itemStyle={{ color: theme.palette.text.primary }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke={line1Color} // اللون الشرطي هنا
              dot={{ fill: line1Color }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke={line2Color} // اللون الشرطي هنا
              dot={{ fill: line2Color }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="mv"
              stroke={line3Color} // اللون الشرطي هنا
              dot={{ fill: line3Color }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="kv"
              stroke={line4Color} // اللون الشرطي هنا
              dot={{ fill: line4Color }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
}

export default lineD;
