import { Box } from "@mui/system";
import { spokeSx } from "../assets/theme";

export const AOSpoke = ({ spoke, color, transform, handleClick }) => {
  return (
    <Box sx={{ ...spokeSx }}>
      <svg
        width="10em"
        fill={color}
        transform={transform}
        viewBox="10 -10 24 24"
      >
        <path
          onClick={() => handleClick(spoke)}
          d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z"
        />
      </svg>
    </Box>
  );
};
