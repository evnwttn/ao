"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOPopover = void 0;
const react_1 = require("react");
const material_1 = require("@mui/material/");
const RemoveCircleOutline_1 = __importDefault(require("@mui/icons-material/RemoveCircleOutline"));
const AOColorWheel_1 = require("./AOColorWheel");
const AOCommentBase_1 = require("./AOCommentBase");
const theme_1 = require("../assets/theme");
const AOPopover = ({ cell, cellComment, handleClick, register, handleSubmit, onSubmit, }) => {
    const [isPopoverOpen, setIsPopoverOpen] = (0, react_1.useState)(false);
    const [commentOpen, setCommentOpen] = (0, react_1.useState)("1");
    const handleClose = () => {
        setIsPopoverOpen(false);
        setCommentOpen("1");
    };
    (0, react_1.useEffect)(() => {
        commentOpen !== "1" ? setIsPopoverOpen(true) : setIsPopoverOpen(false);
    }, [commentOpen]);
    (0, react_1.useEffect)(() => {
        setIsPopoverOpen(false);
    }, [cellComment, setIsPopoverOpen]);
    return (<>
      <AOCommentBase_1.AOCommentBase cell={cell} cellComment={cellComment} open={isPopoverOpen} handleClose={handleClose} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit}/>
      <AOColorWheel_1.AOColorWheel handleClick={(color) => handleClick(color)} openComment={() => setCommentOpen("2")}/>
      <material_1.Box sx={theme_1.wheelSx.remove}>
        <material_1.Tooltip title="Cancel Task" placement="right-end">
          <RemoveCircleOutline_1.default onClick={() => handleClick("transparent")}/>
        </material_1.Tooltip>
      </material_1.Box>
    </>);
};
exports.AOPopover = AOPopover;
