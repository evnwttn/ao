"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModalContent = void 0;
const react_1 = require("react");
const material_1 = require("@mui/material");
const Send_1 = __importDefault(require("@mui/icons-material/Send"));
const theme_1 = require("../../../assets/theme");
const ContactModalContent = () => {
    const axios = require("axios").default;
    const [formData, setFormData] = (0, react_1.useState)();
    const [formLoading, setFormLoading] = (0, react_1.useState)(false);
    const nameField = (0, react_1.useRef)();
    const emailField = (0, react_1.useRef)();
    const messageField = (0, react_1.useRef)();
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
        React.createElement(material_1.IconButton, { disableRipple: true, sx: { cursor: "default" }, onClick: () => setFormData({
                name: nameField.current.value,
                email: emailField.current.value,
                message: messageField.current.value,
            }) },
            React.createElement(material_1.CircularProgress, { size: "2.33vw", sx: Object.assign(Object.assign({}, theme_1.circularProgressSx), { color: formLoading === true ? theme_1.palette.aoBlue : theme_1.palette.aoGrey }) }),
            React.createElement(Send_1.default, { sx: {
                    mt: "1vh",
                } }))));
};
exports.ContactModalContent = ContactModalContent;
