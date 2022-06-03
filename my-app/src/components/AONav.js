import React from "react";
import { palette, logoSx } from "../assets/theme";
import { Button, Box, Modal } from "@mui/material";

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
        onClick={() => console.log("yolo")}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box
        sx={{
          ...logoSx,
          color: palette.aoBlue,
          fontSize: "2.5vw",
          mt: "-0.4vw",
        }}
      >
        ꜵ
      </Box>
    </Box>
  );
};
