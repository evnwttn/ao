import React from "react";
import { Modal } from "@mui/material";
import { ModalText } from "../components/ModalText";

export const ModalBase = ({ open, handleClose, text }) => {
  return (
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
  );
};
