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
    return (<>
      <material_1.Box sx={theme_1.modalCenteredSx}>
        <material_1.Box sx={theme_1.newSessionModal.text}>
          {formPrompt === 2 ? (<>
              Enter the <b>track titles</b> you wish to include in the&nbsp;
              {sessionData.id} session.
            </>) : (<>
              Enter or select the <b>session elements</b> you wish to include in
              the {sessionData.id} session.
              <ParameterList_1.ParameterList addParameterList={addParameterList}/>
            </>)}
        </material_1.Box>
        <material_1.Box sx={theme_1.newSessionModal.field}>
          <material_1.TextField sx={{ ml: "8vw", width: "19.5vw" }} variant="standard" margin="normal" autoComplete="off" inputRef={textInput}/>
          <material_1.IconButton onClick={addInputArray} disableRipple>
            <AddCircle_1.default sx={{ mr: "0.75vw" }}/>
          </material_1.IconButton>
        </material_1.Box>
        <material_1.Box>
          <NewModalContentList_1.NewModalContentList data={inputArray} onClick={(title) => removeInputArray(title)}/>
          {inputArray.length > 0 && (<material_1.IconButton onClick={submitInputArray} disableRipple sx={{ ml: "0.75vw" }}>
              <CheckCircle_1.default />
            </material_1.IconButton>)}
        </material_1.Box>
      </material_1.Box>
    </>);
};
exports.NewModalContentListForm = NewModalContentListForm;
