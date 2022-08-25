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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModalContentTS = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const material_1 = require("@mui/material");
const Send_1 = __importDefault(require("@mui/icons-material/Send"));
const theme_1 = require("../../assets/theme");
const ContactModalContentTS = () => {
    const axios = require("axios").default;
    const [formData, setFormData] = (0, react_1.useState)({
        name: '',
        email: '',
        message: '',
    });
    const [formLoading, setFormLoading] = (0, react_1.useState)(false);
    const nameField = (0, react_1.useRef)(null);
    const emailField = (0, react_1.useRef)(null);
    const messageField = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (formData) {
            setFormLoading(true);
            axios
                .post("http://localhost:5000/contact", Object.assign({}, formData))
                .then((_data) => console.log(JSON.stringify(_data)))
                .catch(function (error) {
                console.log(error);
            });
        }
    }, [formData, axios]);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            if (formLoading) {
                setFormLoading(false);
            }
        }, 2250);
    }, [formLoading]);
    return (React.createElement(material_1.Box, { sx: theme_1.modalCenteredSx },
        React.createElement(material_1.TextField, { placeholder: "Name", inputRef: nameField, variant: "standard", margin: "normal", sx: { width: "28vw" } }),
        React.createElement(material_1.TextField, { placeholder: "Email Address", inputRef: emailField, variant: "standard", margin: "normal", sx: { width: "28vw" } }),
        React.createElement(material_1.TextField, { placeholder: "Message", inputRef: messageField, variant: "standard", margin: "normal", sx: { width: "28vw" } }),
        React.createElement(material_1.IconButton, { disableRipple: true, sx: { cursor: "default" }, onClick: () => {
                var _a, _b, _c;
                return setFormData({
                    name: (_a = nameField === null || nameField === void 0 ? void 0 : nameField.current) === null || _a === void 0 ? void 0 : _a.value,
                    email: (_b = emailField === null || emailField === void 0 ? void 0 : emailField.current) === null || _b === void 0 ? void 0 : _b.value,
                    message: (_c = messageField === null || messageField === void 0 ? void 0 : messageField.current) === null || _c === void 0 ? void 0 : _c.value,
                });
            } },
            React.createElement(material_1.CircularProgress, { size: "2.33vw", sx: Object.assign(Object.assign({}, theme_1.circularProgressSx), { color: formLoading === true ? theme_1.palette.aoBlue : theme_1.palette.aoGrey }) }),
            React.createElement(Send_1.default, { sx: {
                    mt: "1vh",
                } }))));
};
exports.ContactModalContentTS = ContactModalContentTS;
