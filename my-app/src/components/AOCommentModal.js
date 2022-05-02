import React from "react";
import { Modal } from "@mui/material";

export const AOCommentModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>Hello.</>
    </Modal>
  );
};
