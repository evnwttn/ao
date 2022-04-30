import { Box } from "@mui/system";
import { spokeSx } from "../assets/theme";
import { quarterCircle } from "../assets/theme";

export const AOSpoke = ({ color, transform, handleClick }) => {
  return (
    <Box sx={{ ...spokeSx }}>
      <svg
        width="12vw"
        fill={color}
        transform={transform}
        viewBox="10 -10 24 24"
      >
        <path onClick={() => handleClick(color)} d={quarterCircle.svg} />
      </svg>
    </Box>
  );
};
