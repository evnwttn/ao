"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOCommentModal = void 0;
const material_1 = require("@mui/material");
const AOCommentContent_1 = require("./modals/AOCommentContent");
const theme_1 = require("../assets/theme");
const AOCommentModal = ({ cell, cellComment, register, handleSubmit, onSubmit, }) => {
    return (React.createElement(material_1.Box, { sx: Object.assign(Object.assign({}, theme_1.modalFontSx), theme_1.modalBoxStyling) },
        React.createElement(material_1.Box, { sx: {
                display: "inline-flex",
                mb: "1vw",
            } },
            React.createElement(material_1.Box, { sx: {
                    pr: "0.75vw",
                    fontWeight: "800",
                    color: theme_1.palette.aoRed,
                } }, cell.track.title),
            React.createElement(material_1.Divider, { orientation: "vertical", flexItem: true, sx: { color: theme_1.palette.aoDivider } }),
            React.createElement(material_1.Box, { sx: { pl: "0.75vw" } }, cell.parameter)),
        React.createElement(material_1.Divider, { variant: "middle", sx: { color: theme_1.palette.aoDivider } }),
        React.createElement(AOCommentContent_1.AOCommentContent, { cell: cell, cellComment: cellComment, register: register, handleSubmit: handleSubmit, onSubmit: onSubmit })));
};
exports.AOCommentModal = AOCommentModal;
