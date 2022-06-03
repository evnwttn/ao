import React from "react";
import { modalBoxStyling, modalFontSx } from "../../assets/theme";
import { Box, Modal } from "@mui/material";

export const AONavAboutModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...modalFontSx, ...modalBoxStyling }}>Ass</Box>
    </Modal>
  );
};
