"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBase = void 0;
const material_1 = require("@mui/material");
const ModalText_1 = require("../components/ModalText");
const ModalBase = ({ open, handleClose, text }) => {
    return (<material_1.Modal open={open} onClose={handleClose} sx={{ backdropFilter: "blur(1.5px)" }}>
      <>
        <ModalText_1.ModalText prompt={text}/>
      </>
    </material_1.Modal>);
};
exports.ModalBase = ModalBase;
