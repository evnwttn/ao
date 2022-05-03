import React from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <AOCommentModal />
      </>
    </Modal>
  );
};
