import React from "react";
import { Divider, Box } from "@mui/material";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
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

export const ModalText = ({ prompt }) => {
  return (
    <Box sx={style}>
      <div
        style={{
          fontSize: "2.5rem",
          fontFamily: "Noto Serif",
          textTransform: "lowercase",
          color: aoRed,
        }}
      >
        ꜵ
      </div>

      <Divider variant="middle" style={{ color: aoDivider }} />

      <br />
      <div style={{ fontFamily: "Noto Sans", color: aoWhite }}>
        This be the {prompt} modal and it'll show {prompt} shit.
      </div>
    </Box>
  );
};
