import React from "react";
import { Box } from "@mui/material";
import { modalCenteredSx, palette } from "../../assets/theme";

export const NavAboutContent = () => {
  return (
    <Box sx={modalCenteredSx}>
      YOU MAY CLICK ON A CELL TO BEGIN.
      <Box sx={{ my: 2 }}>
        <b>COLOURWHEEL</b>
        <Box
          sx={{
            mt: "0.125vw",
            b: {
              color: palette.aoYellow,
            },
          }}
        >
          <b>The Top Left</b> indicades that a task is in progress.
        </Box>
        <Box
          sx={{
            mt: "0.125vw",

            b: {
              color: palette.aoBlue,
            },
          }}
        >
          <b>The Top Right</b> indicades that a task is completed.
        </Box>
        <Box
          sx={{
            mt: "0.125vw",
            b: {
              textShadow: `0px 0px 10px rgb(243, 239, 224, 0.75)`,
              color: palette.aoBlack,
            },
          }}
        >
          <b>The Bottom Left</b> indicates that a task has been set.
        </Box>
        <Box sx={{ mt: "0.125vw" }}>
          <b>The Bottom Right</b> opens the comment window.
        </Box>
      </Box>
    </Box>
  );
};
