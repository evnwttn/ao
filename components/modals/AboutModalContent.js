"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutModalContent = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const theme_1 = require("../../assets/theme");
const AboutModalContent = () => {
    return (react_1.default.createElement(material_1.Box, { sx: theme_1.modalCenteredSx },
        "A VISUAL ALBUM MANAGEMENT TOOLKIT DESIGNED TO TRACK & MONITOR PROGRESS, FOSTER COLLABORATION AND AID IN THE SMASHING OF GOALS.",
        react_1.default.createElement(material_1.Box, { sx: { mt: "2vw" } },
            "TO BEGIN START A ",
            react_1.default.createElement("b", null, "NEW"),
            " PROJECT.")));
};
exports.AboutModalContent = AboutModalContent;
