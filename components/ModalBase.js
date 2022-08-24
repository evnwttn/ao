"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBase = void 0;
const material_1 = require("@mui/material");
const ModalText_1 = require("../components/ModalText");
const ModalBase = ({ open, handleClose, text }) => {
    return (React.createElement(material_1.Modal, { open: open, onClose: handleClose, sx: { backdropFilter: "blur(1.5px)" } },
        React.createElement(React.Fragment, null,
            React.createElement(ModalText_1.ModalText, { prompt: text }))));
};
exports.ModalBase = ModalBase;
