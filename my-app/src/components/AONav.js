import React from "react";
import { palette, logoSx } from "../assets/theme";
import { Box } from "@mui/system";

export const AONav = () => {
  console.log("yolo");
  return (
    <Box
      sx={{
        marginTop: "1.5vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box sx={{ ...logoSx, color: palette.aoBlue, fontSize: "2.5vw" }}>ꜵ</Box>
    </Box>
  );
};
