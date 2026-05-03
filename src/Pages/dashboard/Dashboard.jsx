import Typography from "@mui/material/Typography";
import React, { use } from "react";
import { Box, Button, Stack } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { useTheme } from "@mui/material/styles";
import Header from "../../Component/Header";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Header
          isDashboard={false}
          title={"DASHBOARD"}
          subtitle={"Welcome to your dashboard!"}
        />
        <Box textAlign="right">
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: "10px 10px", textTransform: "capitalize" }}
          >
            <DownloadOutlinedIcon />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
