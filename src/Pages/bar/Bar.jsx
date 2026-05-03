import React from "react";
import BarChat from "./BarChat";
// 1. تصحيح الاستيراد ليكون من MUI
import { useTheme } from "@mui/material/styles";
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

const CustomBarChart = () => {
  const theme = useTheme();
  return <BarChat />;
};

export default CustomBarChart;
