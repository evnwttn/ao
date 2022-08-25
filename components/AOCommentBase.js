"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOCommentBase = void 0;
const material_1 = require("@mui/material");
const AOCommentModal_1 = require("./AOCommentModal");
const AOCommentBase = ({ cell, cellComment, open, handleClose, register, handleSubmit, onSubmit, }) => {
    return (React.createElement(material_1.Modal, { open: open, onClose: handleClose },
        React.createElement(React.Fragment, null,
            React.createElement(AOCommentModal_1.AOCommentModal, { cell: cell, cellComment: cellComment, register: register, handleSubmit: handleSubmit, onSubmit: onSubmit }))));
};
exports.AOCommentBase = AOCommentBase;