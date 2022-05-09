import React from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({
  cell,
  open,
  handleClose,
  register,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal
          cell={cell}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </>
    </Modal>
  );
};
