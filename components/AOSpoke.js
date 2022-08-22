"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOSpoke = void 0;
const material_1 = require("@mui/material/");
const theme_1 = require("../assets/theme");
const AOSpoke = ({ color, shape, handleClick, toolTip, placement }) => {
    return (<material_1.Box sx={theme_1.wheelSx.spoke}>
      <svg width="5.75vw" fill={color} onClick={() => {
            handleClick(color);
        }} viewBox="0 0 12 12">
        <material_1.Tooltip title={toolTip} placement={placement}>
          <path d={shape}/>
        </material_1.Tooltip>
      </svg>
    </material_1.Box>);
};
exports.AOSpoke = AOSpoke;
