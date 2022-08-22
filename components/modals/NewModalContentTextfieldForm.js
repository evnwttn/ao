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
    return (<material_1.Box sx={theme_1.modalCenteredSx} component="form" onSubmit={handleSubmit(onSubmitForm)}>
      <material_1.TextField variant="standard" inputRef={textInput} helperText={formPrompt === 0
            ? "enter artist name to continue"
            : "enter a session title to continue"} margin="normal" autoComplete="off" {...(formPrompt === 0 ? register("author") : register("id"))}/>
      <material_1.Box>
        <material_1.IconButton disableRipple type="submit">
          <CheckCircle_1.default sx={{
            my: "0.25vw",
        }}/>
        </material_1.IconButton>
      </material_1.Box>
    </material_1.Box>);
};
exports.NewModalContentTextfieldForm = NewModalContentTextfieldForm;
