import React, { useState } from "react";
import { Button, Box, Divider } from "@mui/material";
import { logoSx, navSx, palette } from "../assets/theme";
import { ModalBase } from "./index";

export const AONav = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalText] = useState("Nav");

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={navSx.container}>
      <ModalBase
        open={openModal}
        handleClose={handleClose}
        text={`${modalText}`}
      />
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
        onClick={() => setOpenModal(true)}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box>
        <Button
          disableRipple
          sx={logoSx.nav}
          onClick={() => setOpenModal(true)}
          variant="text"
          color={"inherit"}
        >
          ꜵ
        </Button>
      </Box>
    </Box>
  );
};
