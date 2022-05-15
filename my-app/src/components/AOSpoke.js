import { Box } from "@mui/system";
import { wheelSx } from "../assets/theme";
import { svgShapes } from "../assets/theme";
import { Tooltip } from "@mui/material/";

export const AOSpoke = ({ color, transform, handleClick }) => {
  return (
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
  );
};
