import React from "react";
import { Button, Box, Divider } from "@mui/material";
import { logoSx, navSx, palette } from "../assets/theme";

export const AONav = ({ gridData, setModalType }: any) => {
  return (
    <Box sx={navSx.container}>
      <Box sx={{ ...navSx.text, textTransform: "uppercase" }}>
        <Box sx={navSx.text.author}>{gridData.author}</Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette.aoDivider, mx: "1vw" }}
        />
        <Box sx={navSx.text.sessionTitle}>{gridData.sessionTitle}</Box>
      </Box>
      <Button
        disableRipple
        sx={{ mt: "0.5vw" }}
        onClick={() => setModalType("Nav")}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box>
        <Button
          disableRipple
          sx={{ ...logoSx.nav, textTransform: "lowercase" }}
          onClick={() => setModalType("Menu")}
          variant="text"
          color={"inherit"}
        >
          ꜵ
        </Button>
      </Box>
    </Box>
  );
};
