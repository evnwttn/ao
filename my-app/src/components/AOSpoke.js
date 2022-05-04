import { Box } from "@mui/system";
import { palette, spokeSx } from "../assets/theme";
import { svgShapes } from "../assets/theme";

export const AOSpoke = ({ color, transform, handleClick }) => {
  return color === palette.aoBlack ? (
    <Box sx={{ ...spokeSx }}>
      <svg
        width="12vw"
        fill={color}
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
    <Box sx={{ ...spokeSx }}>
      <svg
        width="12vw"
        fill={color}
        transform={transform}
        filter="drop-shadow(0 0 0.5vw rgb(0, 0, 0, 0.25))"
        viewBox="11 -11 24 24"
      >
        <path onClick={() => handleClick(color)} d={svgShapes.quarterCircle} />
      </svg>
    </Box>
  );
};
