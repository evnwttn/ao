"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AONav = void 0;
const react_1 = require("react");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const theme_1 = require("../assets/theme");
const ModalBase_1 = require("../components/ModalBase");
const AONav = ({ data }) => {
    const [isAboutOpen, setIsAboutOpen] = (0, react_1.useState)(false);
    const handleClose = () => {
        setIsAboutOpen(false);
    };
    return (React.createElement(material_1.Box, { sx: theme_1.navSx.container },
        React.createElement(ModalBase_1.ModalBase, { open: isAboutOpen, handleClose: handleClose, text: "Nav" }),
        React.createElement(material_1.Box, { sx: theme_1.navSx.text },
            React.createElement(material_1.Box, { sx: theme_1.navSx.text.author }, data.author),
            React.createElement(material_1.Divider, { orientation: "vertical", flexItem: true, sx: { color: theme_1.palette.aoDivider, mx: "1vw" } }),
            React.createElement(material_1.Box, { sx: theme_1.navSx.text.id }, data.id)),
        React.createElement(material_1.Button, { disableRipple: true, sx: { mt: "0.5vw" }, onClick: () => setIsAboutOpen(true), variant: "text", color: "inherit" }, "?"),
        React.createElement(material_1.Box, null,
            React.createElement(react_router_dom_1.Link, { to: "/ao", style: theme_1.logoSx.nav, state: { from: "home" } }, "\uA735"))));
};
exports.AONav = AONav;
