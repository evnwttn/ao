"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModalContent = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const material_1 = require("@mui/material");
const Send_1 = __importDefault(require("@mui/icons-material/Send"));
const theme_1 = require("../../assets/theme");
const ContactModalContent = () => {
    const axios = require("axios").default;
    const [formData, setFormData] = (0, react_2.useState)({
        name: '',
        email: '',
        message: '',
    });
    const [formLoading, setFormLoading] = (0, react_2.useState)(false);
    const nameField = (0, react_2.useRef)(null);
    const emailField = (0, react_2.useRef)(null);
    const messageField = (0, react_2.useRef)(null);
    (0, react_2.useEffect)(() => {
        if (formData.message !== '') {
            setFormLoading(true);
            axios
                .post("http://localhost:5000/contact", Object.assign({}, formData))
                .then((_data) => console.log(JSON.stringify(_data)))
                .catch(function (error) {
                console.log(error);
            });
        }
    }, [formData, axios]);
    (0, react_2.useEffect)(() => {
        setTimeout(() => {
            if (formLoading) {
                setFormLoading(false);
            }
        }, 2250);
    }, [formLoading]);
    return (react_1.default.createElement(material_1.Box, { sx: theme_1.modalCenteredSx },
        react_1.default.createElement(material_1.TextField, { placeholder: "Name", inputRef: nameField, variant: "standard", margin: "normal", sx: { width: "28vw" } }),
        react_1.default.createElement(material_1.TextField, { placeholder: "Email Address", inputRef: emailField, variant: "standard", margin: "normal", sx: { width: "28vw" } }),
        react_1.default.createElement(material_1.TextField, { placeholder: "Message", inputRef: messageField, variant: "standard", margin: "normal", sx: { width: "28vw" } }),
        react_1.default.createElement(material_1.IconButton, { disableRipple: true, sx: { cursor: "default" }, onClick: () => {
                var _a, _b, _c;
                return setFormData({
                    name: (_a = nameField === null || nameField === void 0 ? void 0 : nameField.current) === null || _a === void 0 ? void 0 : _a.value,
                    email: (_b = emailField === null || emailField === void 0 ? void 0 : emailField.current) === null || _b === void 0 ? void 0 : _b.value,
                    message: (_c = messageField === null || messageField === void 0 ? void 0 : messageField.current) === null || _c === void 0 ? void 0 : _c.value,
                });
            } },
            react_1.default.createElement(material_1.CircularProgress, { size: "2.33vw", sx: Object.assign(Object.assign({}, theme_1.circularProgressSx), { color: formLoading === true ? theme_1.palette.aoBlue : theme_1.palette.aoGrey }) }),
            react_1.default.createElement(Send_1.default, { sx: {
                    mt: "1vh",
                } }))));
};
exports.ContactModalContent = ContactModalContent;
