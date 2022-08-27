"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutModalContent = void 0;
const material_1 = require("@mui/material");
const theme_1 = require("../../../assets/theme");
const AboutModalContent = () => {
    return (React.createElement(material_1.Box, { sx: theme_1.modalCenteredSx },
        "A VISUAL ALBUM MANAGEMENT TOOLKIT DESIGNED TO TRACK & MONITOR PROGRESS, FOSTER COLLABORATION AND AID IN THE SMASHING OF GOALS.",
        React.createElement(material_1.Box, { sx: { mt: "2vw" } },
            "TO BEGIN START A ",
            React.createElement("b", null, "NEW"),
            " PROJECT.")));
};
exports.AboutModalContent = AboutModalContent;
