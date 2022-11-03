import React, { useState } from "react";
import { Button, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { logoSx, navSx, palette } from "../assets/theme";
import { ModalBase } from "./index";

export const AONav = ({ data }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleClose = () => {
    setIsAboutOpen(false);
  };

  return (
    <Box sx={navSx.container}>
      <ModalBase open={isAboutOpen} handleClose={handleClose} text={"Nav"} />
      <Box sx={navSx.text}>
        <Box sx={navSx.text.author}>{data.author}</Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette.aoDivider, mx: "1vw" }}
        />
        <Box sx={navSx.text.sessionTitle}>{data.sessionTitle}</Box>
      </Box>
      <Button
        disableRipple
        sx={{ mt: "0.5vw" }}
        onClick={() => setIsAboutOpen(true)}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box>
        <Button
          disableRipple
          sx={logoSx.nav}
          onClick={() => setIsAboutOpen(true)}
          variant="text"
          color={"inherit"}
        >
          ꜵ
        </Button>
      </Box>
    </Box>
  );
};
