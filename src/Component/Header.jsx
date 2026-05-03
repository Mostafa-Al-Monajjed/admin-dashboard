import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = ({ title, subtitle, isDashboard = false }) => {
  const theme = useTheme();
  if (isDashboard) return null;
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold" }}
        color={theme.palette.info.light}
      >
        {title}
      </Typography>
      <Typography variant="body1" color={theme.palette.text.secondary}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
