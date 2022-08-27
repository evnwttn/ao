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
const react_router_dom_1 = require("react-router-dom");
const react_hook_form_1 = require("react-hook-form");
const NewModalContentTextfieldForm_1 = require("./NewModalContentTextfieldForm");
const NewModalContentListForm_1 = require("./NewModalContentListForm");
const NewModalContent = () => {
    const axios = require("axios").default;
    const [sessionData, setSessionData] = (0, react_1.useState)();
    const [startNewSession, setStartNewSession] = (0, react_1.useState)(false);
    const [formPrompt, setFormPrompt] = (0, react_1.useState)(0);
    const [triggerSubmit, setTriggerSubmit] = (0, react_1.useState)(0);
    const [inputArray, setInputArray] = (0, react_1.useState)([]);
    const textInput = (0, react_1.useRef)(null);
    const { register, handleSubmit, setValue } = (0, react_hook_form_1.useForm)({
        defaultValues: {
            parameters: ["title"],
        },
    });
    const addInputArray = () => {
        let textField = textInput.current.value;
        switch (formPrompt) {
            case 2:
                if (inputArray.length <= 11) {
                    setInputArray((inputArray) => [...inputArray, textField]);
                }
                else {
                    alert(`Maximum Number of Tracks Reached`);
                }
                break;
            case 3:
                if (inputArray.length <= 10) {
                    setInputArray((inputArray) => [...inputArray, textField]);
                }
                else {
                    alert(`Maximum Number of Elements Reached`);
                }
                break;
            default:
                alert(`Invalid title`);
        }
    };
    const removeInputArray = (title) => {
        setInputArray((inputArray) => inputArray.filter((titles) => titles !== title));
    };
    const addParameterList = (title) => {
        if (inputArray.length <= 10) {
            setInputArray((inputArray) => [...inputArray, title]);
        }
        else {
            alert(`Maximum Number of Elements Reached`);
        }
    };
    const checkDuplicates = () => {
        setInputArray((inputArray) => inputArray.filter((input, index, array) => array.indexOf(input) === index));
    };
    (0, react_1.useEffect)(() => {
        checkDuplicates();
        textInput.current.value = "";
    }, [inputArray.length]);
    const submitInputArray = () => {
        inputArray.forEach((title, index) => {
            formPrompt === 2
                ? setValue(`tracks.${index}.title`, title)
                : setValue(`parameters.${index + 1}`, title);
        });
        setTriggerSubmit(triggerSubmit + 1);
    };
    (0, react_1.useEffect)(() => {
        if (triggerSubmit >= 1) {
            handleSubmit((data) => submitSessionData(data))();
        }
    }, [triggerSubmit, handleSubmit]);
    const submitSessionData = (data) => {
        setSessionData(Object.assign({}, data));
    };
    (0, react_1.useEffect)(() => {
        if (formPrompt <= 1) {
            sessionData && textInput.current.value && setFormPrompt(formPrompt + 1);
            textInput.current.value = "";
        }
        if (formPrompt === 2) {
            sessionData.tracks && setFormPrompt(formPrompt + 1);
            setInputArray([]);
        }
        if (formPrompt === 3) {
            sessionData.parameters.length > 1 && setFormPrompt(formPrompt + 1);
        }
        if (formPrompt === 4) {
            setStartNewSession(true);
        }
    }, [sessionData, formPrompt]);
    (0, react_1.useEffect)(() => {
        startNewSession && console.log(sessionData);
        // axios
        //   .post("http://localhost:5000/contact", {
        //     ...sessionData,
        //   })
        //   .then((_data) => console.log(JSON.stringify(_data)))
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }, [startNewSession, axios, sessionData]);
    return formPrompt <= 1 ? (react_1.default.createElement(NewModalContentTextfieldForm_1.NewModalContentTextfieldForm, { handleSubmit: handleSubmit, onSubmitForm: submitSessionData, textInput: textInput, formPrompt: formPrompt, register: register })) : formPrompt <= 3 ? (react_1.default.createElement(NewModalContentListForm_1.NewModalContentListForm, { handleSubmit: handleSubmit, addInputArray: addInputArray, removeInputArray: removeInputArray, addParameterList: addParameterList, submitInputArray: submitInputArray, setValue: setValue, formPrompt: formPrompt, sessionData: sessionData, textInput: textInput, inputArray: inputArray })) : (startNewSession && (react_1.default.createElement(react_router_dom_1.Navigate, { to: "/aogrid", state: { from: "new", data: sessionData }, replace: true })));
};
exports.NewModalContent = NewModalContent;
