// @ts-nocheck
// @ts-check
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { rows } from "./data";
import Header from "../../Component/Header";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      minWidth: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "center",
      align: "center",
      width: 80,
    },
    {
      field: "phone",
      headerName: "Phone",
      headerAlign: "center",
      align: "center",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "access",
      headerAlign: "center",
      headerName: "Access",
      flex: 1,
      minWidth: 120,
      // @ts-ignore
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "100%",
              maxWidth: "120px",
              margin: "0 auto",
              marginTop: "8px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                    ? theme.palette.secondary.dark
                    : theme.palette.success.main,
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon fontSize="small" />
            )}
            {access === "Manager" && <SecurityOutlinedIcon fontSize="small" />}
            {access === "User" && <LockOpenOutlinedIcon fontSize="small" />}

            <Typography variant="body2" sx={{ fontSize: "12px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
      <Header
        isDashboard={false}
        title={"TEAM"}
        subtitle={"Manage your team members"}
      />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        // خاصية تجعل الجدول يتكيف مع الحاوية تلقائياً
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Team;
