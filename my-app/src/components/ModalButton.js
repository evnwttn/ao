import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "@fontsource/noto-sans";
import "@fontsource/noto-serif";
import Divider from "@mui/material/Divider";
import {
  aoBlack,
  aoWhite,
  aoBlue,
  aoYellow,
  aoRed,
  aoGrey,
  aoDivider,
} from "../assets/theme";

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
  boxShadow: "0px 0px 200px #000000",
  p: 4,
};

export const ModalButton = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button key={text} onClick={handleOpen}>
        {text}
      </button>

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
          <div style={{ fontFamily: "Noto Sans", color: "#F3EFE0" }}>
            This be the {text} modal and it'll show {text} shit.
          </div>
        </Box>
      </Modal>
    </>
  );
};
