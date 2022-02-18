import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "@fontsource/noto-sans";
import Divider from "@mui/material/Divider";

const style = {
  fontFamily: "Noto Sans",
  textTransform: "uppercase",
  fontSize: "0.9rem",
  letterSpacing: "0.2pt",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#2D2D2D",
  color: "#F3EFE0",
  boxShadow: "0px 0px 200px #000000",
  p: 4,
};

export const ModalButton = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
              textTransform: "lowercase",
              color: "#D93D1A",
            }}
          >
            ꜵ
          </div>
          <br />
          <br />
          <Divider variant="middle" />
          <br />
          This be the {text} modal and it'll show {text} shit.
        </Box>
      </Modal>
    </div>
  );
};
