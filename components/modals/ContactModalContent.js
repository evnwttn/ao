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
exports.ContantModalContentTS = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const material_1 = require("@mui/material");
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
        setTimeout(() => {
            if (formLoading) {
                setFormLoading(false);
            }
        }, 2250);
    }, [formLoading]);
    return (React.createElement(material_1.Box, null));
};
exports.ContantModalContentTS = ContantModalContentTS;
