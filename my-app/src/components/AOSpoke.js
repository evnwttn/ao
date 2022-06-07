import React from "react";
import { Box } from "@mui/system";
import { wheelSx, svgShapes } from "../assets/theme";
import { Tooltip } from "@mui/material/";

export const AOSpoke = ({
  color,
  transform,
  handleClick,
  toolTip,
  placement,
}) => {
  return (
    <Box sx={{ ...wheelSx.spoke }}>
      <svg
        width="5vw"
        fill={color}
        onClick={() => {
          handleClick(color);
        }}
        transform={transform}
        viewBox="13 0 10 10"
      >
        <Tooltip title={toolTip} placement={placement}>
          <path d={svgShapes.quarterCircle} />
        </Tooltip>
      </svg>
    </Box>
  );
};
