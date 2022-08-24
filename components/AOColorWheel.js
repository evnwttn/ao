"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOColorWheel = void 0;
const system_1 = require("@mui/system");
const AOSpoke_1 = require("./AOSpoke");
const theme_1 = require("../assets/theme");
const AOColorWheel = ({ handleClick, openComment }) => {
    return (React.createElement(system_1.Box, null,
        React.createElement(system_1.Box, null,
            React.createElement(AOSpoke_1.AOSpoke, { color: theme_1.palette.aoYellow, shape: theme_1.svgShapes.topLeft, handleClick: (color) => handleClick(color), toolTip: "In Progress", placement: "left-start" }),
            React.createElement(AOSpoke_1.AOSpoke, { color: theme_1.palette.aoBlue, shape: theme_1.svgShapes.topRight, handleClick: (color) => handleClick(color), toolTip: "Completed", placement: "right-start" })),
        React.createElement(system_1.Box, null,
            React.createElement(AOSpoke_1.AOSpoke, { color: theme_1.palette.aoGrey, shape: theme_1.svgShapes.bottomLeft, handleClick: (color) => handleClick(color), toolTip: "Set Task", placement: "left-end" }),
            React.createElement(AOSpoke_1.AOSpoke, { color: theme_1.palette.aoBlack, shape: theme_1.svgShapes.bottomRight, toolTip: "Comments", placement: "right-end", handleClick: openComment }))));
};
exports.AOColorWheel = AOColorWheel;
