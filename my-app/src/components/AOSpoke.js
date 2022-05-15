import { useState } from "react";
import { Box } from "@mui/system";
import { wheelSx, svgShapes, palette } from "../assets/theme";
import { Tooltip } from "@mui/material/";

export const AOSpoke = ({ color, transform, handleClick }) => {
  const [toolTip, setToolTip] = useState("yo");

  // color === palette.aoBlue
  //   ? setToolTip("Completed")
  //   : color === palette.aoYellow
  //   ? setToolTip("In Progress")
  //   : color === palette.aoGrey && setToolTip("Task");

  return (
    <Tooltip title={toolTip}>
      <Box
        sx={
          color === "transparent"
            ? { ...wheelSx.transparent }
            : { ...wheelSx.spoke }
        }
      >
        <svg
          width="12vw"
          fill={color}
          onClick={() => {
            handleClick(color);
          }}
          transform={transform}
          viewBox="11 -11 24 24"
        >
          {color === "transparent" ? (
            <rect width="24" height="24" />
          ) : (
            <path d={svgShapes.quarterCircle} />
          )}
        </svg>
      </Box>
    </Tooltip>
  );
};
