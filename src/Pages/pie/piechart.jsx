import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "../../Component/Header";

// حذفنا المكون المتداخل وأبقينا المكون الأساسي فقط
const PieChartComponent = ({
  id = "pie-chart",
  height = "100%",
  width = "100%",
  isDashboard = false,
}) => {
  const theme = useTheme();

  const data = [
    { x: "Coal", y: 34.4, text: "Coal: 34.4%" },
    { x: "Natural Gas", y: 22.1, text: "Natural Gas: 22.1%" },
    { x: "Hydro", y: 14.4, text: "Hydro: 14.4%" },
    { x: "Nuclear", y: 9.0, text: "Nuclear: 9.0%" },
    { x: "Wind", y: 8.1, text: "Wind: 8.1%" },
    { x: "Others", y: 12.0, text: "Others: 12.0%" },
  ];

  const isDevice = Browser.isDevice;
  const radiusValue = isDevice ? "40%" : "60%";
  const fontSizeValue = isDevice ? "10px" : "12px";

  return (
    <div>
      <Header
        isDashboard={isDashboard}
        title={"PIE CHART"}
        subtitle={"A simple pie chart with customized shape"}
      />
      <Box
        sx={{ height: isDashboard ? "300px" : "75vh", width: "100%" }}
        className="control-pane"
      >
        <AccumulationChartComponent
          id={id}
          title={isDashboard ? "" : "Global Electricity Generation - 2024"}
          titleStyle={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            fontWeight: "600",
          }}
          enableAnimation={true}
          height={height}
          width={width}
          background="transparent" // لضمان تناسقه مع الثيم
          tooltip={{
            enable: true,
            format: "${point.x} : ${point.y}%",
          }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={data}
              xName="x"
              yName="y"
              radius={radiusValue}
              innerRadius="0%"
              explode={true}
              explodeOffset="10%"
              explodeIndex={0}
              dataLabel={{
                visible: isDashboard ? false : true,
                name: "text",
                position: "Outside",
                font: {
                  fontWeight: "600",
                  size: fontSizeValue,
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </Box>
    </div>
  );
};

export default PieChartComponent;
