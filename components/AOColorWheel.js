"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AOColorWheel = void 0;
const system_1 = require("@mui/system");
const AOSpoke_1 = require("./AOSpoke");
const theme_1 = require("../assets/theme");
const AOColorWheel = ({ handleClick, openComment }) => {
    return (<system_1.Box>
      <system_1.Box>
        <AOSpoke_1.AOSpoke color={theme_1.palette.aoYellow} shape={theme_1.svgShapes.topLeft} handleClick={(color) => handleClick(color)} toolTip="In Progress" placement="left-start"/>
        <AOSpoke_1.AOSpoke color={theme_1.palette.aoBlue} shape={theme_1.svgShapes.topRight} handleClick={(color) => handleClick(color)} toolTip="Completed" placement="right-start"/>
      </system_1.Box>
      <system_1.Box>
        <AOSpoke_1.AOSpoke color={theme_1.palette.aoGrey} shape={theme_1.svgShapes.bottomLeft} handleClick={(color) => handleClick(color)} toolTip="Set Task" placement="left-end"/>
        <AOSpoke_1.AOSpoke color={theme_1.palette.aoBlack} shape={theme_1.svgShapes.bottomRight} toolTip="Comments" placement="right-end" handleClick={openComment}/>
      </system_1.Box>
    </system_1.Box>);
};
exports.AOColorWheel = AOColorWheel;
