import React from "react";
import { useState } from "react";
import { Modal } from "@mui/material";
import { AOCommentModal } from "./AOCommentModal";

export const AOCommentBase = ({ cell, open, handleClose }) => {
  const [comment, setComment] = useState("");
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AOCommentModal
          onChange={handleCommentChange}
          comment={comment}
          cell={cell}
        />
      </>
    </Modal>
  );
};
