"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutModalContent = void 0;
const material_1 = require("@mui/material");
const theme_1 = require("../../assets/theme");
const AboutModalContent = () => {
    return (<material_1.Box sx={theme_1.modalCenteredSx}>
      A VISUAL ALBUM MANAGEMENT TOOLKIT DESIGNED TO TRACK &amp; MONITOR
      PROGRESS, FOSTER COLLABORATION AND AID IN THE SMASHING OF GOALS.
      <material_1.Box sx={{ mt: "2vw" }}>
        TO BEGIN START A <b>NEW</b> PROJECT.
      </material_1.Box>
    </material_1.Box>);
};
exports.AboutModalContent = AboutModalContent;
