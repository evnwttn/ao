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
        transform={transform}
        sx={{ msTransform: transform, webkitTransform: transform }}
        viewBox="11 1 12 12"
      >
        <Tooltip title={toolTip} placement={placement}>
          <path d={svgShapes.quarterCircle} />
        </Tooltip>
      </svg>
    </Box>
  );
};
