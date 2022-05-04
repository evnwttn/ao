import { Box } from "@mui/system";
import { spokeSx } from "../assets/theme";
import { svgShapes } from "../assets/theme";

export const AOSpoke = ({ color, transform, handleClick }) => {
  return (
    <Box sx={{ ...spokeSx }}>
      <svg
        width="12vw"
        fill={color}
        transform={transform}
        viewBox="11 -11 24 24"
      >
        {color === "transparent" ? (
          console.log("color")
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
