import React from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({
  cell,
  open,
  handleClose,
  comment,
  onChange,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal onChange={onChange} comment={comment} cell={cell} />
      </>
    </Modal>
  );
};
