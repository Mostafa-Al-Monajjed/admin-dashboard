import React from "react";
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
import LineD from "./lineD";

const MyLineChart = () => {
  return <LineD />;
};

export default MyLineChart;
