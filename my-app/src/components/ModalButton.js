import React from "react";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import { Divider, Button, Box, Modal } from "@mui/material";
import { aoWhite, aoRed, aoGrey, aoDivider } from "../assets/theme";

const style = {
  textTransform: "uppercase",
  fontSize: "0.8rem",
  letterSpacing: "0.2pt",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "33%",
  bgcolor: aoGrey,
  boxShadow: "0px 0px 200px",
  p: 4,
};

export const ModalButton = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <></>;
};
