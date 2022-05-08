import React from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({
  cell,
  open,
  handleClose,
  comment,
  onCommentChange,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal
          onCommentChange={onCommentChange}
          comment={comment}
          cell={cell}
        />
      </>
    </Modal>
  );
};
