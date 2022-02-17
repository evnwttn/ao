import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "@fontsource/noto-sans";

const style = {
  fontFamily: "Noto Sans",
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
          This be the {text} modal and it'll show {text} shit.
        </Box>
      </Modal>
    </div>
  );
};
