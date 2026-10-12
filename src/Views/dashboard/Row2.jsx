// @ts-check
import React from "react";
import { Paper, Stack, Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LineD from "../line/lineD";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import { TransactionsData } from "../../Views/dashboard/data";

const Row2 = () => {
  // نستخدم الثيم الجاهز من التطبيق ولا نعيد تعريفه هنا
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2} alignItems="stretch">
      {/* القسم الأيسر: المخطط */}
      <Paper
        sx={{
          maxWidth: "900px",
          minWidth: "400px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 3,
          flexBasis: { xs: "100%", md: "60%" },
          minHeight: "450px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box mb={2}>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4} sx={{ fontSize: "20px" }}>
              $56,554.54
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <LineD isDashboard={true} />
      </Paper>

      {/* القسم الأيمن: العمليات الأخيرة */}
      <Box
        sx={{
          maxHeight: "450px",
          flexGrow: 1,
          flexBasis: { xs: "100%", md: "300px" },
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minWidth: "350px",
          overflow: "auto",
        }}
      >
        <Paper sx={{ p: 1.2 }}>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {TransactionsData.map((item) => {
          return (
            <Paper
              key={item.txId}
              sx={{
                p: 1.2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="body1" fontWeight="600">
                  {item.txId}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {item.user}
                </Typography>
              </Box>
              <Typography variant="body2">{item.date} </Typography>
              <Typography
                sx={{
                  borderRadius: 1,
                  p: 1,
                  bgcolor: theme.palette.error.main,
                  // الطريقة الصحيحة لاستخدام contrastText
                  color: theme.palette.error.contrastText,
                  variant: "body2",
                  fontWeight: "bold",
                }}
              >
                {item.cost}
              </Typography>
            </Paper>
          );
        })}

        {/* نموذج لعملية واحدة */}
      </Box>
    </Stack>
  );
};

export default Row2;
