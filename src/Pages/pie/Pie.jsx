import React from "react";
import { Box } from "@mui/material";
import PieChartComponent from "./piechart"; // تأكد من صحة مسار الملف

const Pie = () => {
  return (
    <Box m="20px" sx={{ height: "75vh" }}>
      {/* تأكد من إعطاء ارتفاع (height) للـ Box ليظهر الرسم بداخله */}
      <PieChartComponent id="row3-pie-chart" />
    </Box>
  );
};

export default Pie;