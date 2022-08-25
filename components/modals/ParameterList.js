"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterList = void 0;
const material_1 = require("@mui/material");
const ParameterList = ({ addParameterList }) => {
    const parameters = [
        "Vocals",
        "Bass",
        "Rhythm Guitar",
        "Lead Guitar",
        "Drums",
        "Percussion",
        "Piano",
        "Synth",
        "Strings",
        "Sax",
        "FX",
        "Mix",
        "Master",
        "Artwork",
    ];
    return (React.createElement(material_1.Box, { sx: { mt: "1vw" } }, parameters.map((parameter) => {
        return (React.createElement(material_1.Button, { key: parameter, variant: "outlined", onClick: () => addParameterList(parameter), disableRipple: true }, parameter));
    })));
};
exports.ParameterList = ParameterList;