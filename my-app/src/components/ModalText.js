import React from "react";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import { Divider, Button, Box, Modal } from "@mui/material";
import { aoWhite, aoRed, aoDivider } from "../assets/theme";

const ModalText = ({ text }) => {
  return (
    <>
      <Button key={text} onClick={handleOpen} variant="text" color="secondary">
        {text}
      </Button>

      {/*  */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
            This be the {text} modal and it'll show {text} shit.
          </div>
        </Box>
      </Modal>
    </>
  );
};
