// @ts-check
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { rows } from "../team/data";
import { columns } from "./data";
import Header from "../../Component/Header";

const Invoices = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <Box>
      <Header
        isDashboard={false}
        title={"INVOICES"}
        subtitle={"Manage your invoices information here"}
      />
      <DataGrid
        checkboxSelection
        sx={{ width: "99%" }}
        // @ts-ignore
        columns={columns}
        rows={rows}
        loading={loading}
        slots={{ toolbar: GridToolbar }}
        // showToolbar
      />
    </Box>
  );
};

export default Invoices;
