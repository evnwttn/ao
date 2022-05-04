import { Box } from "@mui/system";
import { wheelSx } from "../assets/theme";
import { svgShapes } from "../assets/theme";

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
        transform={transform}
        viewBox="11 -11 24 24"
      >
        {color === "transparent" ? (
          <rect
            onClick={() => {
              handleClick(color);
            }}
            width="24"
            height="24"
          />
        ) : (
          <path
            onClick={() => handleClick(color)}
            d={svgShapes.quarterCircle}
          />
        )}
      </svg>
    </Box>
  );
};
