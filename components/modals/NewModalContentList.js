"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewModalContentList = void 0;
const material_1 = require("@mui/material");
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
const theme_1 = require("../../assets/theme");
const NewModalContentList = ({ data, onClick }) => {
    return (React.createElement(material_1.Box, { sx: Object.assign(Object.assign({}, theme_1.modalCenteredSx), { my: "1vw" }) },
        React.createElement(material_1.List, { sx: {
                width: "28vw",
                maxHeight: "11vw",
                overflow: "auto",
            } }, data &&
            data.map((title, number) => {
                return (React.createElement(material_1.ListItem, { key: `${title}.${number}`, sx: { bgcolor: theme_1.palette.aoBlack }, secondaryAction: React.createElement(material_1.IconButton, { onClick: () => onClick(title) },
                        React.createElement(Clear_1.default, null)) },
                    React.createElement(material_1.ListItemText, { primary: title })));
            }))));
};
exports.NewModalContentList = NewModalContentList;
