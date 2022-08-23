"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContantModalContentTS = void 0;
const react_1 = require("react");
const ContantModalContentTS = () => {
    const [formData, setFormData] = (0, react_1.useState)({});
    const [formLoading, setFormLoading] = (0, react_1.useState)(false);
    const nameField = (0, react_1.useRef)();
    const emailField = (0, react_1.useRef)();
    const messageField = (0, react_1.useRef)();
};
exports.ContantModalContentTS = ContantModalContentTS;
