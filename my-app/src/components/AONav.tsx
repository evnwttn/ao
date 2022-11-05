import React, { useState } from "react";
import { Button, Box, Divider } from "@mui/material";
import { logoSx, navSx, palette } from "../assets/theme";
import { ModalBase } from "./index";

export const AONav = ({ gridData, userData }: any) => {
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const [modalText, setModalText] = useState<string>("");

  console.log(userData);

  const openNavModal = (text: string) => {
    setModalText(text);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={navSx.container}>
      <ModalBase
        open={openModal}
        handleClose={handleClose}
        text={`${modalText}`}
        userDataVerified={userData}
      />
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
        onClick={() => openNavModal("Nav")}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box>
        <Button
          disableRipple
          sx={{ ...logoSx.nav, textTransform: "lowercase" }}
          onClick={() => openNavModal("Menu")}
          variant="text"
          color={"inherit"}
        >
          ꜵ
        </Button>
      </Box>
    </Box>
  );
};
