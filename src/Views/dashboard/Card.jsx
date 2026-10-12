import React from "react";
import { Paper, Stack, Typography, Box } from "@mui/material";

const Card = ({ icon, title, subTitle, ChartComponent, Increase, chartId }) => {
  return (
    <Paper
      sx={{
        // xs: "100%" تجعل الكارد يأخذ السطر كاملاً في الموبايل
        // sm: "calc(50% - 16px)" تجعل كل كاردين في سطر واحد في الشاشات المتوسطة
        // md: "250px" العرض المثالي للشاشات الكبيرة
        minWidth: { xs: "100%", sm: "calc(50% - 16px)", md: "250px" },
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1, // هذا يسمح للكارد بالتمدد لملء الفراغات
      }}
    >
      <Stack spacing={1}>
        <Box sx={{ color: "secondary.main", display: "flex" }}>{icon}</Box>
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {subTitle}
        </Typography>
      </Stack>

      <Stack direction="column" alignItems="center" sx={{ width: "100px" }}>
        <Box
          sx={{
            height: "50px",
            width: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            "& > div": {
              transform: "scale(0.8)", // رفع القيمة قليلاً ليكون المخطط أوضح
              transformOrigin: "center center",
            },
          }}
        >
          <ChartComponent id={chartId} />
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: "success.main",
            fontWeight: "bold",
            mt: 0.5,
          }}
        >
          {Increase}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
