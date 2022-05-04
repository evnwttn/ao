import { Box } from "@mui/system";
import { wheelSx } from "../assets/theme";
import { svgShapes } from "../assets/theme";

export const AOSpoke = ({ color, transform, handleClick }) => {
  return color === "transparent" ? (
    <Box sx={{ ...wheelSx.transparent }}>
      <svg
        width="12vw"
        fill="transparent"
        transform={transform}
        viewBox="11 -11 24 24"
      >
        <rect
          onClick={() => {
            handleClick(color);
          }}
          width="24"
          height="24"
        />
      </svg>
    </Box>
  ) : (
    <Box sx={{ ...wheelSx.spoke }}>
      <svg
        width="12vw"
        fill={color}
        transform={transform}
        viewBox="11 -11 24 24"
      >
        <path onClick={() => handleClick(color)} d={svgShapes.quarterCircle} />
      </svg>
    </Box>
  );
};
