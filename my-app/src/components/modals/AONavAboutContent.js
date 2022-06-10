import React from "react";
import { modalCenteredSx } from "../../assets/theme";
import { Box } from "@mui/material";

export const AONavAboutContent = () => {
  return (
    <Box
      sx={{
        ...modalCenteredSx,
      }}
    >
      A VISUAL ALBUM MANAGEMENT TOOLKIT DESIGNED TO TRACK &amp; MONITOR
      PROGRESS, FOSTER COLLABORATION AND AID IN THE SMASHING OF GOALS.
      <Box sx={{ mt: 2 }}>
        TO BEGIN START A <b>NEW</b> PROJECT.
      </Box>
    </Box>
  );
};
