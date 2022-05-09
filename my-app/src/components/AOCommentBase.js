import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({
  cell,
  open,
  handleClose,
  comment,
  onCommentChange,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
