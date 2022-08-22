"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AONavAboutContent = void 0;
const material_1 = require("@mui/material");
const theme_1 = require("../../assets/theme");
const AONavAboutContent = () => {
    return (<material_1.Box sx={theme_1.modalCenteredSx}>
      YOU MAY CLICK ON A CELL TO BEGIN.
      <material_1.Box sx={{ my: 2 }}>
        <b>COLOURWHEEL</b>
        <material_1.Box sx={{
            mt: "0.125vw",
            b: {
                color: theme_1.palette.aoYellow,
            },
        }}>
          <b>The Top Left</b> indicades that a task is in progress.
        </material_1.Box>
        <material_1.Box sx={{
            mt: "0.125vw",
            b: {
                color: theme_1.palette.aoBlue,
            },
        }}>
          <b>The Top Right</b> indicades that a task is completed.
        </material_1.Box>
        <material_1.Box sx={{
            mt: "0.125vw",
            b: {
                textShadow: `0px 0px 10px rgb(243, 239, 224, 0.75)`,
                color: theme_1.palette.aoBlack,
            },
        }}>
          <b>The Bottom Left</b> indicates that a task has been set.
        </material_1.Box>
        <material_1.Box sx={{ mt: "0.125vw" }}>
          <b>The Bottom Right</b> opens the comment window.
        </material_1.Box>
      </material_1.Box>
    </material_1.Box>);
};
exports.AONavAboutContent = AONavAboutContent;
