import { Stack } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import MiniPieChart from "../pie/MiniPieChart";

const Row1 = () => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"} // تصحيح الخطأ الإملائي هنا لتعمل الاستجابة
      gap={2} // زيادة المسافة قليلاً لمظهر أفضل
      justifyContent={{ xs: "center", sm: "space-between" }}
      mb={3}
    >
      <Card
        icon={<EmailIcon sx={{ fontSize: "23px" }} />}
        title={"12,361"}
        subTitle={"Email Sent"}
        ChartComponent={MiniPieChart}
        chartId="chart1"
        Increase={"+14%"}
      />
      <Card
        icon={<PointOfSaleIcon sx={{ fontSize: "23px" }} />}
        title={"431,255"}
        subTitle={"Sales obtained"}
        ChartComponent={MiniPieChart}
        chartId="chart2" // يجب إعطاء ID فريد لكل كارد
        Increase={"+12%"}
      />
      <Card
        icon={<PersonAddIcon sx={{ fontSize: "23px" }} />}
        title={"32,441"}
        subTitle={"New Customers"}
        ChartComponent={MiniPieChart}
        chartId="chart3"
        Increase={"+8%"}
      />
      <Card
        icon={<TrafficIcon sx={{ fontSize: "23px" }} />}
        title={"1,353,655"}
        subTitle={"Total Traffic"}
        ChartComponent={MiniPieChart}
        chartId="chart4"
        Increase={"+5%"}
      />
    </Stack>
  );
};

export default Row1;
