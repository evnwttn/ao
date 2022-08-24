"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalText = void 0;
const material_1 = require("@mui/material");
const NewModalContent_1 = require("./modals/NewModalContent");
const LoadModalContent_1 = require("./modals/LoadModalContent");
const ContactModalContent_1 = require("./modals/ContactModalContent");
const AboutModalContent_1 = require("./modals/AboutModalContent");
const AONavAboutContent_1 = require("./modals/AONavAboutContent");
const theme_1 = require("../assets/theme");
const ModalText = ({ prompt }) => {
    return (React.createElement(material_1.Box, { sx: Object.assign(Object.assign({}, theme_1.modalFontSx), theme_1.modalBoxStyling) },
        React.createElement(material_1.Box, { sx: Object.assign(Object.assign({}, theme_1.logoSx), { color: theme_1.palette.aoBlue, fontSize: "3vw", mb: "0.25vw" }) }, "\uA735"),
        React.createElement(material_1.Divider, { variant: "middle", sx: { color: theme_1.palette.aoDivider } }),
        React.createElement(material_1.Box, { sx: { mt: "5vh" } }, (prompt === "New" && React.createElement(NewModalContent_1.NewModalContent, null)) ||
            (prompt === "Load" && React.createElement(LoadModalContent_1.LoadModalContent, null)) ||
            (prompt === "About" && React.createElement(AboutModalContent_1.AboutModalContent, null)) ||
            (prompt === "Contact" && React.createElement(ContactModalContent_1.ContactModalContent, null)) ||
            (prompt === "Nav" && React.createElement(AONavAboutContent_1.AONavAboutContent, null)))));
};
exports.ModalText = ModalText;
