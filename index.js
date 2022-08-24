"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
require("@fontsource/noto-sans");
require("@fontsource/noto-serif");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const ModalButton_1 = require("./components/ModalButton");
const MainLogo_1 = require("./components/MainLogo");
const ModalBase_1 = require("./components/ModalBase");
const AOGrid_1 = require("./components/AOGrid");
const theme_1 = __importStar(require("./assets/theme"));
const Home = () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [modalType, setModalType] = (0, react_1.useState)("");
    const handleOpen = (text) => {
        setModalType(text);
    };
    (0, react_1.useEffect)(() => {
        modalType !== "" ? setOpen(true) : setOpen(false);
    }, [modalType]);
    const handleClose = () => {
        setOpen(false);
        setModalType("");
    };
    return (React.createElement(material_1.Box, { sx: theme_1.homeSx.mainDiv },
        React.createElement(material_1.ThemeProvider, { theme: theme_1.default },
            React.createElement(ModalBase_1.ModalBase, { open: open, handleClose: handleClose, text: modalType }),
            React.createElement(material_1.Box, { sx: theme_1.homeSx.cornerDiv },
                React.createElement(ModalButton_1.ModalButton, { text: "About", handleOpen: (text) => handleOpen(text) }),
                React.createElement(ModalButton_1.ModalButton, { text: "Contact", handleOpen: (text) => handleOpen(text) })),
            React.createElement(material_1.Box, { sx: theme_1.homeSx.centerDiv },
                React.createElement(MainLogo_1.MainLogo, null),
                React.createElement(ModalButton_1.ModalButton, { text: "New", handleOpen: (text) => handleOpen(text) }),
                React.createElement(ModalButton_1.ModalButton, { text: "Load", handleOpen: (text) => handleOpen(text) })))));
};
const rootElement = document.getElementById("root");
(0, react_dom_1.render)(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/ao", element: React.createElement(Home, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/aogrid", element: React.createElement(AOGrid_1.AOGrid, null) }))), rootElement);
