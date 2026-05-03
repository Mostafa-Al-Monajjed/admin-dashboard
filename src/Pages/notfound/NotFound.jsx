import { Theme } from "@fullcalendar/core/internal";
import { Typography } from "@mui/material";
import React from "react";
import { Box, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "83vh",
        overflow: "hidden",
      }}
    >
      <Typography color={theme.palette.error.main} variant="h5" align="center">
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  );
};

export default NotFound;
