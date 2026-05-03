import React, { use } from "react";
import { Box, Paper, Typography, Stack } from "@mui/material";
import PieChartComponent from "../pie/piechart";
import { useTheme } from "@mui/material/styles";
import BarChat from "../bar/BarChat";
import MyMapCharts from "../mycharts/MapCharts";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={2} direction={"row"} mt={3} flexWrap={"wrap"}>
      <Paper sx={{ width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", textAlign: "center" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <PieChartComponent
          id="row3-pie-chart"
          key="row3-pie-chart-1"
          isDashboard={true}
          width="100%"
          height="100%"
        />
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", textAlign: "center" }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quantity
        </Typography>
        <BarChat isDashboard={true} />
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", textAlign: "center", mb: 2 }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quantity
        </Typography>
        <MyMapCharts isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
