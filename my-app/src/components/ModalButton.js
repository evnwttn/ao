import React from "react";
import { Button, Modal } from "@mui/material";
import { ModalText } from "./ModalText";

const ModalFunction = () => {};

export const ModalButton = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        disableRipple
        key={text}
        onClick={handleOpen}
        variant="text"
        color={
          text === "New" ? "primary" : text === "Load" ? "secondary" : "inherit"
        }
      >
        {text}
      </Button>

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
