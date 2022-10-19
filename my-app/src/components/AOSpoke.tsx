import React from "react";
import { Box, Tooltip } from "@mui/material/";
import { wheelSx } from "../assets/theme";

export const AOSpoke = ({
  color,
  shape,
  handleClick,
  toolTip,
  placement,
}: any) => {
  return (
    <Box sx={wheelSx.spoke}>
      <svg
        width="5.75vw"
        fill={color}
        onClick={() => {
          handleClick(color);
        }}
        viewBox="0 0 12 12"
      >
        <Tooltip title={toolTip} placement={placement}>
          <path d={shape} />
        </Tooltip>
      </svg>
    </Box>
  );
};
