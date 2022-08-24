"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOSpoke = void 0;
const material_1 = require("@mui/material/");
const theme_1 = require("../assets/theme");
const AOSpoke = ({ color, shape, handleClick, toolTip, placement }) => {
    return (React.createElement(material_1.Box, { sx: theme_1.wheelSx.spoke },
        React.createElement("svg", { width: "5.75vw", fill: color, onClick: () => {
                handleClick(color);
            }, viewBox: "0 0 12 12" },
            React.createElement(material_1.Tooltip, { title: toolTip, placement: placement },
                React.createElement("path", { d: shape })))));
};
exports.AOSpoke = AOSpoke;
