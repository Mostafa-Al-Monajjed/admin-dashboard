// @ts-nocheck
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./Component/TopBar";
import SideBar from "./Component/SideBar";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer({ children }) {
  // @ts-ignore
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    console.log("closed");
    setOpen(false);
  };

  const [mode, setMode] = React.useState("light");
  React.useEffect(() => {
    setMode(window.localStorage.getItem("mode") || "light");
  }, []);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // @ts-ignore
          mode: mode, // هنا نربط الثيم بالحالة
        },
      }),
    [mode],
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  // @ts-ignore
  const openMenu = Boolean(anchorEl);
  // @ts-ignore
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          // @ts-ignore
          setMode={setMode}
          anchorEl={anchorEl}
          handleClick={handleClick}
          handleClose={handleClose}
          openMenu={openMenu}
        />

        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        <Box sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
