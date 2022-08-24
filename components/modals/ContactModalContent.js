"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContantModalContentTS = void 0;
const react_1 = require("react");
const ContantModalContentTS = () => {
    const axios = require("axios").default;
    const [formData, setFormData] = (0, react_1.useState)({});
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
        const timer = setTimeout(() => {
            if (formLoading) {
                setFormLoading(false);
            }
        }, 2250);
        return () => clearTimeout(timer);
    }, [formLoading]);
};
exports.ContantModalContentTS = ContantModalContentTS;
