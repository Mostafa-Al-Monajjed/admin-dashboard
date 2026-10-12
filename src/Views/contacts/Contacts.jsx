// @ts-nocheck
// @ts-check
import Typography from "@mui/material/Typography";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows } from "../team/data";
import { columns } from "./data";
import { GridToolbar } from "@mui/x-data-grid/internals";
import Header from "../../Component/Header";

const Contacts = () => {
  const [loading, setLoading] = React.useState(false);
  // const isLoading = false;
  return (
    <Box>
      <Header
        isDashboard={false}
        title={"Contacts Information"}
        subtitle={"Manage your contacts information"}
      />
      <DataGrid
        sx={{ width: "99%" }}
        // @ts-ignore
        columns={columns}
        rows={rows}
        loading={loading}
        slots={{ toolbar: GridToolbar }}
        showToolbar
      />
    </Box>
  );
};

export default Contacts;
