import { Box } from "@mui/system";
import { palette } from "../assets/theme";

export const AOColourWheel = (cellColour) => {
  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        backgroundColor: cellColour.cellColour,
      }}
    ></Box>
  );
};
