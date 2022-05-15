import { Box } from "@mui/system";
import { wheelSx, svgShapes, palette } from "../assets/theme";
import { Tooltip } from "@mui/material/";

export const AOSpoke = ({ color, transform, handleClick }) => {
  return (
    <Tooltip title="Delete">
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
