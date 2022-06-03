import React from "react";
import { AONavAboutContent } from "./AONavAboutContent";
import { Modal } from "@mui/material";

export const AONavAboutModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <AONavAboutContent />
      </>
    </Modal>
  );
};
