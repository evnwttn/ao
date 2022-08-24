"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalButton = void 0;
const material_1 = require("@mui/material");
const ModalButton = ({ text, handleOpen }) => {
    return (React.createElement(material_1.Button, { disableRipple: true, key: text, onClick: () => handleOpen(text), variant: "text", color: text === "New" ? "primary" : text === "Load" ? "secondary" : "inherit" }, text));
};
exports.ModalButton = ModalButton;
