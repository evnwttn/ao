import React from "react";
import { Modal } from "@mui/material";

export const AONavAboutModal = ({ open, handleClose }) => {
  return (
    // FRAGMENT PREVENTS A MUI RELATED BUG
    <Modal open={open} onClose={handleClose}>
      <></>
    </Modal>
  );
};
