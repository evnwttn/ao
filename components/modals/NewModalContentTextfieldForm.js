"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewModalContentTextfieldForm = void 0;
const material_1 = require("@mui/material");
const CheckCircle_1 = __importDefault(require("@mui/icons-material/CheckCircle"));
const theme_1 = require("../../assets/theme");
const NewModalContentTextfieldForm = ({ handleSubmit, onSubmitForm, textInput, register, formPrompt, }) => {
    return (React.createElement(material_1.Box, { sx: theme_1.modalCenteredSx, component: "form", onSubmit: handleSubmit(onSubmitForm) },
        React.createElement(material_1.TextField, Object.assign({ variant: "standard", inputRef: textInput, helperText: formPrompt === 0
                ? "enter artist name to continue"
                : "enter a session title to continue", margin: "normal", autoComplete: "off" }, (formPrompt === 0 ? register("author") : register("id")))),
        React.createElement(material_1.Box, null,
            React.createElement(material_1.IconButton, { disableRipple: true, type: "submit" },
                React.createElement(CheckCircle_1.default, { sx: {
                        my: "0.25vw",
                    } })))));
};
exports.NewModalContentTextfieldForm = NewModalContentTextfieldForm;
