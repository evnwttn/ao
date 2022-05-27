import React from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({
  cell,
  cellComment,
  open,
  handleClose,
  register,
  handleSubmit,
  onSubmit,
}) => {
  return (
    // FRAGMENT PREVENTS A MUI RELATED BUG
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal
          cell={cell}
          cellComment={cellComment}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </>
    </Modal>
  );
};
