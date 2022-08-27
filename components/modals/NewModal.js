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
exports.NewModalContent = void 0;
const react_1 = __importStar(require("react"));
const NewModalContent = () => {
    const axios = require("axios").default;
    // const [sessionData, setSessionData] = useState();
    const [startNewSession, setStartNewSession] = (0, react_1.useState)(false);
    const [formPrompt, setFormPrompt] = (0, react_1.useState)(0);
    const [triggerSubmit, setTriggerSubmit] = (0, react_1.useState)(0);
    const [inputArray, setInputArray] = (0, react_1.useState)([]);
    // const textInput = React.useRef(null);
    // const { register, handleSubmit, setValue } = useForm({
    //   defaultValues: {
    //     parameters: ["title"],
    //   },
    // });
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.NewModalContent = NewModalContent;
