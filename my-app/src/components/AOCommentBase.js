import React from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({
  cell,
  open,
  handleClose,
  comment,
  onCommentChange,
  register,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal
          onCommentChange={onCommentChange}
          cell={cell}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </>
    </Modal>
  );
};
