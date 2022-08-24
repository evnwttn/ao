"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewModalContentListForm = void 0;
const material_1 = require("@mui/material");
const AddCircle_1 = __importDefault(require("@mui/icons-material/AddCircle"));
const CheckCircle_1 = __importDefault(require("@mui/icons-material/CheckCircle"));
const NewModalContentList_1 = require("./NewModalContentList");
const ParameterList_1 = require("./ParameterList");
const theme_1 = require("../../assets/theme");
const NewModalContentListForm = ({ addInputArray, removeInputArray, addParameterList, submitInputArray, formPrompt, sessionData, textInput, inputArray, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { sx: theme_1.modalCenteredSx },
            React.createElement(material_1.Box, { sx: theme_1.newSessionModal.text }, formPrompt === 2 ? (React.createElement(React.Fragment, null,
                "Enter the ",
                React.createElement("b", null, "track titles"),
                " you wish to include in the\u00A0",
                sessionData.id,
                " session.")) : (React.createElement(React.Fragment, null,
                "Enter or select the ",
                React.createElement("b", null, "session elements"),
                " you wish to include in the ",
                sessionData.id,
                " session.",
                React.createElement(ParameterList_1.ParameterList, { addParameterList: addParameterList })))),
            React.createElement(material_1.Box, { sx: theme_1.newSessionModal.field },
                React.createElement(material_1.TextField, { sx: { ml: "8vw", width: "19.5vw" }, variant: "standard", margin: "normal", autoComplete: "off", inputRef: textInput }),
                React.createElement(material_1.IconButton, { onClick: addInputArray, disableRipple: true },
                    React.createElement(AddCircle_1.default, { sx: { mr: "0.75vw" } }))),
            React.createElement(material_1.Box, null,
                React.createElement(NewModalContentList_1.NewModalContentList, { data: inputArray, onClick: (title) => removeInputArray(title) }),
                inputArray.length > 0 && (React.createElement(material_1.IconButton, { onClick: submitInputArray, disableRipple: true, sx: { ml: "0.75vw" } },
                    React.createElement(CheckCircle_1.default, null)))))));
};
exports.NewModalContentListForm = NewModalContentListForm;
