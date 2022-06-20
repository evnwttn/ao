import { Box, Tooltip } from "@mui/material/";
import { wheelSx, svgShapes } from "../assets/theme";

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
        width="5.75vw"
        fill={color}
        onClick={() => {
          handleClick(color);
        }}
        // transform={transform}
        // webkit-transform={transform}
        // ms-transform={transform}
        viewBox="0 0 12 12"
      >
        <Tooltip title={toolTip} placement={placement}>
          <path d={svgShapes.topLeft} />
        </Tooltip>
      </svg>
    </Box>
  );
};
