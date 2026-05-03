import Typography from "@mui/material/Typography";
import React from "react";
import MapCharts from "./MapCharts";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";

const MyMapCharts = () => {
  return (
    <div>
      <MapCharts />
    </div>
  );
};

export default MyMapCharts;
