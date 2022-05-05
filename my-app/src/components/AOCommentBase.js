import React from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({ cell, open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal cell={cell} />
      </>
    </Modal>
  );
};
