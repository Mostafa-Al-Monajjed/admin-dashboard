import React, { useMemo } from "react";
import { Box, Typography, Stack, useTheme } from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import Header from "../../Component/Header";
import worldAtlas from "world-atlas/countries-110m.json";


const populationData = [
  { name: "Germany", pop: 83 },
  { name: "France", pop: 67 },
  { name: "Italy", pop: 60 },
  { name: "Spain", pop: 47 },
  { name: "Poland", pop: 38 },
  { name: "Ukraine", pop: 41 },
  { name: "United Kingdom", pop: 67 },
  { name: "Romania", pop: 19 },
  { name: "Netherlands", pop: 17 },
  { name: "Belgium", pop: 11 },
];

const MyMapCharts = ({ isDashboard = false }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // إعداد مقياس الألوان بناءً على الوضع (الداكن/الفاتح)
  const colorScale = useMemo(() => {
    // في الوضع الداكن: من كحلي إلى سماوي
    // في الوضع الفاتح: من أزرق باهت إلى أزرق ملكي داكن
    const range = isDarkMode ? ["#132f4c", "#00e5ff"] : ["#e3f2fd", "#1565c0"];

    return scaleLinear().domain([0, 100]).range(range);
  }, [isDarkMode]);

  // ألوان العناصر المحيطة
  const styles = {
    bg: theme.palette.background.default,
    text: theme.palette.text.primary,
    stroke: isDarkMode ? "#050c14" : "#ffffff",
    graticule: isDarkMode ? "rgba(0, 229, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
    emptyCountry: isDarkMode ? "#1a1a1a" : "#eeeeee",
    legendBg: isDarkMode ? "rgba(19, 47, 76, 0.9)" : "rgba(255, 255, 255, 0.9)",
  };

  return (
    <div>
      <Header
        isDashboard={isDashboard}
        title={"MAP CHARTS"}
        subtitle={"A simple map chart with customized shape"}
      />
      <Box
        sx={{
          height: isDashboard ? "400px" : "calc(100vh - 120px)",
          minHeight: isDashboard ? "400px" : "560px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: styles.bg, // يتغير تلقائياً مع الثيم
          overflow: "hidden",
          p: 2,
          position: "relative",
          transition: "background-color 0.3s ease", // سلاسة عند التحويل
        }}
      >
        {!isDashboard && (
          <Typography
            variant="h5"
            sx={{
              color: isDarkMode ? "#00e5ff" : theme.palette.primary.main,
              mb: 2,
              fontFamily: "Cairo",
              fontWeight: "bold",
            }}
          >
            كثافة التوزع السكاني في أوروبا
          </Typography>
        )}

        {/* مفتاح الخريطة (Legend) */}
        {!isDashboard && (
          <Stack
            direction="column"
            spacing={1}
            sx={{
              position: "absolute",
              bottom: 40,
              right: 40,
              bgcolor: styles.legendBg,
              p: 2,
              borderRadius: 2,
              border: `1px solid ${isDarkMode ? "#00e5ff" : "#ccc"}`,
              boxShadow: theme.shadows[3],
              zIndex: 10,
            }}
          >
            <Typography
              sx={{
                color: styles.text,
                fontSize: "0.8rem",
                mb: 1,
                textAlign: "right",
              }}
            >
              المفتاح (بالمليون)
            </Typography>
            {[0, 25, 50, 75, 100].map((val) => (
              <Stack
                key={val}
                direction="row-reverse"
                alignItems="center"
                spacing={1}
              >
                <Box
                  sx={{
                    width: 15,
                    height: 15,
                    bgcolor: colorScale(val),
                    borderRadius: "2px",
                  }}
                />
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.75rem",
                  }}
                >
                  {val}M
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}

        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            minHeight: isDashboard ? "320px" : "460px",
            height: "100%",
          }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: isDashboard ? 430 : 700, center: [15, 54] }}
            width={900}
            height={500}
            style={{ width: "100%", height: "100%", minHeight: "320px" }}
          >
            <Graticule stroke={styles.graticule} />
            <Geographies geography={worldAtlas}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const country = populationData.find(
                    (d) => d.name === geo.properties.name,
                  );
                  const fillColor = country
                    ? colorScale(country.pop)
                    : styles.emptyCountry;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: fillColor,
                          stroke: styles.stroke,
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: isDarkMode ? "#7209b7" : "#ffb74d",
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          fill: theme.palette.primary.main,
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </Box>
      </Box>
    </div>
  );
};

export default MyMapCharts;
