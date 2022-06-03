import React from "react";
import { palette, logoSx } from "../assets/theme";
import { Button, Box } from "@mui/material";

export const AONav = () => {
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
      <Button
        disableRipple
        key={`test`}
        onClick={() => console.log("yolo")}
        variant="text"
        color={"inherit"}
      >
        Test
      </Button>

      <Box sx={{ ...logoSx, color: palette.aoBlue, fontSize: "2.5vw" }}>ꜵ</Box>
    </Box>
  );
};
