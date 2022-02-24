import React from "react";
import { Button, Modal } from "@mui/material";
import { ModalText } from "./ModalText";

export const ModalButton = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {text === "New" ? (
        <Button key={text} onClick={handleOpen} variant="text" color="primary">
          {text}
        </Button>
      ) : text === "Load" ? (
        <Button
          key={text}
          onClick={handleOpen}
          variant="text"
          color="secondary"
        >
          {text}
        </Button>
      ) : text === "Contact" || "About" ? (
        <Button key={text} onClick={handleOpen} variant="text" color="inherit">
          {text}
        </Button>
      ) : null}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <ModalText prompt={text} />
        </>
      </Modal>
    </>
  );
};
