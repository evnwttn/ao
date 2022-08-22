"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOCommentContent = void 0;
const material_1 = require("@mui/material");
const SaveRounded_1 = __importDefault(require("@mui/icons-material/SaveRounded"));
const theme_1 = require("../../assets/theme");
const AOCommentContent = ({ cell, cellComment, handleSubmit, onSubmit, register, }) => {
    return (<>
      <material_1.Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <material_1.TextField id={`${cell.track}.${cell.parameter}`} inputProps={theme_1.commentSx.inputProps} sx={theme_1.commentSx.textField} margin="normal" variant="filled" multiline rows={6} defaultValue={cellComment} {...register("comment", {})}/>
        <material_1.IconButton disableRipple sx={{ cursor: "default" }} type="submit">
          <SaveRounded_1.default sx={{
            ml: "25vw",
            mt: "1vh",
        }}/>
        </material_1.IconButton>
      </material_1.Box>
    </>);
};
exports.AOCommentContent = AOCommentContent;
