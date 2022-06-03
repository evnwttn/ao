import React from "react";
import {
  palette,
  modalFontSx,
  logoSx,
  modalBoxStyling,
} from "../../assets/theme";
import { Box, Divider } from "@mui/material";

export const AONavAboutContent = () => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        ...modalBoxStyling,
      }}
    >
      <Box
        sx={{
          ...logoSx,
          color: palette.aoRed,
          fontSize: "3vw",
          mb: 0.5,
        }}
      >
        ꜵ
      </Box>
      <Divider variant="middle" sx={{ color: palette.aoDivider }} />
      <Box sx={{ mt: "5vh" }}>Sup Bitches</Box>
    </Box>
  );
};
